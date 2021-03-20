<template>
    <div id="parent">
        <!-- <nav-bar></nav-bar> -->
        <div id="container">
            <main id="main-content" v-if="!isLoading">
                <item-card v-for = "(car,index) in carList"
                :key = "index"
                :brand = car.carList.brand
                :model = car.carList.model
                :price = car.carList.price
                :year = car.carList.year
                :tags = car.carList.tags
                :location = car.carList.location
                :image = car.carList.firstImage
                :user = car.user
                :carId = car.carId
                :id = car.carList.id
                 ></item-card>
            </main>
            <main id="main-content" v-else>
                <cardSkeletonLoader v-for="num in iteration" :key="num"/>
            </main>
        </div>
    </div>    
</template>

<script>
import axios from 'axios'
import itemCard from '../UI/cards/item-card.vue'
import cardSkeletonLoader from '../UI/loading/cardSkeletonLoader.vue'
// import navBar from '../components/nav-bar.vue';
export default {
    components: {
        // navBar,
        itemCard,
        cardSkeletonLoader
    },
    data(){
        return {
            carList: [],
            isLoading: false,
            iteration: null,
        }
    },
    created(){
    axios.get('https://carweb-797f8-default-rtdb.firebaseio.com/test.json')
        .then((response ) => {
            // handle success
        this.iteration = response.data.Amount 
    })
    },
    mounted(){
    this.isLoading = true
    axios.get('https://carweb-797f8-default-rtdb.firebaseio.com/carList.json')
        .then((response ) => {
            for(let user in response.data){
                for(let carId in response.data[user]){
                    this.carList.push({
                        user,
                        carId,
                        carList: response.data[user][carId].carCardInfo
                    })
                }
            }
        }).then(() => {
            this.isLoading = false
        })
    }
}
</script>

<style scoped>
#parent{
    padding-top: 10vh;
}
#container{
    width: 100%;
}
#main-content{
    /* border: 2px solid black; */
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 20px;
}
</style>