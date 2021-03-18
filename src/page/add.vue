<template>
    <div>
        <main-features @clicked="addCarMainFeatures"></main-features>
        <comfort-details @clicked="addCarComforts"></comfort-details>
        <file-upload @clicked="addDetail"></file-upload>
        <user-detail @clicked="addUserDetail"></user-detail>
        <base-button mode="submit" id="btn" @toggleLogIn="sendPostRequest">Submit</base-button>
    </div>
</template>

<script>
import axios from 'axios'
import mainFeatures from '../components/add-page/car-main-features.vue'
import comfortDetails from '../components/add-page/comfort-details.vue'
import fileUpload from '../components/add-page/file-upload.vue'
import userDetail from '../components/add-page/user-detail.vue'
import baseButton from '../UI/BaseButton.vue'

export default {
    components: {
        mainFeatures,
        comfortDetails,
        fileUpload,
        userDetail,
        baseButton
        // baseButton
    },
    data(){
        return {    
            carInfo: {
                // Model, Brand, price, bodyType fuel Type, price, firstImage
                carMainFeatures: null,
                carComforts: null,
                images: [],
                description: null,
                price: null,
                userDetail: null,
            },
            carCardInfo: {
                brand: null,
                model: null,
                year: null,
                tags: [],

                firstImage: null,
                price: null,

                location: null,
            }

        }
    },
    methods: {
        testInfo(){
            console.log(this.carCardInfo);
        },
        sendPostRequest() {
            const token = this.$store.getters.token;
            const userId = this.$store.getters.userId

            axios({
            method: 'post',
            url: `https://carweb-797f8-default-rtdb.firebaseio.com/carList/${userId}.json?auth=` + token,
            data: {
                carDetail: this.carInfo,
                carCardInfo: this.carCardInfo
            }
            });
            this.$router.replace('/');
        },
        addCarMainFeatures(val, brand, model, year, tags){
            this.carCardInfo.brand = brand;
            this.carCardInfo.model = model;
            this.carCardInfo.year = year;
            this.carCardInfo.tags = tags;
            this.carInfo.carMAinFeatures = val;
        },
        addCarComforts(val){
            this.carInfo.carComforts = val;
        },
        addDetail(images,price,desc){
            this.carInfo.images = images;
            this.carInfo.description = desc;
            this.carInfo.price = price;
            this.carCardInfo.price = price;
            this.carCardInfo.firstImage = images[0];
        },
        addUserDetail(val, location){
            this.carInfo.userDetail = val;
            this.carCardInfo.location = location
        }
    }
   
}
</script>

<style scoped>
/* .onfido-sdk-ui-CustomFileInput-input{
  display: none !important 
} */
#btn{
    text-align: center;
    margin-bottom: 20px;
}
</style>