import { nextTick } from "vue";
import { BASE_PATE } from "./common";

// 安装
const install = function (app: any, ...args: any[]) {
  // 获取 Vue 应用中的 router 实例
  const router = app.config.globalProperties.$router;
  if (router) {
    // 动态添加路由
    router.addRoute({
      path: BASE_PATE,
      name: "TrackRouter",
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
  } else {
    console.warn("[TrackRouter]-app未配置router，无法使用此插件");
  }
};

export default install;
