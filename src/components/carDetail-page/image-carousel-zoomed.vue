<template>
    <div id="parent" v-if="images">
        <div id="close" @click="close"><span>Close</span><i class="fas fa-times"></i></div>
        <vueper-slides class="slider" :touchable="false" fixed-height="500px" ref="myVueperSlides" :bullets="false">
                <vueper-slide 
                class="slides"
                v-for="(img, i) in images"
                :key="i"
                :image="img"
            />
            </vueper-slides>
            <div class="image_list">
                <div class="image_in_image_list "
                v-for="(img, i) in images"
                :key="i"
                 >
                    <img :src="img" 
                        @click="$refs.myVueperSlides.goToSlide(i)"
                    >
                </div>
            </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
props:['images'],
components: {
    VueperSlides,
    VueperSlide
},
methods: {
    onSwiper(swiper) {
    console.log(swiper);
    },
    onSlideChange() {
    console.log('slide change');
    },
    close(){
        this.$store.dispatch('changeZoom', false);
    }, 
},
}
</script>

<style scoped>
#close{
    color: white;
    font-weight: 100;
    align-self: flex-end;
    margin-right: 10vw;
    cursor: pointer;
}
#close span{
    margin-right: 10px;
}
#parent{
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8) ;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 20;
}
    .slider{
        width: 80%;
        margin: 0;
    }
    .image_list{
        width: 100%;
        display: flex;
        row-gap: 5px;
        /* overflow-x: scroll; */
        /* overflow-y: hidden; */
        justify-content: center;
        margin-top: 30px;
        height: 10vh;
    }
    .image_in_image_list{
        width: 10%;
        margin-right: 5px;
        height: 100%;
    }

    .image_in_image_list img{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .image_in_image_list img:hover{
        cursor: pointer;
        transform: scale(1.05);
    }

::-webkit-scrollbar-track
{
  background-color: #F5F5F5;
}

::-webkit-scrollbar
{
  width: 10px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
  background-color: #F90; 
  background-image: -webkit-linear-gradient(45deg,
                                            rgba(255, 255, 255, .2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, .2) 50%,
                        rgba(255, 255, 255, .2) 75%,
                        transparent 75%,
                        transparent)
}


/*
 *  STYLE 7
 */




</style>