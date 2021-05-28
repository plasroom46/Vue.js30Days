module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.covidtracking.com/v1',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true,
        ws: true
      },
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}