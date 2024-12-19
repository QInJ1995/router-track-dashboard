import RouterTrack from "./routerTrack";
import { RouterTrackOptions } from "./types";

export const createRouterTrack = function (options?: RouterTrackOptions) {
  return new RouterTrack(options as RouterTrackOptions);
};
