import { computed, ref } from 'vue'
import { authService } from '../api/axios.ts'

const token = ref(localStorage.getItem('token'))
//TODO : Do the isAuthenticated system, and remove all the console.log

export function useAuth() {
  async function login(credentials: object) {
    try {
      const response = await authService.login(credentials)
      const accessToken = response.data.access_token
      token.value = accessToken
      localStorage.setItem('token', accessToken)
      console.log('Connexion reussi', accessToken)
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
    return true
  }

  const isAuthenticated = computed(() => {
    return token.value !== null && isValid(token.value)
  })

  return {
    isAuthenticated,
    logout,
    token,
    login,
  }
}
