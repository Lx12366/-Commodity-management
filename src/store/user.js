import Cookie from 'js-cookie'
export default {
    state:{
        token:''
    },
    mutations:{
        setToken(state,val){
            state.token=val
            Cookie.set('token',val)
        },
        getToken(state){
            state.token= state.token || Cookie.get('token')
        },
        clearToken(state){
            state.token=''
            Cookie.remove('token')
        }
    }
}
