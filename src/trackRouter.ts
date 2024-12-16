import { TrackRouterOptions } from "./types";
import install from "./install";

class TrackRouter {
  // 框架名称 默认vue
  frameName: string = "vue";

  constructor(options: TrackRouterOptions) {
    if (options) {
      this.frameName = options.frameName;
    }
  }

  // 安装
  install(app: any) {
    install(app);
  }
}

// 创建TrackRouter
export const createRouterTrackDashboard = function (options?: TrackRouterOptions) {
  return new TrackRouter(options as TrackRouterOptions);
};
