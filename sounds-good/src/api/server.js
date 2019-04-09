import axios from 'axios'

axios.create({
  timeout: 15000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 请求拦截
axios.interceptors.request.use(config=>{
  return config
}, error=>{
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response=>{
  return response.data
}, error=>{
  return Promise.reject(error)
})

export default axios