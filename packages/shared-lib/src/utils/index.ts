import { RouteRecord } from "../types";

/**
 * routes 映射路由
 * @param routes
 * @returns
 */
export function mapRoutes(routes: any[]): RouteRecord[] {
  return routes.map((route) => {
    const { path, name, component, children } = route;
    const newRoute: RouteRecord = {
      key: path,
      path,
      name: name as string,
      componentPath: getComponentPath(component),
    };
    children && (newRoute.children = mapRoutes(children));
    return newRoute;
  });
}

/**
 * 获取组件路径
 * @param components
 * @returns
 */
function getComponentPath(component: any): string {
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
