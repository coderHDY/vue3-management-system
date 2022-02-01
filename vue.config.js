module.exports = {
    outputDir: './build',
    configureWebpack: {
        resolve: {
            alias: {
                components: '@/components',
            },
        },
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
