/*
 * @Descripttion: 
 * @Author: pangpf
 * @Date: 2021-12-02 14:36:53
 * @LastEditors: pangpf
 */
import tab from './tab'
import auth from './auth'
import cache from './cache'
import modal from './modal'
import download from './download'

export default function installPlugins(app){
  // 页签操作
  app.config.globalProperties.$tab = tab
  // 认证对象
  app.config.globalProperties.$auth = auth
  // 缓存对象
  app.config.globalProperties.$cache = cache
  // 模态框对象
  app.config.globalProperties.$modal = modal
  // 下载文件
  app.config.globalProperties.$download = download
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $tab: tab,
    $auth: auth,
    $cache: cache,
    $modal: modal,
    $download: download
  }
}