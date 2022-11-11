
import PageIndex from '../pages/index/index.vue';
import PageIndexDetail from '../pages/indexDetail/index.vue'
import NotFound from '../pages/404/index.vue'
const RouterConfig = {
    // 404: {
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     redirect: '/404',
    //     component: NotFound,
    //     hidden: true,

    // },
    /**
     * 首页
     */
    index: {
        path: '/index',
        name: '首页',
        component: PageIndex,
        icon: '',

    },
    /**
     * 首页详情
     */
    indexDetail: {
        path: '/indexDetail',
        name: '详情',
        component: PageIndexDetail,
        icon: '',
        hidden: true,
        // redirect: to => {
        //     console.log(to);
        //     return
        // }
    },
  
}

export default RouterConfig