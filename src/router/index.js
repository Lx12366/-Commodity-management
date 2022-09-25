import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'Main',
        component:()=>import ("../views/Main-jjj.vue"),
        redirect:'/home',
        children:[
            // {
            //     path:'/home',
            //     name: 'home',
            //     component:()=>import("../views/home/index")
            // },
            // {
            //     path:'/user',
            //     name:'user',
            //     component:()=>import ("../views/User/index")
            // },
            // {
            //     path:'/mail',
            //     name:'mail',
            //     component:()=>import ("../views/mail/index")
            // },
            // {
            //     path:'/page1',
            //     name:'page1',
            //     component:()=>import ("../views/other/page1")
            // },
            // {
            //     path:'/page2',
            //     name:'page2',
            //     component:()=>import ("../views/other/page2")
            // }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:()=>import("../views/Login/login.vue")
    }
]

const router=new VueRouter({
    mode:'history',
    routes
})

export default router
