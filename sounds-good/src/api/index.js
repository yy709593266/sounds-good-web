import server from './server'
import URL from './serverAPI.config'

export function apiGetPicList(opts){
  return server({
    url: URL.apiGetPicList,
    method: 'get',
    dataType: 'json',
    data: opts
  })
}