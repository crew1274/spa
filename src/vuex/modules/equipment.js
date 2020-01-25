import * as types from './mutation-types'

const state = {
    selectAll:false
}

const getters={
    gSelectAll:state=>state.selectAll
}

const actions={
    sSelectAll({commit},params){
        commit(types.SET_SELECT_ALL,params) 
     },
}

const mutations = {
    [types.SET_SELECT_ALL](state,params){
        state.selectAll = params;
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}