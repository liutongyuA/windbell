module.exports = {
    base:'/windbell/',
    title: '风铃UI',
    description: '基于Vue的UI框架',
    head: [
        [
            'link', { rel: 'icon', href: '/img/logo.png' }
        ]],
    themeConfig: {
        logo:'/img/logo.png',
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
                    '/components/input',
                ],
            },
        ]
    },
    plugins: ['demo-container']
}