<template>
    <div>
        <image-carousel :images = carDetail.images v-if="!isZoomed"></image-carousel>
        <image-carousel-zoomed :images = carDetail.images v-else></image-carousel-zoomed>
        <general-detail :info = carDetail ></general-detail>
        <description v-if="carDetail" :carId = this.$route.params.carId :userId = this.$route.params.userId :description="carDetail.description" :sellingType="carDetail.carComforts.sellingType"/>
        <div id="secondSection">
            <comforts v-if="carDetail" :comforts = carDetail.carComforts.comforts></comforts>
            <carMainFeatures v-if="carDetail" :steeringWheelSide="carDetail.carComforts.steeringWheelSide" :mainFeatures = carDetail.carMAinFeatures />
        </div>

    </div>
</template>

<script>
import imageCarousel from '../components/carDetail-page/image-carousel.vue'
import imageCarouselZoomed from '../components/carDetail-page/image-carousel-zoomed.vue'
import generalDetail from '../components/carDetail-page/general-detail.vue'
import comforts from '../components/carDetail-page/comforts.vue'
import carMainFeatures from '../components/carDetail-page/main-features.vue'
import description from '../components/carDetail-page/description.vue'

export default {
components:{
    imageCarousel,
    imageCarouselZoomed,
    generalDetail,
    comforts,
    carMainFeatures,
    description
},
computed:{
    carDetail(){
        return this.$store.getters.carDetail
    },
    carImages(){
        return this.$store.getters.carImages
    },
    isZoomed(){
        return this.$store.getters.isZoomed
    }
},
mounted(){
    this.$store.dispatch('fetchDetail',{
        user : this.$route.params.userId,
        carId : this.$route.params.carId
    })
},
}
</script>

<style scoped>
#secondSection{
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    width: 70%;
    margin: 20px auto;
    background-color: white;
}

</style>