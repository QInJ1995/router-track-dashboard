export interface RouterTrackOptions {}

export interface RouteRecord {
  key?: string;
  path: string;
  name: string;
  componentPath: string;
  children?: RouteRecord[];
  params?: string;
}
