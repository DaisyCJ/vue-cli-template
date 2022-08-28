import Vue from 'vue'

/**
 * 自定义请求发送成功拦截器
 */
export function requestSuccessFunc(request) {
  const isRequestJsonFile = /\.*?.(json|html)$/
  if (isRequestJsonFile.test(request.url)) {
    request.baseURL = ''
  }
  return request
}

/**
 * 自定义请求发送失败拦截器
 */
export function requestFailFunc(error) {
  return Promise.reject(error)
}

/**
 * 自定义请求响应成功拦截器
 */
export function responseSuccessFunc(response) {
  const headers = response.headers
  const data = response.data
  const config = response.config

  // 文件导出
  if (headers['content-type'].toLocaleLowerCase().includes('application/octet-stream')) {
    if (data.success && !data.success) {
      // tip.error(data.msg)
      return Promise.reject(data)
    } else {
      return response
    }
  }

  // 附件下载失败拦截
  if (config.responseType === 'arraybuffer') {
    return Promise.reject(data)
  }

  if (data.code) {
    // 操作成功
    if (data.code === 200 && data.success) {
      return data.data
    } else {
      // 操作失败
      Vue.prototype.$errorModal(data.msg)
      return Promise.reject(data)
    }
  } else {
    return Promise.reject(data)
  }
}

/**
 * 自定义请求响应失败拦截器
 */
export function responseFailFunc(error) {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '请求错误'
        break
      case 401:
        error.message = '未授权，请登录'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = `请求地址404: ${error.response.config.url}`
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器内部错误'
        break
      case 501:
        error.message = '服务未实现'
        break
      case 502:
        error.message = '502'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网关超时'
        break
      case 505:
        error.message = 'HTTP版本不受支持'
        break
      default:
        break
    }
  }
  if (error.message) {
    // tip.error(error.message)
    Vue.prototype.$errorModal(error.message)
  }
  return Promise.reject(error)
}
