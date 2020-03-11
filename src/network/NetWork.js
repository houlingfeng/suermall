import axios from 'axios'
export function network (config) {
  const network1 = new axios.create({
    baseURL: 'http://106.54.54.237:8000/api/wh',
    timeout: 5000
  })
  network1.interceptors.request.use(rel => {
    return rel
  })
  network1.interceptors.response.use(rel => {
    return rel
  })
  return network1(config)
}