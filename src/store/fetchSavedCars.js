import axios from 'axios'

const store = {
    state: {
        isDisplayed: false,
        savedCarsList: null,
        savedCars: []
    },
    mutations: {
        pushSavedCars(state, payload){
            state.savedCarsList = payload;
        },
        addSavedCars(state, payload){
            state.savedCars.push(payload)
        },
        toggle(state){
            state.isDisplayed = !state.isDisplayed;
        },
        clearCarList(state){
            state.savedCars = []
        }
    },
    actions: {
        fetchSavedCars(context, payload){
            for(const key in payload){
                axios.get(`https://carweb-797f8-default-rtdb.firebaseio.com/carList/${payload[key]['carOwnerUserId']}/${payload[key]['carId']}/carCardInfo.json`)
                .then((response) => {
                    // handle success
                    // console.log(response.data)
                    const tempData = {
                        image: response.data['firstImage'],
                        brand: response.data['brand']+' ' + response.data['model'],
                        location: response.data['location'],
                        price: response.data['price']
                    }
                    context.commit('addSavedCars', tempData);
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
        }
    }
}

export default store