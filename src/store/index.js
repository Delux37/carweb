import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.js'
import fetchDetail from './fetchDetail.js'
import zoomImage from './zoomImage.js'
import cart from './cart.js'
import fetchSavedCars from './fetchSavedCars.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    fetchDetail,
    zoomImage,
    cart,
    fetchSavedCars
  },
})
