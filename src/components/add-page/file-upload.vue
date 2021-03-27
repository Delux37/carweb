<template>
    <div class="wrapper">
        <header>
            <p>Upload photos, write description and price</p>
        </header>
        <div class="container">
            <form class="form">
                <div class="form-control">
                    <label for="photo">Click on choose file: </label>
                    <input type="file" 
                    id="photo"
                    @click="filePopUp"
                        ref="fileInput"
                        accept="image/*"
                        @change.prevent="onFilePicked"
                        />
                </div>

                <div  class="image-container">
                    <div v-if="images.length" id="forCheck">
                        <div v-for = "image in images" :key = "image" class="image-cont">
                            <img :src="image"/>
                        </div>
                    </div>
                    <div v-else id="textAlter">
                        <p>View your photos here</p>
                    </div>
                </div>
                <div class="description">
                    <p>Say something about your vehicle</p>
                    <textarea id="description" placeholder="description" rows="10" v-model="description"></textarea>
                </div>
                <div class="price">
                    <label for="price">Price:</label>
                    <input type="number" id="price" v-model="price"/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: ['newPrice', 'newImages', 'newDescription'],
     data(){
        return {    
            /*IMAGES SECTION*/
            imageUrl: '',
            image: null,
            images: [],
            /*********/ 
            description: null,
            price: null,
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
    },
    mounted(){
        if(this.data){
            if(this.data.price && this.data.description && this.data.images.length){
                this.price= this.data.price
                this.description = this.data.description
                this.images = this.data.images
            }
        }else{
            console.log('No data')
        }
    },
    computed: {
        val(){
            this.$emit('clicked', this.images, this.price, this.description);
            return this.images && this.price && this.description
        },

        data(){
            return this.$store.getters.editPageData
        }
    },
    watch: {
        val() {}
    }
}
</script>

<style scoped>
#textAlter{
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.wrapper{
    width: 80%;
    margin: 0 auto;
}
header{
    margin-bottom: 15px;
    color: #ffbe46;
}
.container{
    border-top: 1px dotted black;
    border-bottom: 1px dotted black;
    padding: 20px 0;
    /* border: 2px solid red; */
}
.image-container{
    background-color: white;
    padding: 5px;
    border: 1px dotted black;
    border-radius: 15px;
    height: fit-content;
    min-height: 150px;
    margin-top: 50px;

}
.image-cont{
    width: 20%;
    height: 150px;
    display: inline-block;
    margin-left: 20px;
}

#for-check{
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 10px;
}

.image-cont img{
    width: 100%;
    height: 100%;
}

.description p{
   font-weight: 100;
   font-size: 16px;
    margin-top: 50px;
}
.description textarea{
    outline: none;
    padding: 15px;
    width: 100%;
}
.price label{
    display: block;
    margin-bottom: 5px;
    margin-top: 25px;
}
.price input{
    padding: 20px;
}
</style>