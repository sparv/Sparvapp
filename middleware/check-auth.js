import { getUserFromCookie } from '~/utils/auth'

export default function ({ isServer, store, req }) {
  // If nuxt generate, pass this middleware
  if (isServer && !req) return

  if (isServer) {
    const loggedUserToken = getUserFromCookie(req)
    store.commit(`setAuthToken`, loggedUserToken)
  }
}
