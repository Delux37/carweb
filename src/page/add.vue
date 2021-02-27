<template>
    <div>
        <form>
            <div class="form-control">
                <label for="model"></label>
                <input type="text" v-model="model" placeholder="Enter model of your car" id="model"/>
            </div>
            <div class="form-control">
                <label for="year"></label>
                <input type="text" v-model="year" placeholder="Enter year of your car" id="yer"/>
            </div>
            <div class="form-control">
                <label for="region"></label>
                <input type="text" v-model="region" placeholder="Enter place of your car" id="region"/>
            </div>
            <div class="form-control">
                <label for="price"></label>
                <input type="text" v-model="price" placeholder="Enter price of your car" id="price"/>
            </div>
            <div class="form-control">
                <label for="photo">Choose photo</label>
                <input type="file" 
                  id="photo"
                   @click="filePopUp"
                    ref="fileInput"
                     accept="image/*"
                     @change.prevent="onFilePicked"/>
            </div>
            <div v-if="images.length">
                <div v-for = "image in images" :key = "image">
                     <img :src="image"/>
                </div>
            </div>
            <button type="submit" @click.prevent = "sendPostRequest">Add</button>
        </form>
    </div>
</template>

<script>
// import baseButton from '../UI/BaseButton.vue'
import axios from 'axios'


export default {
    components: {
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
.onfido-sdk-ui-CustomFileInput-input{
  display: none !important 
}
</style>