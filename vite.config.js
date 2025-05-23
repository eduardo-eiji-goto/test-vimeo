import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
    base: "https://eduardo-eiji-goto.github.io/test-vimeo/",
    plugins: [vue()],
});
