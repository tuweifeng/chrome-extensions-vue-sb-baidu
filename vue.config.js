
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
// Generate pages object

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  pages: {
    popup: {
        entry: `src/popup/index.js`,
        template: `src/popup/index.html`,
        filename: `popup.html`
    },
    options: {
        entry: `src/options/index.js`,
        template: `src/options/index.html`,
        filename: `options.html`
    },
  },
  configureWebpack: {
    entry: {
      'content': './src/content/index.js',
      'background': './src/background/index.js',
    },
    output: {
      filename: 'js/[name].js'
    },
    optimization:{
      // 表示只导出那些外部使用了的那些成员
        //  usedExports: true,
         // 压缩模块
         minimize:false
  
     },
    plugins: [CopyWebpackPlugin([
      {
        from: path.resolve("src/manifest.json"),
        to: `${path.resolve("dist")}/manifest.json`
      }
    ])]
  }
}
