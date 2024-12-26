// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: true, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 配置路径别名
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "RouterTrack", // UMD 模块的全局变量名称
      fileName: (format) => `router-track.${format}.js`,
      formats: ["es", "umd"], // 支持 ES 模块格式
    },
    rollupOptions: {
      external: ["vue", "vue-router"], // 排除 Vue
      output: {
        globals: {
          vue: "Vue",
          "vue-router": "vue-router",
        },
        // 指定导出的对象，如果使用 UMD 格式，需要将 `exports` 设置为 `named`
        exports: "named",
      },
    },
    // 4. 其他构建配置
    sourcemap: false, // 生成 sourcemap，方便调试
    minify: "esbuild", // 使用 esbuild 压缩库
  },
});
