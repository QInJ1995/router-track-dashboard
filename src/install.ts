import { nextTick } from "vue";
import { BASE_PATE, SET_BASE_PATE } from "./common";
import { RouterTrackOptions } from "./types";

// 安装
const install = function (app: any, options: RouterTrackOptions) {
  let { path, router = app.config.globalProperties.$router } = options || {};
  path && SET_BASE_PATE(path); // 设置基础路径
  if (!router) {
    return console.warn("[RouterTrack]-app未配置router，无法使用此插件");
  }
  // 动态添加路由
  router.addRoute({
    path: BASE_PATE,
    name: "RouterTrack",
    component: () => import("./pages/index.vue"), // 动态加载组件
  });
  // 匹配路径进行跳转
  const { pathname } = window.location;
  if (pathname === BASE_PATE) {
    // 等待路由更新后跳转
    nextTick(() => {
      router.push(BASE_PATE); // 跳转到新添加的路由
    });
  }
};

export default install;
