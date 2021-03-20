<template>
    <div>
        <base-button @toggleLogIn="toggle" mode="saved" >Saved</base-button>
        <span id="saved">{{ savedLength }}</span> 
    </div>
</template>

<script>
import baseButton from '../../UI/BaseModals/BaseButton.vue'
import axios from 'axios'
export default {
    components:{
        baseButton
    },

    data() {
        return {
            savedLength: null
      }
    },
methods: {
    toggle(){
        this.$store.dispatch('toggleShown')
    },
},
computed: {
            savedCarsList(){
            return this.$store.getters.carList
        }
},
mounted(){
        axios.get(`https://carweb-797f8-default-rtdb.firebaseio.com/savedCars/${this.$store.getters.userId}.json?auth=` + this.$store.getters.token)
        .then((response) => {
           this.$store.dispatch('addSavedCarsList', response.data)
           this.savedLength =  Object.keys(response.data).length
        }).catch(() => {
            this.savedLength = 0;
        });
    },
    watch:{
        savedCarsList(val){
            if(val){
                this.savedLength = Object.keys(this.$store.getters.savedCarsList).length
            }   
        }
    }    
}
</script>

<style scoped>
#saved{
    position: absolute;
    right: 10px;
    top: -10px;
    font-size: 10px;
    background-color: rgb(0, 162, 255);
    color: white;
    border-radius: 50%;
    padding: 2px;
}
</style>