
// import pagesIndex from '../pages/index/index.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import {defineAsyncComponent} from 'vue'
const PageIndex = defineAsyncComponent(()=> import('../pages/index/index.vue'))
const routes =   [{
    path:'/index',
    component:PageIndex,
    meta:{
        usePathKey:'index',
        transition:'',
        name:'首页',
        icon:''
    }
}]

const router =   createRouter({
    history: createWebHashHistory(),
    routes
})

export default router