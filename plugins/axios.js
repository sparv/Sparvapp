export default function ({ $axios, store, redirect }) {
  $axios.onRequest((config) => {
    if (config.method !== 'get') {
      store.commit('SET_SENDING_REQUEST', true)
    }
  })

  $axios.onResponse(() => {
    store.commit('SET_SENDING_REQUEST', false)
  })

  $axios.onResponseError(async (error) => {
    if (error.response.status === 401) {
      console.log('Refresh Token is needed here!')
      store.dispatch('getRefreshToken')
    }
  })
}
