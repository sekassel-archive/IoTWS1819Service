#!/usr/bin/env node
const request = require('request-promise-native');

const rancherApi = request.defaults({
  baseUrl: 'http://avocado.uniks.de:8080/v2-beta/projects/1a5',
  auth: {
    user: process.env.RANCHER_ACCESS || '',
    pass: process.env.RANCHER_KEY ||''
  },
  json: true
});

const sleep = (sec) => new Promise((resolve) => setTimeout(resolve, sec * 1000));

async function deployToRancher() {
  let retryCount = 5;
  const stackName = 'iot';
  const serviceName = 'waterfillservice';               // CHANGE THIS LINE, TO YOUR SERVICE NAME !!!!!
  const dockerUuid = 'docker:kosren/water-fill:latest'  // CHANGE THIS LINE, TO YOUR DOCKER IMAGE !!!!!

  // Check whether there is the needed stack
  const stack = await rancherApi.get(`/stacks?name=${stackName}`).catch((err) => console.log(err));
  if (!stack || !stack.data[0]) {
    console.log('Could not retrieve stack informations. Deploy failed!');
    return;
  }
  const stackId = stack.data[0].id;

  // Check whether there is the needed service
  const service = await rancherApi.get(`/services?name=${serviceName}&stackId=${stackId}`).catch((err) => console.log(err));
  if (!service || !service.data[0]) {
    console.log('Could not find service name. Check the SERVICE_NAME variable. Deploy failed!');
    return;
  }
  const { id, state, launchConfig } = service.data[0];
  launchConfig.imageUuid = dockerUuid;

  // Upgrade service
  const body = {
    inServiceStrategy: {
      launchConfig
    }
  };
  await rancherApi.post(`/services/${id}/?action=upgrade`, { body })
  console.log('Waiting for upgrade...');
  
  let currentService = await rancherApi.get(`/services/${id}`);
  while (currentService.state !== 'upgraded' && retryCount >= 0) {
    await sleep(5);
    currentService = await rancherApi.get(`/services/${id}`);
    retryCount--;
  }

  if (retryCount < 0) {
    console.log('Timeout, check connection!');
    return;
  }
  retryCount = 5;

  // Finish upgrade
  await rancherApi.post(`/services/${id}?action=finishupgrade`);
  console.log('Waiting for service starting...');

  currentService = await rancherApi.get(`/services/${id}`);
  while (currentService.state !== 'active' && retryCount >= 0) {
    await sleep(5);
    currentService = await rancherApi.get(`/services/${id}`);
    retryCount--;
  }

  if (retryCount < 0) {
    console.log('Timeout, check connection!');
    return;
  }

  console.log('Service is running, upgrade successfull');

}
deployToRancher();