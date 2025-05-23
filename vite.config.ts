import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.dirname));

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    root: "./root",
});
