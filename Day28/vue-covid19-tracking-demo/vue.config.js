module.exports = {
  devServer: {
    proxy: 'https://api.covidtracking.com/v1'
  },
  transpileDependencies: [
    'vuetify'
  ]
}