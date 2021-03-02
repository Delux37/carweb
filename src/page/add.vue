<template>
    <div>
        <main-features></main-features>
        <comfort-details></comfort-details>
        <file-upload></file-upload>
        <user-detail></user-detail>
        <base-button mode="submit" id="btn">Submit</base-button>
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
            model: '',
            year: '',
            region: '',
            price: '',
            /*********/
            /*IMAGES SECTION*/
            imageUrl: '',
            image: null,
            images: [],
            /*********/ 
        }
    },
    methods: {
        filePopUp(){
            // this.$refs.fileInput.click()
        },
        onFilePicked(event){
            const files = event.target.files
            // let filename = files[0].filename
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl =  fileReader.result
                this.images.push(this.imageUrl);
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        },
        sendPostRequest() {
            const token = this.$store.getters.token;
            const userId = this.$store.getters.userId
            console.log(token)
            axios({
            method: 'post',
            url: `https://carweb-797f8-default-rtdb.firebaseio.com/carList/${userId}.json?auth=` + token,
            data: {
                model: this.model,
                year: this.year,
                region: this.region,
                price: this.price,
                images: this.images
            }
            });
            this.model = '',
            this.year = '',
            this.region = '',
            this.price = '',
            this.images = []
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