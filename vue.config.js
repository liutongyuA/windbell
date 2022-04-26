module.exports = {
    configureWebpack: {
        plugins: [
            new MyAwesomeWebpackPlugin()
        ],
        resolve: {
            extensions: ['.jsx', '.js'] // 配置文件扩展名字，需要添加.符号
        }
        }
}