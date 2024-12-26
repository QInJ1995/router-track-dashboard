export interface IRouterTrackOptions {
  path?: string;
  router?: any;
}

export type RouterTrackOptions = IRouterTrackOptions | undefined;

export interface RouteRecord {
  key?: string;
  path: string;
  name: string;
  componentPath: string;
  children?: RouteRecord[];
  params?: string;
}
