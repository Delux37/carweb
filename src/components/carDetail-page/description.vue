<template>
    <div>
        <baseInfo v-if="isNotified" v-scroll-lock="false" @clickedClose="clickedClose">
            <!-- <h3 slot="body">Added to car search succesfully !</h3> -->
        </baseInfo>
        <p id="type">{{ sellingType }} | <button id="btn" @click="addCar">Add to saved cars</button></p>
        <hr/>
        <p id="desc">{{ description }}</p>
    </div>
</template>

<script>
import BaseInfo from '../../UI/BaseInfo.vue'

export default {
    components: {
        BaseInfo
    },
    props:['description', 'sellingType', 'carId', 'userId'],
    data() {
        return {
            msg: "Added to search succesfully ! :))",
            data: {
                carId: this.carId,
                carOwnerUserId: this.userId,
                userId: this.$store.getters.userId,
                token: this.$store.getters.token
            }
        }
    },
    computed: {
        isNotified(){
            return this.$store.getters.isNotified;
        }
    },
    methods: {
        addCar() {
            this.$store.dispatch('cart', this.data)
        },
        clickedClose(){
            this.$store.dispatch('toggleModal', false)   
        }
    }
}
</script>

<style scoped>
div{
    width: 70%;
    margin: 0 auto;
    background-color: white;
}
#btn{
    outline: none;
    font-size: 16px;
    color: white;
    border-radius: 25px;
    border: 3px solid #fdcb6e;
    background-color: #fdcb6e;
    padding: 5px;
    margin-top: 2px;
}
#btn:hover{
    cursor: pointer;
    background-color: white;
    color: #fdcb6e;
}
#type{
    margin-bottom: 5px;
    margin-top: 30px;
    text-align: center;
}
#desc{
    font-weight: 100;
    font-size: 16px;
    margin-top: 10px;
}
</style>