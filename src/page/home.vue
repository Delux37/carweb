<template>
    <div id="parent">
        <!-- <nav-bar></nav-bar> -->
        <div id="container">
            <main id="main-content">
                <item-card v-for = "(car,index) in carList" 
                :key = "index"
                :brand = car.brand
                :model = car.model
                :price = car.price
                :year = car.year
                :tags = car.tags
                :location = car.location
                :image = car.firstImage
                 ></item-card>
            </main>
        </div>
    </div>    
</template>

<script>
import axios from 'axios'
import itemCard from '../UI/item-card.vue'
// import navBar from '../components/nav-bar.vue';
export default {
    components: {
        // navBar,
        itemCard
    },
    data(){
        return {
            carList: [],
        }
    },
    mounted(){
    axios.get('https://carweb-797f8-default-rtdb.firebaseio.com/carList.json')
        .then((response ) => {
            // handle success
            for(let key in response.data){
                for(let obj in response.data[key]){
                    this.carList.push(response.data[key][obj].carCardInfo);
                }
            }
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