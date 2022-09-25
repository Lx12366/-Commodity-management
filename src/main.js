import Vue from 'vue';
import {
    Button, Switch, Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup,
    Dropdown, DropdownItem, DropdownMenu, Row, Col, Card, Table, TableColumn,
    Breadcrumb, BreadcrumbItem, Tag,Form,FormItem,Input,Select,DatePicker,Option,Dialog,
    Pagination, Message, MessageBox
} from 'element-ui';
//按需引入，减少体积
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import router from './router'
import store from "./store";
import './assets/less/index.less'
import http from 'axios'
import './api/mock'

import ta from "element-ui/src/locale/lang/ta";


Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Switch)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)
// Vue.use(Message)
//messagebox 只用改变引入方式，放在vue原型里就可以了
// Vue.use(MessageBox)



Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

router.beforeEach((to,from,next)=>{
    store.commit('getToken')
    const token = store.state.user.token
    if(!token && to.name !== 'login'){
        next({name:'login'})
    }
    else if(token && to.name ==='login'){
        next({name:'home'})
    }
    else{
            next()
        }
})

new Vue({
    store,
    router,
    render: h => h(App),
    created(){
        store.commit('addMenu', router)
    }
}).$mount('#app')
