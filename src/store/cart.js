import axios from 'axios'
const store =  { 
  mutations: {
    // setSaved(state,payload){

    // }
  },
  actions: {
    cart(context, payload){
        axios.get(`https://carweb-797f8-default-rtdb.firebaseio.com/saved/${payload.userId}.json?auth=` + payload.token)
        .then((response) => {
            console.log(response)
        
        }).catch(() => {
            console.log("error")

            axios({
                method: 'post',
                url: `https://carweb-797f8-default-rtdb.firebaseio.com/saved/${payload.userId}.json?auth=` + payload.token,
                data: {
                    carId: payload.carId
                }
            });
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
}


export default store