<template>
  <el-container>
    <el-header>ROUTER TRACK</el-header>
    <el-main>
      <table-view :routesTree="routesTree"></table-view>
    </el-main>
    <el-footer> Design ©2024 Created by 秦佬湿 </el-footer>
  </el-container>
</template>

<script>
import TableView from "./components/tableView.vue";
import {
  Button as ElButton,
  Container as ElContainer,
  Header as ElHeader,
  Main as ElMain,
  Footer as ElFooter,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { mapRoutes, FrameType } from "router-track-common";
export default {
  components: {
    TableView,
    ElButton,
    ElContainer,
    ElHeader,
    ElMain,
    ElFooter,
  },
  data() {
    return {
      routesTree: [],
    };
  },
  created() {
    this.routesTree = mapRoutes(this.$router.options.routes, FrameType.VUE2);
  },
};
</script>

<style scoped>
.el-container {
  height: 100%;
  width: 100%;
  background-color: white;
  overflow: hidden;
}
.el-header {
  padding: 0;
  position: fixed;
  height: 50px !important;
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
.el-main {
  overflow: auto;
  height: calc(100% - 50px - 30px);
  margin-top: 50px;
  background-color: transparent;
  padding: 0;
}
.el-footer {
  padding: 0;
  text-align: center;
  height: 50px !important;
  line-height: 50px;
  color: #7957d5;
  background-color: transparent;
  border-top: 1px solid rgba(121, 87, 213, 0.3);
}
</style>
