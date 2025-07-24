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
          collapsed: true,
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
          collapsed: true,
          items: [
            {
              text: "发布 npm 到 github pages",
              link: "/blogs/github/publish-npm-to-github-pages",
            },
          ],
        },
        {
          text: "Web 开发",
          collapsed: true,
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
          collapsed: true,
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
                  text: "二分查找",
                  link: "/blogs/algorithm-notes/array/二分查找",
                },
                {
                  text: "移除元素",
                  link: "/blogs/algorithm-notes/array/移除元素",
                },
                {
                  text: "有序数组的平方",
                  link: "/blogs/algorithm-notes/array/有序数组的平方",
                },
                {
                  text: "长度最小的子数组",
                  link: "/blogs/algorithm-notes/array/长度最小的子数组",
                },
                {
                  text: "螺旋矩阵",
                  link: "/blogs/algorithm-notes/array/螺旋矩阵",
                },
                {
                  text: "区间和",
                  link: "/blogs/algorithm-notes/array/区间和",
                },
                {
                  text: "开发商购买土地",
                  link: "/blogs/algorithm-notes/array/开发商购买土地",
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
                  text: "移除链表元素",
                  link: "/blogs/algorithm-notes/linkedlist/移除链表元素",
                },
                {
                  text: "设计链表",
                  link: "/blogs/algorithm-notes/linkedlist/设计链表",
                },
                {
                  text: "翻转链表",
                  link: "/blogs/algorithm-notes/linkedlist/翻转链表",
                },
                {
                  text: "两两交换链表中的节点",
                  link: "/blogs/algorithm-notes/linkedlist/两两交换链表中的节点",
                },
                {
                  text: "删除链表的倒数第N个节点",
                  link: "/blogs/algorithm-notes/linkedlist/删除链表的倒数第N个节点",
                },
                {
                  text: "链表相交",
                  link: "/blogs/algorithm-notes/linkedlist/链表相交",
                },
                {
                  text: "环形链表",
                  link: "/blogs/algorithm-notes/linkedlist/环形链表",
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
                  text: "有效的字母异位词",
                  link: "/blogs/algorithm-notes/hash/有效的字母异位词",
                },
                {
                  text: "两个数组的交集",
                  link: "/blogs/algorithm-notes/hash/两个数组的交集",
                },
                {
                  text: "快乐数",
                  link: "/blogs/algorithm-notes/hash/快乐数",
                },
                {
                  text: "两数之和",
                  link: "/blogs/algorithm-notes/hash/两数之和",
                },
                {
                  text: "四数相加II",
                  link: "/blogs/algorithm-notes/hash/四数相加II",
                },
                {
                  text: "赎金信",
                  link: "/blogs/algorithm-notes/hash/赎金信",
                },
                {
                  text: "三数之和",
                  link: "/blogs/algorithm-notes/hash/三数之和",
                },
                {
                  text: "四数之和",
                  link: "/blogs/algorithm-notes/hash/四数之和",
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
                  text: "反转字符串",
                  link: "/blogs/algorithm-notes/string/反转字符串",
                },
                {
                  text: "反转字符串II",
                  link: "/blogs/algorithm-notes/string/反转字符串II",
                },
                {
                  text: "替换数字",
                  link: "/blogs/algorithm-notes/string/替换数字",
                },
              ],
            },
            {
              text: "栈与队列",
              collapsed: true,
              items: [
                {
                  text: "理论基础",
                  link: "/blogs/algorithm-notes/stack-queue/理论基础",
                },
                {
                  text: "栈实现队列",
                  link: "/blogs/algorithm-notes/stack-queue/栈实现队列",
                },
                {
                  text: "队列实现栈",
                  link: "/blogs/algorithm-notes/stack-queue/队列实现栈",
                },
                {
                  text: "有效的括号",
                  link: "/blogs/algorithm-notes/stack-queue/有效的括号",
                },
                {
                  text: "删除字符串中所有相邻重复项",
                  link: "/blogs/algorithm-notes/stack-queue/删除字符串中所有相邻重复项",
                },
                {
                  text: "逆波兰表达式",
                  link: "/blogs/algorithm-notes/stack-queue/逆波兰表达式.",
                },
                {
                  text: "滑动窗口最大值",
                  link: "/blogs/algorithm-notes/stack-queue/滑动窗口最大值",
                },
                {
                  text: "前K个高频元素",
                  link: "/blogs/algorithm-notes/stack-queue/前K个高频元素",
                },
                {
                  text: "总结",
                  link: "/blogs/algorithm-notes/stack-queue/总结",
                },
              ],
            },
            {
              text: "二叉树",
              collapsed: true,
              items: [
                {
                  text: "理论基础",
                  link: "/blogs/algorithm-notes/binary-tree/理论基础",
                },
                {
                  text: "递归遍历",
                  link: "/blogs/algorithm-notes/binary-tree/递归遍历",
                },
                {
                  text: "迭代遍历",
                  link: "/blogs/algorithm-notes/binary-tree/迭代遍历",
                },
                {
                  text: "统一迭代",
                  link: "/blogs/algorithm-notes/binary-tree/统一迭代",
                },
                {
                  text: "层序遍历",
                  link: "/blogs/algorithm-notes/binary-tree/层序遍历",
                },
                {
                  text: "翻转二叉树",
                  link: "/blogs/algorithm-notes/binary-tree/翻转二叉树",
                },
                {
                  text: "对称二叉树",
                  link: "/blogs/algorithm-notes/binary-tree/对称二叉树",
                },
                {
                  text: "最大深度",
                  link: "/blogs/algorithm-notes/binary-tree/最大深度",
                },
                {
                  text: "最小深度",
                  link: "/blogs/algorithm-notes/binary-tree/最小深度",
                },
                {
                  text: "完全二叉树节点个数",
                  link: "/blogs/algorithm-notes/binary-tree/完全二叉树节点个数",
                },
                {
                  text: "平衡二叉树",
                  link: "/blogs/algorithm-notes/binary-tree/平衡二叉树",
                },
                {
                  text: "所有路径",
                  link: "/blogs/algorithm-notes/binary-tree/所有路径",
                },
                {
                  text: "左叶子之和",
                  link: "/blogs/algorithm-notes/binary-tree/左叶子之和",
                },
                {
                  text: "左下角的值",
                  link: "/blogs/algorithm-notes/binary-tree/左下角的值",
                },
                {
                  text: "路径总和",
                  link: "/blogs/algorithm-notes/binary-tree/路径总和",
                },
                {
                  text: "从中序遍历和后序遍历构造二叉树",
                  link: "/blogs/algorithm-notes/binary-tree/从中序遍历和后序遍历构造二叉树",
                },
                {
                  text: "最大二叉树",
                  link: "/blogs/algorithm-notes/binary-tree/最大二叉树",
                },
                {
                  text: "合并二叉树",
                  link: "/blogs/algorithm-notes/binary-tree/合并二叉树",
                },
                {
                  text: "二叉搜索树中的搜索",
                  link: "/blogs/algorithm-notes/binary-tree/二叉搜索树中的搜索",
                },
                {
                  text: "验证二叉搜索树",
                  link: "/blogs/algorithm-notes/binary-tree/验证二叉搜索树",
                },
                {
                  text: "二叉搜索树的最小绝对差",
                  link: "/blogs/algorithm-notes/binary-tree/二叉搜索树的最小绝对差",
                },
                {
                  text: "二叉搜索树中的众数",
                  link: "/blogs/algorithm-notes/binary-tree/二叉搜索树中的众数",
                },
                {
                  text: "二叉树的最近公共祖先",
                  link: "/blogs/algorithm-notes/binary-tree/二叉树的最近公共祖先",
                },
                {
                  text: "二叉搜索树的最近公共祖先",
                  link: "/blogs/algorithm-notes/binary-tree/二叉搜索树的最近公共祖先",
                },
                {
                  text: "二叉搜索树中的插入",
                  link: "/blogs/algorithm-notes/binary-tree/二叉搜索树中的插入",
                },
                {
                  text: "二叉搜索树的删除",
                  link: "/blogs/algorithm-notes/binary-tree/二叉搜索树的删除",
                },
                {
                  text: "二叉搜索树的修剪",
                  link: "/blogs/algorithm-notes/binary-tree/二叉搜索树的修剪",
                },
                {
                  text: "将有序数组转换为二叉搜索树",
                  link: "/blogs/algorithm-notes/binary-tree/将有序数组转换为二叉搜索树",
                },
                {
                  text: "二叉搜索树转换为累加树",
                  link: "/blogs/algorithm-notes/binary-tree/二叉搜索树转换为累加树",
                },
                {
                  text: "二叉树总结",
                  link: "/blogs/algorithm-notes/binary-tree/二叉树总结",
                },
              ],
            },
            {
              text: "回溯算法",
              collapsed: true,
              items: [
                {
                  text: "回溯理论基础",
                  link: "/blogs/algorithm-notes/backtracking/回溯理论基础",
                },
                {
                  text: "组合",
                  link: "/blogs/algorithm-notes/backtracking/组合",
                },
                {
                  text: "组合优化",
                  link: "/blogs/algorithm-notes/backtracking/组合优化",
                },
                {
                  text: "组合总和III",
                  link: "/blogs/algorithm-notes/backtracking/组合总和III",
                },
                {
                  text: "电话号码字母组合",
                  link: "/blogs/algorithm-notes/backtracking/电话号码字母组合",
                },
                {
                  text: "组合总和",
                  link: "/blogs/algorithm-notes/backtracking/组合总和",
                },
                {
                  text: "组合总和II",
                  link: "/blogs/algorithm-notes/backtracking/组合总和II",
                },
                {
                  text: "分割回文串",
                  link: "/blogs/algorithm-notes/backtracking/分割回文串",
                },
                {
                  text: "复原IP地址",
                  link: "/blogs/algorithm-notes/backtracking/复原IP地址",
                },
                {
                  text: "子集",
                  link: "/blogs/algorithm-notes/backtracking/子集",
                },
                {
                  text: "子集II",
                  link: "/blogs/algorithm-notes/backtracking/子集II",
                },
                {
                  text: "递增子序列",
                  link: "/blogs/algorithm-notes/backtracking/递增子序列",
                },
                {
                  text: "全排列",
                  link: "/blogs/algorithm-notes/backtracking/全排列",
                },
                {
                  text: "全排列II",
                  link: "/blogs/algorithm-notes/backtracking/全排列II",
                },
                {
                  text: "回溯算法去重另一种写法",
                  link: "/blogs/algorithm-notes/backtracking/回溯算法去重另一种写法",
                },
                {
                  text: "重新安排行程",
                  link: "/blogs/algorithm-notes/backtracking/重新安排行程",
                },
                {
                  text: "N皇后",
                  link: "/blogs/algorithm-notes/backtracking/N皇后",
                },
                {
                  text: "解数独",
                  link: "/blogs/algorithm-notes/backtracking/解数独",
                },
                {
                  text: "回溯总结",
                  link: "/blogs/algorithm-notes/backtracking/回溯总结",
                },
              ],
            },
          ],
        },
        {
          text: "C++ 系列（cherno）",
          collapsed: true,
          items: [
            { text: "系列指南", link: "/blogs/C++/" },
            {
              text: "Visual Studio C++ 项目最佳设置指南",
              link: "/blogs/C++/Visual Studio C++ 项目最佳设置指南",
            },
            // ...后续更多笔记
          ],
        },
        {
          text: "文献阅读",
          collapsed: true,
          items: [
            { text: "系列指南", link: "/blogs/essays/" },
            {
              text: "野火PM2.5在多个国家和地区引发的呼吸道风险",
              link: "/blogs/essays/野火导致的PM2.5引发呼吸道风险",
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
  "/reference/": [
    {
      text: "推荐",
      items: [
        { text: "学习资料推荐", link: "/reference/study-reference" },
        { text: "使用效率工具", link: "/reference/multi-platform" },
      ],
    },
  ],
};
