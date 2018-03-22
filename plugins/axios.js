export default function ({ $axios, app, store, redirect }) {
  $axios.onResponseError(async (error) => {
    if (error.response.status === 401) {
      console.log('Refresh Token is needed here!')
      store.dispatch('getRefreshToken')
    }
  })
}
