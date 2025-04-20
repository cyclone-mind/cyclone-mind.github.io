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
            { text: "JS逆向-入门指南", link: "/blogs/js-reverse/js-reverse-guide" },
            {
              text: "JS逆向-某招标公告搜索引擎",
              link: "/blogs/js-reverse/js-reverse-bidding-search-engine",
            },
            {
              text: "JS逆向-某公共政策大数据平台",
              link: "/blogs/js-reverse/js-reverse-public-policy-platform",
            },
            {
              text:"JS逆向-某电子税务局",
              link:"/blogs/js-reverse/js-reverse-e-tax-bureau"
            },
            {
              text:"JS逆向之某日漫网站",
              link:"/blogs/js-reverse/js-reverse-manga-website"
            }
          ],
        },
        {
          text: "github",
          collapsed: false,
          items: [
            {
              text: "发布 npm 到 github pages",
              link: "/blogs/github/publish-npm-to-github-pages",
            },
          ],
        },
        {
          text: "Web 开发",
          collapsed: false,
          items: [
            { 
              text: "配置 WSL2 开发环境", 
              link: "/blogs/web-dev/setup-wsl2-dev-environment" 
            },
            {
              text:"FastAPI",
              link:"/blogs/web-dev/fastapi"
            }
          ],
        },
      ],
    },
  ],
  "/photos/": [
    {
      text: "影像作品",
      items: [{ text: "上海时刻", link: "/photos/shanghai-moments" }],
    },
  ],
};
