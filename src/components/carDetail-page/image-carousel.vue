<template>
    <div>
        <div class="slider_container" v-if="images">
            <vueper-slides class="slider" :touchable="false" fixed-height="500px" ref="myVueperSlides" :bullets="false">
                <vueper-slide 
                class="slides"
                @click.native="zoomIn"
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
                 <div class="element">
                         <!-- @mouseover="testImg(i)" -->
                        <!-- @mouseleave="hover = false" -->
                    <img :src="img" 

                        @click="$refs.myVueperSlides.goToSlide(i)"
                        >
                    <span class="counter">
                        {{ i + 1 }} / {{ images.length }}
                    </span>
                 </div>
                </div>
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
    zoomIn(){
        this.$store.dispatch('changeZoom', true)
    }, 
},
}
</script>

<style scoped>
    .slider_container{
        height: 30vh;
        position: relative;
        display: flex;
        width: 70%;
        margin: 20vh auto 0 auto;
        height: 500px;
        justify-content: space-between;
    }
    .slider{
        width: 80%;
        margin: 0;
    }
    .slides{
        cursor: zoom-in;
    }
    .image_list{
        width: 19%;
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .element{
        width: 100%;
        height: 100%;

    }
    .element:hover .counter{
        display: block;
    }
    .image_in_image_list{
        width: 100%;
        height: 15vh;
        display: flex;
        flex-direction: column;
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
    .counter{
        position: relative;
        background: rgb(255,140,91);
        background: linear-gradient(90deg, rgba(255,140,91,1) 0%, rgba(255,162,69,1) 35%, rgba(255,196,0,1) 100%);
        color: white;
        font-size: 10px;
        z-index: 2;
        bottom: 120px;
        left: 130px;
        width: fit-content;
        display: none;
    }


::-webkit-scrollbar-track
{
  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
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