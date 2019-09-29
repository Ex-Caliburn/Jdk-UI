const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '../' ,'..', dir)
}

module.exports = {
    title: 'Jdk UI',
    base: '/jdk-ui/',
    description: 'Jdk UI Document',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: 'https://github.com/Ex-Caliburn/Jdk-UI#readme' },
            { text: 'Github', link: 'https://github.com/Ex-Caliburn/Jdk-UI' },
        ],
        sidebar: [
          ['/views/guide', '快速上手'],
          ['/views/button', '按钮 Button'],
        ]
    },
    markdown: {
        lineNumbers: false
    },
    scss: {
      // 公共组件调用公共样式
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('docs_create'),
              '@src': resolve('src'),
              '@scss': resolve('src/scss'),
              '@components': resolve('src/components'),
              '@utils': resolve('src/utils')
            }
        }
    }
}
