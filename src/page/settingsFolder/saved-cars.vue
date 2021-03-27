<template>
    <div>
        <div v-if="carList.length > 0">
            <myCarsCard v-for="(car,index) in carList" :key="index"
                :price = car.price
                :location = car.location
                :brand = car.brand
                :image = car.image         
            ></myCarsCard>
        </div>
    </div>
</template>


<script>
import myCarsCard from './myCars/my-cars-card.vue'
export default {
    components:{
        myCarsCard
    },
    computed:{
        carList(){
            return this.$store.getters.settingsSavedCars
        },
        savedCarsList(){
              if(this.$store.getters.savedCarsList){
                  return this.$store.getters.savedCarsList
              }else{
                  return null
              }       
        }
    },
    mounted(){
        if(this.savedCarsList){
            this.$store.dispatch('fetchSavedCars', 
            {data: this.$store.getters.savedCarsList,
            forSettings: true
            });
        }
    },
    destroyed(){
        this.$store.dispatch('deleteNewList')
    },
    watch:{
        savedCarsList(){
            this.$store.dispatch('fetchSavedCars', 
            {data: this.$store.getters.savedCarsList,
            forSettings: true
            });
        },
    }


}
</script>

<style scoped>
/* #wrapper{
    height: 100vh;
    padding: 20vh;
    border: 5px solid red;
    width: 80%;
} */
</style>