import axios from 'axios'
// let timer;
const store =  { 
    state(){
        return {
          carDetail: null
        }
      },
      mutations:{
        setCarDetail(state,payload){
          state.carDetail = payload
        },
        cleanData(state){
          state.carDetail = null;
        }
      },
      actions:{
        fetchDetail({commit}, payload){
          axios.get(`https://carweb-797f8-default-rtdb.firebaseio.com/carList/${payload.user}/${payload.carId}/carDetail.json`)
          .then((response) => {
              // handle success
              commit('setCarDetail', response.data);
          })
        },
        cleanData({commit}){
          commit('cleanData');
        }
      },
      getters:{
        carDetail(state){
          return state.carDetail
        },
      }
}


export default store