import { computed, ref } from 'vue'
import { authService } from '../api/axios.ts'
import { jwtDecode } from 'jwt-decode'

const token = ref(localStorage.getItem('token'))

export function useAuth() {
  async function login(credentials: object) {
    try {
      const response = await authService.login(credentials)
      const accessToken = response.data.access_token
      token.value = accessToken
      localStorage.setItem('token', accessToken)
      return response
    } catch (error) {
      logout()
      throw error
    }
  }

  function logout() {
    token.value = null
    localStorage.removeItem('token')
  }

  function isValid(token: string | null) {
    if (!token) return false

    try {
      const decoded = jwtDecode(token)
      if (!decoded.exp) return false
      const currentTime = Math.floor(Date.now() / 1000)
      return decoded.exp > currentTime

    } catch (e) {
      return false
    }
  }

  const isAuthenticated = computed(() => {
    return token.value !== null && isValid(token.value)
  })

  return {
    isValid,
    isAuthenticated,
    logout,
    token,
    login,
  }
}
