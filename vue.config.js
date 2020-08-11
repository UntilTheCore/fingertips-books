// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    filenameHashing: true,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/fingertips-books-website/'
        : '/',
    chainWebpack: config => {
        const dir = path.resolve(__dirname, 'src/assets/icons')

        config.module
              .rule('svg-sprite')
              .test(/\.svg$/)
              .include.add(dir).end() // 要处理的目录
              .use('svg-sprite-load').loader('svg-sprite-loader').options({extract: false}).end()
              .use('svgo-loader').loader('svgo-loader')
              .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
        config.module.rule('svg').exclude.add(dir) // 其他类似的loader不处理这个目录

        config.when(process.env.NODE_ENV === 'production', config => {
            config.set('externals', {
                lodash: '_',
                vue: 'Vue',
                'vue-router': 'VueRouter',
                'vuex': 'Vuex',
                'echarts': 'echarts',
            })
        })

    },

}