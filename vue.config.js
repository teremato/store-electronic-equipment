const { defineConfig } = require('@vue/cli-service')
const path = require("path")

module.exports = defineConfig({

  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/common.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.join(__dirname, 'src/components/'),
        "@app-sass": path.join(__dirname, 'src/assets/scss/'),
        "@app-images": path.join(__dirname, 'src/assets/images'),
        "@views": path.join(__dirname, 'src/views/'),
        "@store": path.join(__dirname, 'src/store'),
        "@services": path.join(__dirname, 'src/services')
      },
      extensions: ['.js', '.vue', '.json']
    }
  }

})
