import axios from 'axios'

const store = {
    state: {
        isDisplayed: false,
        savedCarsList: null,
        savedCars: [],
        isLoading: true,
        newList: []
    },
    mutations: {
        pushSavedCars(state, payload){
            state.savedCarsList = payload;
        },
        addSavedCars(state, payload){
            state.savedCars.push(payload)
        },
        addSettingsSavedCars(state,payload){
            state.newList.push(payload)
        },
        toggle(state){
            state.isDisplayed = !state.isDisplayed;
        },
        clearCarList(state){
            state.savedCars = []
        },
        toggleLoading(state,payload){
            state.isLoading = payload;
        },
        addNewList(state,payload){
            state.savedCars = payload.newSavedCars
            state.savedCarsList = payload.newSavedCarsList
        },
        deleteNewList(state){
            state.newList = []
        }
    },
    actions: {
        fetchSavedCars(context, param){
            const payload = param.data
            for(const key in payload){
                axios.get(`https://carweb-797f8-default-rtdb.firebaseio.com/carList/${payload[key]['carOwnerUserId']}/${payload[key]['carId']}/carCardInfo.json`)
                .then((response) => {
                    // handle success
                    // console.log(response.data.length)
                    const tempData = {
                        image: response.data['firstImage'],
                        brand: response.data['brand']+' ' + response.data['model'],
                        location: response.data['location'],
                        price: response.data['price'],
                        userId: payload[key]['carOwnerUserId'],
                        carId: payload[key]['carId']
                    }
                    if(param.forSettings){
                        context.commit('addSettingsSavedCars', tempData);
                    }else{
                        context.commit('addSavedCars', tempData);
                    }
                })
            }

        },
        addSavedCarsList(context, payload){
            context.commit('pushSavedCars', payload);
        },
        toggleShown(context){
            context.commit('toggle');
        },
        clearCarList(context){
            context.commit('clearCarList')
        },
        toggleLoading(context, payload){
            context.commit('toggleLoading', payload)
        },
        deleteFromSavedCarsList(context,payload){
            // context.commit('deleteFromSavedCarsList', payload);
            axios.delete(`https://carweb-797f8-default-rtdb.firebaseio.com/savedCars/${payload.userId}/${payload.id}.json?auth=` + payload.token).then(() => {
                //   console.log(response)
              }).catch((error) => {
                  console.log(error)
            })
            context.commit('addNewList', {
                newSavedCarsList: payload.newSavedCarsList,
                newSavedCars: payload.newSavedCars
            })
        },
        deleteNewList(context){
            context.commit('deleteNewList')
        }
    },
    getters: {
        isShown(state){
            return state.isDisplayed
        },
        savedCarsList(state){
            return state.savedCarsList
        },
        carList(state){
            return state.savedCars
        },
        isLoading(state){
            return state.isLoading
        },
        settingsSavedCars(state){
            return state.newList
        }
    }
}

export default store