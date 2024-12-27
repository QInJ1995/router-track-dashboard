<template>
  <div class="container">
    <a-layout class="layout">
      <a-layout-header class="layout-header">ROUTER TRACK</a-layout-header>
      <a-layout-content class="layout-content">
        <table-view :routesTree="routesTree"></table-view>
      </a-layout-content>
      <a-layout-footer class="layout-footer">
        Design ©2024 Created by 秦佬湿
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from "vue";
import { mapRoutes, RouteRecord } from "router-track-common";
import TableView from "./components/tableView.vue";
import { RouteRecordRaw, useRouter } from "vue-router";
import {
  Layout as ALayout,
  LayoutHeader as ALayoutHeader,
  LayoutContent as ALayoutContent,
  LayoutFooter as ALayoutFooter,
} from "ant-design-vue";
const router = useRouter();
const routesTree = ref([] as RouteRecord[]);
onBeforeMount(() => {
  routesTree.value = mapRoutes(router.options.routes as RouteRecordRaw[]);
});
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: white;
}
.layout {
  height: 100%;
  background-color: white;
  overflow: hidden;
}
.layout-header {
  padding: 0;
  position: fixed;
  height: 50px;
  line-height: 50px;
  z-index: 1;
  width: 100%;
  background-color: #7957d5;
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3), -3px -3px 5px rgba(0, 0, 0, 0.3),
    5px 5px 10px rgba(0, 0, 0, 0.5);
}
.layout-content {
  overflow: auto;
  height: calc(100% - 50px - 30px);
  margin-top: 50px;
  background-color: transparent;
}
.layout-footer {
  padding: 0;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #7957d5;
  background-color: transparent;
  border-top: 1px solid rgba(121, 87, 213, 0.3);
}
</style>
