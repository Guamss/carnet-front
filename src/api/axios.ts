import type { Quote } from '@/models/carnet'
import { type User } from '@/models/user'
import axios, { type AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const userService = {
  async listAllQuotes(offset: number) {
    return api
      .get(`/quotes?offset=${offset}`)
      .then((res) => {
        return res.data as Quote[]
      })
      .catch((error) => {
        throw error
      });
  },
  async listAllUser() {
    return api.get('/users')
    .then((res) => {
      return res.data as User[]
    })
    .catch((error) => {
      throw error
    });
  }
}

export const authService = {
  async login(data: object): Promise<AxiosResponse> {
    return api.post('/token', data, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
  },
  async getUserProfile(token: string): Promise<User> {
    try {
      const res = await api.get('/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
      return res.data as User
    } catch (error) {
      throw error
    }
  },
}

//TODO : Do the API Call
