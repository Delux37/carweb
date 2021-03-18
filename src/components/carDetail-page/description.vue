<template>
    <div>
        <p id="type">{{ sellingType }} | <button id="btn" @click="addCar">Add to saved cars</button></p>
        <hr/>
        <p id="desc">{{ description }}</p>
    </div>
</template>

<script>
export default {
    props:['description', 'sellingType', 'carId', 'userId'],
    computed: {
        data() {
            return {
                userId: this.userId,
                carId: this.carId,
                token: this.$store.getters.token
            }
        }
    },
    methods: {
        addCar() {
            this.$store.dispatch('cart', this.data)
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