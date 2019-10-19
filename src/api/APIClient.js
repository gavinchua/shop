import axios from 'axios'
import app from '@/main'

const apiClient = axios.create({
  baseURL: 'http://demo1231425.mockable.io/'
})

apiClient.interceptors.request.use(config => {
  app.$Progress.start()
  return config
})

apiClient.interceptors.response.use(response => {
  app.$Progress.finish()
  return response
})

export default {
  getUser(userid) {
    // Query the API for userid 3522314150
    return apiClient.get(`user?uid=${userid}`)
  },
  getProducts() {
    // Get all products
    return apiClient.get('products')
  }
}
