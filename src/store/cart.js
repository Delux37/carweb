import axios from 'axios'
const store =  { 
  state: {
    isNotified: false,
    notification: ''
  },
  mutations: {
    toggleModal(state, payload){
      state.isNotified = payload
    },
    addNotification(state,payload){
      state.notification = payload
    }
  },
  actions: {
    toggleModal(context, payload){
      context.commit('toggleModal', payload)
      if(payload=== false){
        window.location.reload();
      }
    },

    cart(context, payload){
        axios.get(`https://carweb-797f8-default-rtdb.firebaseio.com/savedCars.json?auth=` + payload.token)
        .then((response) => {
          const data = response.data
          const keys = Object.keys(data)

          if(keys.indexOf(payload.userId) === -1){ 

            axios({
              method: 'post',
              url: `https://carweb-797f8-default-rtdb.firebaseio.com/savedCars/${payload.userId}.json?auth=` + payload.token,
              data: {
                  carId: payload.carId
          }
          
          }).then(() => {
            // window.location.reload()
            context.commit('addNotification', 'Added to saved cars succesfully!')
            context.commit('toggleModal', true)
          })          
          }else{
            let temp = null;
            for(let i in data[payload.userId]){
              if(data[payload.userId][i]['carId'] === payload.carId){
                temp = i;
              }
            }
            if(temp !== null){
              context.commit('addNotification', 'Oops you\'ve already have this car in saved cars, click below to view it.')
              context.commit('toggleModal', true)

              return;
            }else{
                axios({
                  method: 'post',
                  url: `https://carweb-797f8-default-rtdb.firebaseio.com/savedCars/${payload.userId}.json?auth=` + payload.token,
                  data: {
                      carId: payload.carId
                  }
              }).then(() => {
                context.commit('addNotification', 'Added to saved cars succesfully!')
                context.commit('toggleModal', true)
              })
            }
          }
        }).catch(() => {
            console.log("error")
        })
        // .then(() => {

        //     axios({
        //         method: 'get',
        //         url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArtc_zaruHWFQIzQx7CkATC-caYQoMYUk',
        //         data: {
                  
        //           email: payload.email,
        //           password: payload.password,
        //           returnSecureToken: true,
        //         }
        //         }).then((responseData) => {
        //           const expiresIn = +responseData.data.expiresIn * 1000
        //           const expirationDate = new Date().getTime() + expiresIn;
      
        //           localStorage.setItem('token', responseData.data.idToken);
        //           localStorage.setItem('userId', responseData.data.localId);
        //           localStorage.setItem('tokenExpiration', expirationDate);
      
        //           timer =  setTimeout(function() {
        //             context.dispatch('logout')
        //           }, expiresIn);
      
        //           context.commit('setUser', {
        //             token: responseData.data.idToken,
        //             userId: responseData.data.localId,
        //             tokenExpiration: responseData.data.expiresIn
        //       });
        //     });

        // })
    },  
  },

  getters: {
    isNotified(state){
      return state.isNotified;
    },
    notification(state){
      return state.notification
    }
  }
}


export default store