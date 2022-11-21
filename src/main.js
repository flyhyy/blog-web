import { createApp } from 'vue' 
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './style.css'
// #app 挂载 index.html
// 返回值是根组件实例而非应用实例
const app = createApp(App)
// 挂载图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//   定义一个应用级的错误处理器，它将捕获所有由子组件上抛而未被处理的错误
app.config.errorHandler = (err) => {
    console.log(err, 'errorHandler')
}
// 一个用于注册能够被应用内所有组件实例访问到的全局属性的对象。
// 这是对 Vue 2 中 Vue.prototype 使用方式的一种替代
// 如果全局属性与组件自己的属性冲突，组件自己的属性将具有更高的优先级。
app.config.globalProperties = {
    msg:'msg'
}
app.use(router).use(ElementPlus,{
  // 配置国际化 
  locale:zhCn
})
app.mount('#app')
