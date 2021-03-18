
const store =  { 
state(){
return {
    isZoomed: false,
}
},
mutations:{
    changeZoom(state,payload){
        state.isZoomed = payload
    }
},
actions:{
    changeZoom({commit}, payload){
        commit('changeZoom', payload)
    }
},
getters:{
    isZoomed(state){
        return state.isZoomed;
    }
}
}


export default store