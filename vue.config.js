const merge = require('webpack-merge')
const path = require('path');
module.exports = {
    devServer:{
      hot:true
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@':path.join(__dirname, 'src'),
                css: path.join(__dirname, 'src/assets/css'),
            },
        },
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .tap(options => {
                return merge(options, {
                    limit: 10000
                })
            })
            .end()
        config.resolve.symlinks(true);
    }
}
