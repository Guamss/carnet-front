import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const authService = {
  login(data: object) {
    return api.post('/token', data, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
  },
  getUserProfile(token : string) {
    return api.get('/users/me', {
      headers: {'Authorization': `Bearer ${token}` }
    })
  },
}

//TODO : Do the API Call
