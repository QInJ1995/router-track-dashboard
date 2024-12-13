<template>
  <div class="container">
    <a-layout class="layout">
      <a-layout-header class="layout-header"> 111 </a-layout-header>
      <a-layout-content class="layout-content"> 222 </a-layout-content>
      <a-layout-footer class="layout-footer">
        Ant Design ©2024 Created by 秦佬湿
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";
import { Layout as ALayout } from "ant-design-vue";

onBeforeMount(() => {
  const router = useRouter(); // 获取 $router
  const routes = router.getRoutes();
  console.log("routes", routes);
});
</script>

<style scoped >
.container {
  height: 100%;
  width: 100%;
}
.layout {
  height: 100%;
}
.layout-header {
  position: fixed;
  height: 50px;
  z-index: 1;
  width: 100%;
}
.layout-content {
  height: calc(100% - 50px - 30px);
  margin-top: 50px;
}
.layout-footer {
  text-align: center;
  height: 30px;
}
</style>