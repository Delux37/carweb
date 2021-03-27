<template>
    <div id="test">
        <editCar v-if="data" isComponent="true"></editCar>
        <div v-else><h1> LOADING</h1></div>
    </div>
</template>

<script>
import editCar from '../../add.vue'
export default {
    computed: {
        carId(){
            return this.$route.params.carId
        },
        data(){
            return this.$store.getters.editPageData
        },
    },
    mounted(){
        this.$store.dispatch('fetchEditPageDetail', {
            carId: this.carId,
            userId: this.$store.getters.userId
        })
    },
    destroyed(){
        this.$store.dispatch('clearEditPageData');
    },
    components: {
        editCar
    }
}
</script>

<style scoped>
</style>