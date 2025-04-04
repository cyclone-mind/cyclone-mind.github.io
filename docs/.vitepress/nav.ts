export const nav = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Experience', link: '/experience' },
    {
        text: 'Blogs',
        items: [
            {text: 'JS 逆向', link: '/blogs/JS逆向/JS逆向-入门指南'},
            {text: 'github', link: '/blogs/github/发布 npm 到 github pages'},
            {text: 'WSL2', link: '/blogs/配置WSL2开发环境'},
        ]
    },
    { text: 'Projects', link: '/projects/我的项目' },
    { text: 'Contact', link: '/contact' },
    { text: 'Photos',
        items: [
            { text: 'Shanghai Moments', link: '/photos/上海时刻' }
        ]
    }
  ]