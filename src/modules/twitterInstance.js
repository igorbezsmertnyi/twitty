import axios from 'axios'

const baseURL = process.env.VUE_TWITTER_BASE_URL || 'http://localhost:7890/1.1/statuses/'
const instance = axios.create({
  baseURL: baseURL
})

export default instance
