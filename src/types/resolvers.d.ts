export type Resolver = (parent: any, args: any, context: any, info: any) => any;

export interface Resolvers {
  [key: stirng]: {
    [key: stirng]: Resolver;
  };
}
