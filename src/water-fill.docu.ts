export const apiDocu = {
  name: 'water-fill',
  describtion: 'A service which provides informations about the water fill level of our coffee machine',
  apiBase: 'http://avocado.uniks.de:13345/api',
  services: [
    {
      endpoint: '/water-fill',
      method: 'POST',
      body: {
        level: 'number',
        timestamp: 'number',
      },
      // tslint:disable-next-line
      example: "curl -X POST localhost:3000/api/water-fill -d '{'level': 0.5, 'timestamp': 123456789}'",
    },
    {
      endpoint: '/water-fill',
      method: 'GET',
      kind: 'timeseries',
      query: {
        timestamp: 'number',
      },
      example: 'curl -X GET localhost:3000/api/water-fill?timestamp=123456789',
    },
    {
      endpoint: '/water-fill/:id',
      method: 'GET',
      kind: 'single',
      param: {
        id: 'string',
      },
      example: 'curl -X GET localhost:3000/api/water-fill/424242',
    },
    {
      endpoint: '/water-fill/:id',
      method: 'PUT',
      param: {
        id: 'string',
      },
      body: {
        level: 'number',
      },
      // tslint:disable-next-line
      example: "curl -X PUT localhost:3000/api/water-fill/424242 -d '{'level': 0.8}'",
    },
    {
      endpoint: '/water-fill/:id',
      method: 'DELETE',
      param: {
        id: 'string',
      },
      example: 'curl -X DELETE localhost:3000/api/water-fill/424242',
    },
    {
      endpoint: '/water-fill/action/on',
      method: 'GET',
      kind: 'action',
      example: 'curl -X DELETE localhost:3000/api/water-fill/action/on',
    },
    {
      endpoint: '/water-fill/action/off',
      method: 'GET',
      kind: 'action',
      example: 'curl -X DELETE localhost:3000/api/water-fill/action/off',
    },
  ],
};