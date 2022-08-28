import axios from 'axios'
import {requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc} from './interceptors'

export const AXIOS_DEFAULT_CONFIG = {
  baseURL: '/',
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
}

// axios实例
const axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG)

// 添加请求、响应拦截器
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc)
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc)

export default axiosInstance
