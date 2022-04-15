module.exports = {
    base:'/windbell/',
    title: '风铃UI',
    description: '基于Vue的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/guide/'},
            {text: '谷歌', link: 'https://google.com'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/start/',
                ],
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                ],
            },
        ]
    }
}