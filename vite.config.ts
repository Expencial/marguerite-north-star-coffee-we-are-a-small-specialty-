import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import siteConfig from "./site.config.json";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export default defineConfig({
  // Relative assets work both at a custom domain and under /<repo>/ on Pages.
  base: "./",
  plugins: [
    react(),
    {
      name: "site-config-html",
      transformIndexHtml(html) {
        return html
          .replace("__SITE_LOCALE__", escapeHtml(siteConfig.locale))
          .replace("__SITE_DESCRIPTION__", escapeHtml(siteConfig.meta.description))
          .replace("__SITE_TITLE__", escapeHtml(siteConfig.meta.title));
      },
    },
  ],
  build: {
    outDir: "dist",
  },
});
