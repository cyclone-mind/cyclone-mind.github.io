import { defineConfig } from "vitepress";

import { sidebar } from "./sidebar";
import { nav } from "./nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Shouyu",
  markdown: {
    math: true
  },
  description: "Shouyu's Journey",
  themeConfig: {
    logo: "/favicon.png",
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    outlineTitle: "本页目录",
    socialLinks: [{ icon: "github", link: "https://github.com/cyclone-mind" }],
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
  },
  srcDir: "./src",
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
    [
      "script",
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PL18CKX2NV'); // 这里换成你的 Measurement ID
      `,
    ],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-PL18CKX2NV",
      },
    ],
  ],
});
