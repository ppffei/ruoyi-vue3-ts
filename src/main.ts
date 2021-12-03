/*
 * @Descripttion: 
 * @Author: pangpf
 * @Date: 2021-12-02 15:11:03
 * @LastEditors: pangpf
 */
import { createApp } from 'vue'

import Cookies from 'js-cookie'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言

import '@/assets/styles/index.scss' // global css

import App from './App.vue'
import store from './store'
import router from './router'
import directive from './directive' // directive


// 注册指令
import plugins from './plugins' // plugins
import { download } from '@/utils/request'

// svg图标
import 'virtual:svg-icons-register'
import SvgIcon from './components/SvgIcon/index.vue'
import elementIcons from '@/components/SvgIcon/svgicon'

import './permission' // permission control

import { useDict } from '@/utils/dict'
import { parseTime, resetForm, addDateRange, handleTree, selectDictLabel } from '@/utils/ruoyi'

// 分页组件
import Pagination from './components/Pagination/index.vue'
// 自定义表格工具组件
import RightToolbar from './components/RightToolbar/index.vue'
// 自定义树选择组件
import TreeSelect from './components/TreeSelect/index.vue'
// 字典标签组件
import DictTag from './components/DictTag/index.vue'

const app = createApp(App)

// 全局方法挂载
app.config.globalProperties.useDict = useDict
app.config.globalProperties.download = download
app.config.globalProperties.parseTime = parseTime
app.config.globalProperties.resetForm = resetForm
app.config.globalProperties.handleTree = handleTree
app.config.globalProperties.addDateRange = addDateRange
app.config.globalProperties.selectDictLabel = selectDictLabel

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    useDict: useDict,
    download: download,
    parseTime: parseTime,
    resetForm: resetForm,
    handleTree: handleTree,
    addDateRange: addDateRange,
    selectDictLabel: selectDictLabel
  }
}


// 全局组件挂载
app.component('DictTag', DictTag)
app.component('Pagination', Pagination)
app.component('TreeSelect', TreeSelect)
app.component('RightToolbar', RightToolbar)

app.use(router)
app.use(store)
app.use(plugins)
app.use(elementIcons)
app.component('SvgIcon', SvgIcon)

directive(app)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: locale,
  size: Cookies.get('size') || 'medium'
})

app.mount('#app')
