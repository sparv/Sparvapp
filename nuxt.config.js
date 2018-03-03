module.exports = {
  head: {
    titleTemplate: '%s - Sparv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  css: [ '@/assets/scss/main.scss' ],
  plugins: [ { src: '~/plugins/vee-validate', ssr: true } ],
  modules: ['@nuxtjs/axios'],
  axios: {
    debug: true,
    baseURL: 'http://localhost:4040'
  },
  build: { vendor: ['vee-validate'] }
}
