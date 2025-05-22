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
            {
              text: "JS逆向-入门指南",
              link: "/blogs/js-reverse/js-reverse-guide",
            },
            {
              text: "JS逆向-某招标公告搜索引擎",
              link: "/blogs/js-reverse/js-reverse-bidding-search-engine",
            },
            {
              text: "JS逆向-某公共政策大数据平台",
              link: "/blogs/js-reverse/js-reverse-public-policy-platform",
            },
            {
              text: "JS逆向-某电子税务局",
              link: "/blogs/js-reverse/js-reverse-e-tax-bureau",
            },
            {
              text: "JS逆向之某日漫网站",
              link: "/blogs/js-reverse/js-reverse-manga-website",
            },
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
              link: "/blogs/web-dev/setup-wsl2-dev-environment",
            },
            {
              text: "FastAPI",
              link: "/blogs/web-dev/fastapi",
            },
            {
              text: "Python f-string 技巧",
              link: "/blogs/web-dev/python-f-string-tricks",
            },
          ],
        },
        {
          text: "数据结构与算法（代码随想录）",
          collapsed: false,
          items: [
            {
              text: "系列指南",
              link: "/blogs/algorithm-notes/",
            },
            {
              text: "数组",
              collapsed: true,
              items: [
                {
                  text: "数组专题概览",
                  link: "/blogs/algorithm-notes/array/",
                },
                {
                  text: "数组理论基础",
                  link: "/blogs/algorithm-notes/array/数组理论基础",
                },
                {
                  text: "704 二分查找",
                  link: "/blogs/algorithm-notes/array/代码随想录 数组 704 二分查找",
                },
                {
                  text: "27 移除元素",
                  link: "/blogs/algorithm-notes/array/代码随想录 数组 27 移除元素",
                },
                {
                  text: "997 有序数组的平方",
                  link: "/blogs/algorithm-notes/array/代码随想录 数组 997  有序数组的平方",
                },
                {
                  text: "209 长度最小的子数组",
                  link: "/blogs/algorithm-notes/array/代码随想录 数组 209 长度最小的子数组",
                },
                {
                  text: "59 螺旋矩阵",
                  link: "/blogs/algorithm-notes/array/代码随想录 数组 59 螺旋矩阵",
                },
                {
                  text: "54 区间和",
                  link: "/blogs/algorithm-notes/array/代码随想录 数组 54 区间和",
                },
                {
                  text: "44 开发商购买土地",
                  link: "/blogs/algorithm-notes/array/代码随想录 数组 44 开发商购买土地",
                },
              ],
            },
            {
              text: "链表",
              collapsed: true,
              items: [
                {
                  text: "链表专题概览",
                  link: "/blogs/algorithm-notes/linkedlist/",
                },
                {
                  text: "203 移除链表元素",
                  link: "/blogs/algorithm-notes/linkedlist/代码随想录 链表 203 移除链表元素",
                },
                {
                  text: "707 设计链表",
                  link: "/blogs/algorithm-notes/linkedlist/代码随想录 链表 707 设计链表",
                },
                {
                  text: "206 翻转链表",
                  link: "/blogs/algorithm-notes/linkedlist/代码随想录 链表 206 翻转链表",
                },
                {
                  text: "24 两两交换链表中的节点",
                  link: "/blogs/algorithm-notes/linkedlist/代码随想录 链表 24 两两交换链表中的节点",
                },
                {
                  text: "19 删除链表的倒数第N个节点",
                  link: "/blogs/algorithm-notes/linkedlist/代码随想录 链表 19 删除链表的倒数第N个节点",
                },
                {
                  text: "160 链表相交",
                  link: "/blogs/algorithm-notes/linkedlist/代码随想录 链表 160 链表相交",
                },
                {
                  text: "142 环形链表",
                  link: "/blogs/algorithm-notes/linkedlist/代码随想录 链表 142 环形链表",
                },
              ],
            },
            {
              text: "哈希表",
              collapsed: true,
              items: [
                {
                  text: "哈希表专题概览",
                  link: "/blogs/algorithm-notes/hash/",
                },
                {
                  text: "242 有效的字母异位词",
                  link: "/blogs/algorithm-notes/hash/代码随想录 哈希表 242 字母的有效异位词",
                },
                {
                  text: "349 两个数组的交集",
                  link: "/blogs/algorithm-notes/hash/代码随想录 哈希表 349 两个数组的交集",
                },
                {
                  text: "202 快乐数",
                  link: "/blogs/algorithm-notes/hash/代码随想录 哈希表 202 快乐数",
                },
                {
                  text: "1 两数之和",
                  link: "/blogs/algorithm-notes/hash/代码随想录 哈希表 1 两数之和",
                },
                {
                  text: "454 四数相加II",
                  link: "/blogs/algorithm-notes/hash/代码随想录 哈希表 454 四数相加",
                },
                {
                  text: "383 赎金信",
                  link: "/blogs/algorithm-notes/hash/代码随想录 哈希表 383 赎金信",
                },
                {
                  text: "15 三数之和",
                  link: "/blogs/algorithm-notes/hash/代码随想录 哈希表 15 三数之和",
                },
              ],
            },
            {
              text: "字符串",
              collapsed: true,
              items: [
                {
                  text: "字符串专题概览",
                  link: "/blogs/algorithm-notes/string/",
                },
                {
                  text: "344 反转字符串",
                  link: "/blogs/algorithm-notes/string/代码随想录 字符串 344 反转字符串",
                },
                {
                  text: "541 反转字符串II",
                  link: "/blogs/algorithm-notes/string/代码随想录 字符串 541 反转字符串 II",
                },
                {
                  text: "替换数字",
                  link: "/blogs/algorithm-notes/string/代码随想录 字符串 kama  替换数字",
                },
              ],
            },
          ],
        },
        {
          text: "C++ 系列（cherno）",
          collapsed: false,
          items: [
            { text: "系列指南", link: "/blogs/C++/" },
            {
              text: "Visual Studio C++ 项目最佳设置指南",
              link: "/blogs/C++/Visual Studio C++ 项目最佳设置指南",
            },
            // ...后续更多笔记
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
