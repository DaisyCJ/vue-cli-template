const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // 应用部署时的路径，不可更改
  publicPath: '/demo-app',

  configureWebpack: {
    devtool: 'source-map',

    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    },

    plugins: [
      new CopyWebpackPlugin([
        {from: path.join(__dirname, 'src/mock/'), to: './mock'},
      ])
    ]
  },

  // devServer: {
  //   proxy: {}
  // },

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/variables.scss";'
      }
    }
  }
}
