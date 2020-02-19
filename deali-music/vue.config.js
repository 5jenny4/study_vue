// vue.config.js
const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src/'),
            },
        },
    },
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
            },
            scss: {
                prependData: '@import "~@/assets/colors.scss";',
            },
        },
    },
};
