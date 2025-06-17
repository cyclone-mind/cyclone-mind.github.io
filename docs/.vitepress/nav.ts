export const nav = [
    { text: '主页', link: '/' },
    { text: '关于', link: '/about' },
    { text: '经历', link: '/experience' },
    {
        text: '博客',
        items: [
            {text: 'JS 逆向', link: '/blogs/js-reverse/js-reverse-guide'},
            {text: 'GitHub', link: '/blogs/github/publish-npm-to-github-pages'},
            {text: 'Web 开发', link: '/blogs/web-dev/setup-wsl2-dev-environment'},
            {text: '文献阅读', link: '/blogs/essays/'},
        ]
    },
    { text: '项目', link: '/projects/my-projects' },
    { text: '联系', link: '/contact' },
    { text: '照片',
        items: [
            { text: '上海时刻', link: '/photos/shanghai-moments' }
        ]
    }
  ]