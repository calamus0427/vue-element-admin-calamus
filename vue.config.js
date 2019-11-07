

module.exports = {
  // 基本路径
  publicPath: "./",

  // 输出文件目录
  outputDir: "dist",

  assetsDir: "static",

  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // webpack配置
  // chainWebpack: config => {},
  configureWebpack: config => {
    config.devtool = 'source-map'
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
    } else {
      // 为开发环境修改配置...
      config.mode = "development";
    }
    let plugin = [];
    config.plugins = [...config.plugins, ...plugin];
    config.resolve.alias.vue$ = "vue/dist/vue.esm.js";
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  // css相关配置
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require("os").cpus().length > 1,

  lintOnSave: false
};
