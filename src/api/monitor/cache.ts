/*
 * @Descripttion: 
 * @Author: pangpf
 * @Date: 2021-12-01 10:49:55
 * @LastEditors: pangpf
 */
import request from '@/utils/request'


// export function getCache() {
//   return request({
//     url: '/monitor/cache',
//     method: 'get'
//   })
// }
// 查询缓存详细
export const getCache = (): any=>{ 
  return request({
    url: '/monitor/cache', 
    method: 'get'
  })
}