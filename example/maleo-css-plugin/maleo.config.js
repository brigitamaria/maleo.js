const cssPlugin = require('@airy/maleo-css-plugin')

module.exports = cssPlugin({
  cssPluginOptions: {
    extractCss: {
      singleCssFile: true,
    },
    cssLoader: {
      modules: true,
      localIdentName: '[path][name]__[local]--[hash:base64:5]'
    }
  }
})