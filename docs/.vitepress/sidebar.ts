export const sidebar= {
    'about': [
        {
            text: '关于我',link: '/about'
        }
    ],
    'experience': [
        {
            text: '经历',link: '/experience'
        }
    ],
    '/blogs/': [
        {
            text: "博客",
            items: [
                {
                    text: 'JS逆向',
                    collapsed: false,
                    items: [
                        {text: 'JS逆向-入门指南', link: '/blogs/JS逆向/JS逆向-入门指南'},
                        {text: 'JS逆向-某招标公告搜索引擎', link: '/blogs/JS逆向/JS逆向-某招标公告搜索引擎'},
                        {text: 'JS逆向-某公共政策大数据平台', link: '/blogs/JS逆向/JS逆向-某公共政策大数据平台'}
                    ]
                },
            ],
        }
    ],
    '/photos/': [
        {
            text: "影像作品",
            items: [
                {text: '上海时刻', link: '/photos/上海时刻'},
            ],
        }
    ]
}