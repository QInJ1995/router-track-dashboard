<template>
  <div class="table-view">
    <a-table
      defaultExpandAllRows
      :columns="columns"
      :data-source="routesTree"
      :pagination="false"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'params'">
          <div>
            <a-input v-model:value="record.params" style="margin: -5px 0" />
          </div>
        </template>
        <template v-if="column.key === 'action'">
          <span>
            <a @click="() => open(record)">打开</a>
            <a-divider type="vertical" />
            <a @click="() => copy(record)">复制</a>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import {
  Table as ATable,
  Divider as ADivider,
  Input as AInput,
  message,
} from "ant-design-vue";
import { ColumnsType } from "ant-design-vue/es/table/Table";

// 初始化表格配置
const initTableCfg = function () {
  const columns: ColumnsType = [
    {
      title: "路由路径",
      dataIndex: "path",
      key: "path",
      width: "300px",
    },
    {
      title: "路由名",
      dataIndex: "name",
      key: "name",
      width: "200px",
    },
    {
      title: "路由组件路径",
      dataIndex: "componentPath",
      key: "componentPath",
    },
    {
      title: "自定义参数",
      key: "params",
      dataIndex: "params",
      width: "500px",
      placeholder: "输入地址参数: a=1&b=2",
    },
    {
      title: "操作",
      key: "action",
      width: "120px",
      align: "center",
    },
  ];
  return { columns };
};
// 操作列事件
const actions = function () {
  function open(record: any) {
    const { path, params } = record;
    const { origin } = window.location;
    window.open(`${origin}${path}${params ? "?" + params : ""}`);
  }
  function copy(record: any) {
    const { path, params } = record;
    const { origin } = window.location;
    navigator.clipboard
      .writeText(`${origin}${path}${params ? "?" + params : ""}`)
      .then(() => {
        message.success("地址复制成功！");
      })
      .catch((err) => {
        message.error("地址复制失败！");
      });
  }
  return { open, copy };
};
const { routesTree } = defineProps(["routesTree"]);
const { columns } = initTableCfg();
const { open, copy } = actions();
</script>

<style scoped>
a {
  color: #7957d5 !important;
}

.ant-input:focus {
  border-color: #7957d5;
}

:deep(.ant-table-thead) {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
}

:deep(.ant-table-cell-row-hover) {
  background-color: rgba(121, 87, 213, 0.1) !important;
}
</style>
