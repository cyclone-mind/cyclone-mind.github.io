export const sidebar = {
  about: [
    {
      text: "关于我",
      link: "/about",
    },
  ],
  experience: [
    {
      text: "经历",
      link: "/experience",
    },
  ],
  "/blogs/": [
    {
      text: "博客",
      items: [
        {
          text: "JS逆向",
          collapsed: false,
          items: [
            { text: "JS逆向-入门指南", link: "/blogs/JS逆向/JS逆向-入门指南" },
            {
              text: "JS逆向-某招标公告搜索引擎",
              link: "/blogs/JS逆向/JS逆向-某招标公告搜索引擎",
            },
            {
              text: "JS逆向-某公共政策大数据平台",
              link: "/blogs/JS逆向/JS逆向-某公共政策大数据平台",
            },
            {
              text:"JS逆向-某电子税务局",
              link:"/blogs/JS逆向/JS逆向-某电子税务局"
            }
          ],
        },
        {
          text: "github",
          collapsed: false,
          items: [
            {
              text: "发布 npm 到 github pages",
              link: "/blogs/github/发布 npm 到 github pages",
            },
          ],
        },
        {
          text: "WSL2",
          collapsed: false,
          items: [{ text: "配置 WSL2 开发环境", link: "/blogs/配置WSL2开发环境" }],
        },
      ],
    },
  ],
  "/photos/": [
    {
      text: "影像作品",
      items: [{ text: "上海时刻", link: "/photos/上海时刻" }],
    },
  ],
};
