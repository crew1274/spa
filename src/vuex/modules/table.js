import * as types from './mutation-types'

const state ={
    TableAttr:{
        api:"",
        curPage:1,
        pageSize:1,
        examples:[],
        example:{},
        datas:[],
        total:0,
        totalPages:0
    }
}

const getters={
    getTableAttr:state=>state.TableAttr
}

const actions={
    setTableAttr({commit},params){
        commit(types.SET_TABLE_ATTR,params) 
    }
}

const mutations={
    [types.SET_TABLE_ATTR](state,params){
        for(let key in params){
            state.TableAttr[key] = params[key];
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}