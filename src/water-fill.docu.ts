export const apiDocs: ApiDocs = {
  name: 'water-fill',
  description: 'A service which provides information about the water fill level of our coffee machine.',
  apiBase: 'http://avocado.uniks.de:13345/api',
  services: [
    {
      endpoint: '/water-fill',
      method: 'POST',
      description: 'Creates a new measurement.',
      body: [
        {
          label: 'value',
          type: 'number',
        },
        {
          label: 'timestamp',
          type: 'number',
        },
      ],
      // tslint:disable-next-line
      example: "curl -X POST localhost:3000/api/water-fill -d '{'value': 0.5, 'timestamp': 123456789}'",
    },
    {
      endpoint: '/water-fill',
      description: 'Returns all measurements or all measurements starting from the given timestamp.',
      method: 'GET',
      kind: 'timeseries',
      query: [
        {
          label: 'timestamp',
          type: 'number',
        },
      ],
      example: 'curl -X GET localhost:3000/api/water-fill?timestamp=123456789',
    },
    {
      endpoint: '/water-fill/tank/status',
      description: 'Returns a flag, which indicates whether the tank is full or empty.',
      method: 'GET',
      kind: 'single',
      example: 'curl -X GET localhost:3000/api/water-fill/tank/status',
    },
    {
      endpoint: '/water-fill/last',
      description: 'Return the last measured value.',
      method: 'GET',
      kind: 'single',
      example: 'curl -X GET localhost:3000/api/water-fill/last',
    },
    {
      endpoint: '/water-fill/:id',
      description: 'Returns a single measurement with the given id.',
      method: 'GET',
      kind: 'single',
      param: [
        {
          label: 'id',
          type: 'string',
        },
      ],
      example: 'curl -X GET localhost:3000/api/water-fill/424242',
    },
    {
      endpoint: '/water-fill/:id',
      description: 'Updates a measurement with the given id.',
      method: 'PUT',
      param: [
        {
          label: 'id',
          type: 'string',
        },
      ],
      body: [
        {
          label: 'value',
          type: 'number',
        },
      ],
      // tslint:disable-next-line
      example: "curl -X PUT localhost:3000/api/water-fill/424242 -d '{'value': 0.8}'",
    },
    {
      endpoint: '/water-fill/:id',
      description: 'Deletes the measurement with the given id.',
      method: 'DELETE',
      param:  [
        {
          label: 'id',
          type: 'string',
        },
      ],
      example: 'curl -X DELETE localhost:3000/api/water-fill/424242',
    },
    {
      endpoint: '/water-fill/action/on',
      description: 'Sends a turn on event to the particle cloud.',
      actionLabel: 'Turn on',
      method: 'GET',
      kind: 'action',
      example: 'curl -X DELETE localhost:3000/api/water-fill/action/on',
    },
    {
      endpoint: '/water-fill/action/off',
      description: 'Sends a turn off event to the particle cloud.',
      actionLabel: 'Turn off',
      method: 'GET',
      kind: 'action',
      example: 'curl -X DELETE localhost:3000/api/water-fill/action/off',
    },
  ],
};

// These types can be used by other micro services to ensure compability
export interface ApiDocs {
  name: string;
  description: string;
  apiBase: string;
  services: EndpointDefinition[];
}

export interface EndpointDefinition {
  description: string;
  endpoint: string;
  method: HttpVerb;
  kind?: Kind;
  query?: Parameter[];
  param?: Parameter[];
  body?: Parameter[];
  actionLabel?: string;
  example: string;
}

export interface Parameter {
  label: string;
  type: ParameterType;
}

export type Kind = 'timeseries' | 'single' | 'action';
export type ParameterType = 'number' | 'string' | 'boolean';
export type HttpVerb = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD';
