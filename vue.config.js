const webpack = require('webpack');

module.exports = {
  // webpack 全局变量配置
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ],
  },
};