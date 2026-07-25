import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages needs the repo subpath; Vercel (and local) use root.
const base = process.env.GITHUB_PAGES === "true" ? "/FGS-ResourceHub/" : "/";

export default defineConfig({
  plugins: [react()],
  base,
});
