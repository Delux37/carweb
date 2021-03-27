<template>
    <div>
        <div v-if="fetched">
            <myCarsCard v-for="(car,index) in myCars" :key="index"
            :price = car.price
            :location = car.location
            :brand = car.brand
            :image = car.firstImage  
            :carId = car.carId
            owner= "true"
            @removeCarFromList = "removeCarFromList"
            @editMyCar="editMyCar"
            ></myCarsCard>
        </div>
        <div v-else id="loading">
            <loadingSpinner />
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import myCarsCard from './my-cars-card.vue'
import loadingSpinner from '../../../UI/loading/loading-spinner.vue'

export default {
    components: {
        myCarsCard,
        loadingSpinner
    },
    data(){
        return {
            myCars: []
        }
    },
    computed:{
        fetched(){
            return this.myCars.length > 0
        }
    },
    mounted(){
axios.get(`https://carweb-797f8-default-rtdb.firebaseio.com/carList/${this.$store.getters.userId}.json`)
.then((response) => {
    // console.log('mounted')
    const data = response.data
    for(const key in data){
        const tempCar = data[key].carCardInfo;
        tempCar.carId = key;
        this.myCars.push(tempCar);
    }
})
},
methods:{
    editMyCar(carId){
        this.$router.replace(`my-cars/edit/${carId}`)
    },
    removeCarFromList(carId){
        axios.delete(`https://carweb-797f8-default-rtdb.firebaseio.com/carList/${this.$store.getters.userId}/${carId}.json?auth=` + this.$store.getters.token)
    }
}
}
</script>

<style scoped>
#loading{
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}
/* .test{
    border: 2px solid blue;
    width: 300px;
    height: 300px;
} */

</style>