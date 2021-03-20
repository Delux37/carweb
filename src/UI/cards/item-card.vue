<template>
    <div class="item-card" @click="selectCar(user,carId)" >
        <div class="img-container" :style="'background-image: url(' + image + ')'">
            
        </div>
        <div class="content-container">
            <p class="first-title"><span>{{ year }}</span> <span>{{ location }}</span></p>
            <h2>{{ newModel }}</h2>
            <p class="tags">
                <span v-for="(tag,index) in tags" :key = "index">
                    {{ tag }}
                </span>
            </p>
            <h3>{{ convertedPrice }}</h3>
        </div>
        <!-- <img :src="carImage"/> -->
    </div>
</template>

<script>
export default {
    props: ['model', 'brand', 'year', 'location', 'price', 'image', 'tags', 'user', 'carId'],
    computed: {
        newModel() {
            return this.model + ' ' + this.brand 
        },
        convertedPrice(){
            return this.price + '$'
        }
    }, 
    methods:{
        selectCar(user,carId){
            this.$router.push({ name: 'carDetail', params: { userId:user, carId: carId } })
        }
    }
}
</script>

<style scoped>
.first-title{
    font-size: 10px;
    font-weight: 400;
    color: grey;
}
h2{
    position: relative;
    margin-top: -15px;
    font-size: 16px;
}
h3{
    color: orange;
}
.tags span{
    position: relative;
    margin-top: -5px;
    background-color: #f1f2f6;
    padding: 5px;
    font-size: 14px;
    border-radius: 20px;
    margin-right: 10px;
    color: #727677;
    font-weight: 100;
}
.item-card{
    border-radius: 10px;
    width: 23%;
    height: 400px;
    background-color: #fff;
}

.item-card:hover, h2:hover{
    color: orange;
    cursor:pointer;
}
.img-container{
    width: 100%;
    height: 60%;
    /* background-image: url(https://i.picsum.photos/id/696/400/400.jpg?hmac=EcCTdZQF9Ag_jdaGMbRGGTzRgRlhptB9tulSnwrqG8I); */
    background-size: 300px 100%;
    background-repeat: no-repeat;
    background-position: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
}
.content-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
    height: 40%;
    padding-left: 10px;
}
</style>