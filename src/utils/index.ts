import { RouteRecordNormalized, RouteRecordRaw } from "vue-router";
import { RouteRecord } from "../types";
import { BASE_PATE } from "../common";

/**
 * routes 转树处理
 * @param routes
 * @returns
 */
export function routesToTree(routes: RouteRecordNormalized[]): RouteRecord[] {
  const list: RouteRecord[] = [];
  const hasChildrenList: RouteRecordNormalized[] = routes.filter(
    (route) => route.children && route.children.length
  );
  routes.forEach((route) => {
    if (
      !hasChildrenList.find((hasChild) =>
        hasChild.children.find(
          (child) => child.path === route.path && child.name === route.name
        )
      )
    ) {
      const { path, name, components, children } = route;
      path !== BASE_PATE &&
        list.push({
          key: path,
          path,
          name: name as string,
          componentPath: getComponentPath(components),
          children: childrenToTree(children, path),
        });
    }
  });
  return list;
}

/**
 * children 转树处理
 * @param children
 * @returns
 */
function childrenToTree(
  children: RouteRecordRaw[] | undefined,
  parentPath: string
): RouteRecord[] | undefined {
  if (!children) return;
  return children.map((child) => {
    let { path, name, component, children } = child;
    path = (parentPath + path).replace("//", "/");
    return {
      key: path,
      path,
      name,
      componentPath: getComponentPath(component),
      children: childrenToTree(children, path),
    } as RouteRecord;
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
    let defaultVale = component.default || component;
    if (typeof defaultVale === "function") {
      defaultVale = defaultVale.toString();
      const regex = defaultVale.includes("?t=")
        ? /import\("(.+?)\?t=\d+"\)/
        : /import\("(.*?)"\)/;
      const match = defaultVale.match(regex);
      componentPath = match ? match[1] : "";
    } else {
      const regex = /^.*(\/src\/views\/.*)$/;
      const match = defaultVale.__file.match(regex);
      componentPath = match ? match[1] : "";
    }
  }
  return componentPath;
}
