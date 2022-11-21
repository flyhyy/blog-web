
// import pagesIndex from '../pages/index/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import RouterConfig from './config'
import NotFound from '../pages/404/index.vue'
 
const routes = Object.values(RouterConfig).map((item) => {
    return {
        path: item.path,
        component: item.component,
        name:item.name,
        redirect:item?.redirect || null,
        meta: {
            name: item.name,
            icon: item.icon,
            hidden:item?.hidden || false
        }
    }
})

// routes.push({
//     path: '/:pathMatch(.*)*',
//     name: 'NotFound',
//     redirect: '/404',
//     component: NotFound,
//     meta:{

//         hidden: true,
//     }

// })
console.log("打印----> ~ file: index.js ~ line 16 ~ routes ~ routes", routes)

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router