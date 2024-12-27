import RouterTrack from "./RouterTrack";
import { RouterTrackOptions } from "router-track-common";

export const createRouterTrack = function (options?: RouterTrackOptions) {
  return new RouterTrack(options as RouterTrackOptions);
};
