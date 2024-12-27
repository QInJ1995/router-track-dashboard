import { RouteRecord } from "../types";
import { FrameType, BASE_PATE } from "../common";

export function printOpenPath(): void {
  const { origin } = window.location;
  console.log("[RouterTrack]-打开地址:", origin + BASE_PATE);
}

/**
 * routes 映射路由
 * @param routes
 * @returns
 */
export function mapRoutes(
  routes: any[],
  frameType: string = FrameType.VUE3
): RouteRecord[] {
  return routes.map((route) => {
    const { path, name, component, children } = route;
    const newRoute: RouteRecord = {
      key: path,
      path,
      name: name as string,
      componentPath: getComponentPath(component, frameType),
    };
    children && (newRoute.children = mapRoutes(children, frameType));
    return newRoute;
  });
}

/**
 * 获取组件路径
 * @param components
 * @returns
 */
function getComponentPath(component: any, frameType: string): string {
  switch (frameType) {
    case FrameType.VUE2:
      return getVue2ComponentPath(component);
    default:
      return getVue3ComponentPath(component);
  }
}

/**
 * 获取 Vue3 组件路径
 * @param component
 * @returns
 */
function getVue3ComponentPath(component: any): string {
  let componentPath: string = "";
  if (component) {
    let defaultVale = "";
    if (typeof component === "function") {
      defaultVale = component.toString();
      const regex = defaultVale.includes("?t=")
        ? /import\("(.+?)\?t=\d+"\)/
        : /import\("(.*?)"\)/;
      const match = defaultVale.match(regex);
      componentPath = match ? match[1] : "";
    } else {
      const regex = /^.*(\/src\/views\/.*)$/;
      const match = component.__file.match(regex);
      componentPath = match ? match[1] : "";
    }
  }
  return componentPath;
}

/**
 * 获取 Vue2 组件路径
 * @param component
 * @returns
 */
function getVue2ComponentPath(component: any): string {
  let componentPath: string = "";
  if (component) {
    let defaultVale = "";
    if (typeof component === "function") {
      defaultVale = component.toString();
      const split1 = defaultVale.split("src");
      if (split1[1]) {
        const split2 = split1[1].split(".vue");
        componentPath = "src" + split2[0] + ".vue";
      }
    } else {
      componentPath = component.__file;
    }
  }
  return componentPath;
}
