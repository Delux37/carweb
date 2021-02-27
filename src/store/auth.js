import axios from 'axios'
let timer;
const store =  { 
state: {
    isLoggedIn: false,
    
    test: '1',

    userId: null,
    token: null,
    tokenExpiration: null,
  },
  mutations: {
    setUser(state, payload){
        state.token = payload.token
        state.userId = payload.userId
    },

    // logIn(state){
    //   state.isLoggedIn = !state.isLoggedIn
    // },
    logout(state){
      state.token = null;
      state.userId = null;
      state.tokenExpiration = null;
    }
  },
  actions: {
    auth(context, payload){
      const mode = payload.mode;
      if(mode == 'login'){
        axios({
          method: 'post',
          url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArtc_zaruHWFQIzQx7CkATC-caYQoMYUk',
          data: {
            
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }
          }).then((responseData) => {
            const expiresIn = +responseData.expiresIn * 1000
            const expirationDate = new Date().getTime() + expiresIn;

            localStorage.setItem('token', responseData.data.idToken);
            localStorage.setItem('userId', responseData.data.localId);
            localStorage.setItem('tokenExpiration', expirationDate);

            timer =  setTimeout(function() {
              context.dispatch('logout')
            }, expiresIn);

            context.commit('setUser', {
              token: responseData.data.idToken,
              userId: responseData.data.localId,
              tokenExpiration: responseData.data.expiresIn
        });
      });
      }else{
        console.log("in signup")
        axios({
          method: 'post',
          url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArtc_zaruHWFQIzQx7CkATC-caYQoMYUk',
          data: {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }
          }).then((responseData) => {
            const expiresIn = +responseData.expiresIn * 1000
            const expirationDate = new Date().getTime() + expiresIn;

            localStorage.setItem('token', responseData.data.idToken);
            localStorage.setItem('userId', responseData.data.localId);
            localStorage.setItem('tokenExpiration', expirationDate)

            timer =  setTimeout(function() {
              context.dispatch('logout')
            }, expiresIn);
            context.commit('setUser', {
            token: responseData.data.idToken,
            userId: responseData.data.localId,
        });
      });



      }
    },
    // login(context,payload){
        
    // },
    // signup(context, payload) {
        
    //     // const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArtc_zaruHWFQIzQx7CkATC-caYQoMYUk', {
    //     //     method: 'POST',
    //     //     body: JSON.stringify({
    //     //         email: payload.email,
    //     //         password: payload.password,
    //     //         returnSecureToken: true,
    //     //     })
    //     // });
    //     // const responseData = await response.json();
    //     // console.log(responseData);
            
    //     // context.commit('setUser', {
    //     //     token: responseData.token,
    //     //     userId: responseData.localId,
    //     //     tokenExpiration: responseData.expiresIn
    //     // });

    // },
    
    logout(context){
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('tokenExpiration');

      clearTimeout(timer);

      context.commit('setUser', {
        token: null,
        userId: null,
      })
    },
    tryLogin(context){
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const tokenExpiration = localStorage.getItem('tokenExpiration')

      const expiresIn = +tokenExpiration - new Date().getTime();

      if(expiresIn < 0){
        return;
      }

      timer = setTimeout(function(){
        context.dispatch('logout'), expiresIn
      })

      if(token && userId){
        context.commit('setUser', {
          token: token,
          userId: userId,
        });
      }
    }
  },
  getters: {
    isAuthenticated(state){
      return !!state.token
    },
    token(state){
      return state.token
    },
    userId(state){
      return state.userId
    }
  }
}


export default store