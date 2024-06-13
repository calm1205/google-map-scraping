import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import commonjs from "@rollup/plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills(),
    commonjs({
      dynamicRequireTargets: [
        "node_modules/selenium-webdriver/lib/atoms/get-attribute.js",
      ],
    }),
  ],
  base: "./",
  build: {
    outDir: "dist-vite",
    commonjsOptions: { requireReturnsDefault: "auto" },
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "assets/[name].js",
        manualChunks: function (id) {
          // スタイルシートは読み込み順がナイーブなので1ファイルに纏めます
          if (id.includes(".css")) return "style";

          // node_modules以下でサイズが大きいものは切り出し
          // if (id.includes("node_modules/selenium-webdriver"))
          //   return "vendor-selenium-webdriver";

          // その他、node_modules以下はvendorにまとめる
          if (id.includes("node_modules")) return "vendor";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/", import.meta.url)),
    },
  },
});
