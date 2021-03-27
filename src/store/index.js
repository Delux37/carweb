import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.js'
import fetchDetail from './fetchDetail.js'
import zoomImage from './zoomImage.js'
import cart from './cart.js'
import fetchSavedCars from './fetchSavedCars.js'

import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    fetchDetail,
    zoomImage,
    cart,
    fetchSavedCars,
  },
    state() {
      return {
        editPageData: null,
      }
    },
    mutations:{
      setData(state, payload){
          state.editPageData = payload
      },
      clearData(state){
        state.editPageData = null
      }
    },
    actions:{
      fetchEditPageDetail(context, payload){
          axios.get(`https://carweb-797f8-default-rtdb.firebaseio.com/carList/${payload.userId}/${payload.carId}/carDetail.json`)
          .then((res) => {
             context.commit('setData', res.data)
          })
      },
      clearEditPageData({commit}){
        commit('clearData')
      }
    },
    getters: {
      editPageData(state){
          return state.editPageData
      }
    }
})
