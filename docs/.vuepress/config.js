module.exports = {

    base:'/windbell/',
    locales: {
        '/':{
        lang: 'zh-CN',
        title: '风铃UI',
        description: '基于Vue的UI框架',
        }
    },

    head: [
        [
            'link', { rel: 'icon', href: '/img/logo.png' }
        ]],
    themeConfig: {
        logo:'/img/logo.png',
        nav: [
            {text: '主页', link: '/'},
            {text: 'GitHub', link: 'https://github.com/liutongyuA'},
            {text: '谷歌', link: 'https://google.com'},
        ],
        sidebar: [
            '/introduce/',
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                ],
            },
        ],
        sidebarDepth:0
    },
    plugins: ['demo-container']
}