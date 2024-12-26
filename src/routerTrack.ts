import { RouterTrackOptions } from "./types";
import install from "./install";

export default class RouterTrack {
  private options: RouterTrackOptions;
  constructor(options: RouterTrackOptions) {
    this.options = options
  }

  // 安装
  install(app: any) {
    install(app, this.options);
  }
}
