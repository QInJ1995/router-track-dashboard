export interface TrackRouterOptions {
  frameName: string; // frame name
}

export interface RouteRecord {
  key?: string;
  path: string;
  name: string;
  componentPath: string;
  children?: RouteRecord[]
  params?: string
}
