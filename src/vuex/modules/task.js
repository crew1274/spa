import * as types from './mutation-types'

const state = {
    TopForm:{
        taskname:"",
        level:10,
        templatetype:"1",
        validate:false
    }
}

const getters={
    gTopForm:state=>state.TopForm
}

const actions={
    sTopForm({commit},params){
        commit(types.SET_TOP_FORM,params) 
     },
}

const mutations = {
    [types.SET_TOP_FORM](state,params){
        state.TopForm = params;
        console.log(state.TopForm);
    },
}
export default {
    state,
    getters,
    actions,
    mutations
}