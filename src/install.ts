import { nextTick } from "vue";

const path = "/track-router";

const install = function (app: any, ...args: any[]) {
  // 获取 Vue 应用中的 router 实例
  const router = app.config.globalProperties.$router;

  if (router) {
    // 动态添加路由
    router.addRoute({
      path,
      name: "TrackRouter",
      component: () => import("./pages/index.vue"), // 动态加载组件
    });
    // 匹配路径进行跳转
    const { pathname } = window.location;
    if (pathname === path) {
      // 等待路由更新后跳转
      nextTick(() => {
        router.push(path); // 跳转到新添加的路由
      });
    }
    // 检查是否添加成功
    // console.log(router.getRoutes()); // 打印所有路由配置
  } else {
    console.warn("[TrackRouter]-app未配置router，无法使用此插件");
  }
};

export default install;
