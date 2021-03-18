import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/home.vue'
import add from '../page/add.vue'
import auth from '../page/authentication.vue'
import carDetail from '../page/carDetail.vue'
import NotFound from '../UI/notFound.vue'
// import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
{
  path: '/', component: Home, name: 'home'
},
{
  path: '/add', component: add
},
{
  path: '/authentication', component: auth, meta: { requiresUnAuth: true}
},
{
  path: '/cardetail/:userId/:carId', component: carDetail, name: 'carDetail'
},
{
  path: '/:notFound(.*)', component: NotFound 
},

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach(function(to,_,next){
//   if(to.meta.requiresUnAuth && store.getters.isAuthenticated){
//     next('/'); //we can pass new location like next('/')
//   }
// });

export default router
