import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/home.vue'
import add from '../page/add.vue'
import auth from '../page/authentication.vue'
import carDetail from '../page/carDetail.vue'
import settingsPage from '../page/settings-page.vue'
import savedCars from '../page/settingsFolder/saved-cars.vue'
import myCars from '../page/settingsFolder/myCars/my-cars.vue'
import balance from '../page/settingsFolder/balance.vue'
import userSettings from '../page/settingsFolder/userSettings.vue'
import editCarPage from '../page/settingsFolder/myCars/edit-car.vue'
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
  path: '/settings', component: settingsPage, children: [
    {path: 'saved-cars', component: savedCars},
    {path: 'my-cars', component: myCars},
    {path: 'my-cars/edit/:carId', component: editCarPage},
    {path: 'balance', component: balance},
    {path: 'user-settings', component: userSettings}
  ]
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
