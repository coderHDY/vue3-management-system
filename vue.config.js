const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
    outputDir: './build',
    configureWebpack: {
        resolve: {
            alias: {
                components: '@/components',
            },
        },
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
    devServer: {
        // proxy：开发模式中，所有【/api】开头的请求路径都使用node代理请求，再把数据还给浏览器
        proxy: {
            '/api': {
                target: 'http://localhost:8889',
                changeOrigin: true, // 跨域
                pathRewrite: {
                    '^/api': '/',
                },
            },
        },
    },
};
