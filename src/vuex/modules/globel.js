import * as types from './mutation-types'

const state = {
    LoginInfo:{
        methods:'',
        datas:{}
        
    },
    IsShow:false,
    Countries:{}
}
const getters = {
    gLoginInfo:state=>state.LoginInfo,
    gIsShow:state=>state.IsShow,
    gCountries:state=>state.Countries
}

const actions = {
    sLoginInfo({commit},params){
       commit(types.SET_LOGIN_INFO,params) 
    },
    sIsShow({commit},params)
    {
        commit(types.SET_IS_SHOW,params)
    },
    sCountries({commit},params)
    {
        commit(types.SET_COUNTRIES,params)
    }
}

const mutations = {
    [types.SET_IS_SHOW](state,params){
        state.IsShow = params;
    },
    [types.SET_COUNTRIES](state,params)
    {
        state.Countries=params;
    },
    [types.SET_LOGIN_INFO](state,params)
    {
        let { methods,datas} = params;
        switch(methods)
        {
            case 'clear':
                Object.keys(state.LoginInfo.datas).forEach(v=>{
                    localStorage.removeItem(v);
                });
                state.LoginInfo = {
                    methods:'',
                    datas:{}
                };
                break;
            case 'set':
                Object.entries(datas).forEach(v=>{
                    localStorage.setItem(v[0],v[1]);
                    state.LoginInfo.datas[v[0]]=v[1];
                });
                break;
        }
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}