<template>
    <div id="parent">
        <nav-bar></nav-bar>
        <div id="container">
            <main id="main-content">
                <item-card v-for = "car in objects" 
                :key = "car"
                :model = car.model
                :year = car.year
                :region = car.region
                :tags= car.tags
                :price = car.price
                :image = car.image
                 ></item-card>
            </main>
        </div>           
    </div>    
</template>

<script>
import itemCard from '../UI/item-card.vue'
import navBar from '../components/nav-bar.vue';
export default {
    components: {
        navBar,
        itemCard
    },
    data(){
        return {
            objects: [
                {
                    model: 'BMW 328i',
                     year: '2012',
                     region: 'Tbilisi',
                     tags: ['Gas', 'Sedan'],
                     price: '7500$',
                     image: ['../img/0/0.jpg'] 
                },
                {
                     model: 'MERCEDES-BENZ GLA',
                     year: '2017',
                     region: 'Poti',
                     tags: ['Gas', 'Jeep'],
                     price: '27,500$',
                     image: ['../img/0/0.jpg'] 
                },
                {
                     model: 'AUDI A6',
                     year: '2019',
                     region: 'America',
                     tags: ['Gas', 'Sedan'],
                     price: '25,000$',
                     image: ['../img/0/0.jpg'] 
                },
                {
                    model: 'BMW 328i',
                     year: '2012',
                     region: 'Tbilisi',
                     tags: ['Gas', 'Sedan'],
                     price: '7500$',
                     image: ['../img/0/0.jpg'] 
                },
                {
                    model: 'BMW 328i',
                     year: '2012',
                     region: 'Tbilisi',
                     tags: ['Gas', 'Sedan'],
                     price: '7500$',
                     image: ['../img/0/0.jpg'] 
                },
            ]
        }
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
    border: 2px solid black;
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 20px;
}
</style>