export const config = {
    title : '果冻の博客',
    navigation : [
        {
            name: '首页',
            href: '/',
            child: []
        },
        {
            name: '归档',
            href: '/',
            child: null
        },
        {
            name: '管理',
            href: '/',
            child: [
                {
                    name: '宝塔',
                    href: '/',
                    child: []
                },
                {
                    name: '后台',
                    href: '/',
                    child: []
                }
            ]
        },
        {
            name: '杂项',
            href: '/',
            child:[
                {
                    name: '闲聊',
                    href: '/',
                    child: []
                },
                {
                    name: '开发',
                    href: [],
                    child: [
                        {
                            name: 'blog',
                            href: '/',
                            child: []
                        },
                        {
                            name: 'bot',
                            href: '/',
                            child: []
                        },
                        {
                            name: '我的所学',
                            href: [],
                            child: [
                                {
                                    name: 'python',
                                    href: '/',
                                    child: []
                                },
                                {
                                    name: 'javascript',
                                    href: '/',
                                    child: []
                                },
                                {
                                    name: 'golang',
                                    href: '/',
                                    child: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    mottoList : [
        "hello world",
        "落霞与孤鹜齐飞，秋水共长天一色",
        "好好学习，天天向上"
    ],
    copyright: {
        name: 'Jelly\'s blog',
        link: 'https://blog.jellyqwq.top/'
    }
    
}