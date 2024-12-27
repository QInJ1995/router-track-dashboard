import RouterTrack from "./RouterTrack";
import { RouterTrackOptions } from "shared-lib";

export const createRouterTrack = function (options?: RouterTrackOptions) {
  return new RouterTrack(options as RouterTrackOptions);
};
