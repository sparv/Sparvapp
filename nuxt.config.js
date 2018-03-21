module.exports = {
  head: {
    titleTemplate: '%s - Sparv',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/main.scss'
  ],
  plugins: [ { src: '~/plugins/vee-validate', ssr: true }, '~/plugins/vue-js-modal', '~/plugins/element-ui' ],
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  axios: {
    debug: true,
    baseURL: 'http://localhost:4040'
  },
  auth: {
    resetOnError: true,
    endpoints: {
      login: { url: '/authentication', method: 'post', propertyName: 'token' },
      logout: false,
      user: { url: '/users', method: 'get', propertyName: false }
    },
    cookie: {
      name: 'token',
      options: {
        path: '/',
        expires: 1
      }
    }
  },
  router: {
    middleware: ['auth']
  },
  build: { vendor: ['vee-validate'] }
}
