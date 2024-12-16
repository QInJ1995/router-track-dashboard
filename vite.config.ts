// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import path from "path";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    react(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "routerTrackDashboard",
      fileName: (format) => `router-track-dashboard.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "react", "react-dom"], // 排除 Vue 和 React，避免重复打包
      output: {
        globals: {
          vue: "vue",
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
