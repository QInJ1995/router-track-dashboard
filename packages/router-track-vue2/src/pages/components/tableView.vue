<template>
  <div class="table-view">
    <el-table
      :data="routesTree"
      style="width: 100%; margin-bottom: 20px"
      row-key="path"
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="path" label="路由路径" width="300px">
      </el-table-column>
      <el-table-column prop="name" label="路由名" width="200px">
      </el-table-column>
      <el-table-column prop="componentPath" label="路由组件路径">
      </el-table-column>
      <el-table-column prop="params" label="自定义参数" width="500px">
        <template slot-scope="{ row }">
          <el-input
            v-model="row.params"
            size="mini"
            placeholder="输入地址参数: a=1&b=2"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120px" align="center">
        <template slot-scope="{ row }">
          <el-button @click="open(row)" type="text" size="small"
            >打开</el-button
          >
          <el-button @click="copy(row)" type="text" size="small"
            >复制</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  Table as ElTable,
  TableColumn as ElTableColumn,
  Button as ElButton,
  Input as ElInput,
  Message,
} from "element-ui";
export default {
  components: {
    ElButton,
    ElTable,
    ElTableColumn,
    ElInput,
  },
  props: {
    routesTree: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    open(row) {
      const { path, params } = row;
      const { origin } = window.location;
      window.open(`${origin}${path}${params ? "?" + params : ""}`);
    },
    copy(row) {
      const { path, params } = row;
      const { origin } = window.location;
      navigator.clipboard
        .writeText(`${origin}${path}${params ? "?" + params : ""}`)
        .then(() => {
          Message({
            message: "地址复制成功！",
            type: "success",
          });
        })
        .catch((err) => {
          Message({
            message: "地址复制失败！",
            type: "error",
          });
        });
    },
  },
};
</script>

<style scoped>
.table-view {
  height: 100%;
  width: 100%;
}
</style>
