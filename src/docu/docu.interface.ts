// These types can be used by other micro services to ensure compatibility
export interface ApiDocs {
    name: string;
    description: string;
    apiBase: string;
    author: string;
    services: EndpointDefinition[];
  }
  
  export interface EndpointDefinition {
    name: string;
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
  
  export type Kind = 'timeseries' | 'single' | 'action' | 'flag';
  export type ParameterType = 'number' | 'string' | 'boolean';
  export type HttpVerb = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD';
  