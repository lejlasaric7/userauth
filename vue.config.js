const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    watchOptions: {
      poll: 3000, // Provjera svake 3 sekunde
      ignored: /node_modules/  //ne pratiti ovaj folder
    }  
  },
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    allowedHosts: "all",
    proxy: {
      '^/api': {
        target: 'http://back:3000',
        changeOrigin: true,
        "secure":false
      },
    }
  }
})