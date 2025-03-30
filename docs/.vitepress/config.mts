import { defineConfig } from "vitepress";
import { sidebar } from "./sidebar";
import { nav } from "./nav";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Shouyu",
  description: "Shouyu's Journey",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/cyclone-mind" }],
  },
  srcDir: "./src",
  lastUpdated: true,
  head: [["link", { rel: "icon", type: "image/png", href: "/favicon.png" }]],
});
