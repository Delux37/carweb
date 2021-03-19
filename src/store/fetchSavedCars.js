const store = {
    state: {
        isDisplayed: true
    },
    getters: {
        isShown(state){
            return state.isDisplayed
        }
    }
}

export default store