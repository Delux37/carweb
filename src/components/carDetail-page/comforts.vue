<template>
    <div id="wrapper">
        <div v-for="comfort in comfortList" :key="comfort" class="items">
            <div class="list">{{ comfort }}</div>
            <div class="mark">
                <i v-if="existItem(comfort)" class="exist fas fa-check"></i>
                <i v-else class="notExist fas fa-times"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['comforts'],
    data(){
        return {
            comfortList: [
                'Electric windows', 'Hydraulic', 'Rims', 'Seat heater',
                'Central lock', 'Board computer', 'Navigation system', 'Sunroof', 'Air conditioner',
                'ABS', 'anti-skid', 'Parking control', 'Rear view camera'
            ]
        }
    },
    methods: {
        existItem(item){
            return this.comforts.indexOf(item) != -1
        }
    }
}
</script>

<style scoped>
#wrapper{
    /* background-color: white; */
    
    width: 50%;
    /* height: 500px; */
}
.items{
    margin: 0 auto;
    padding: 10px 0;
    border: 0.5px solid rgb(160, 160, 160);
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.list{
    display: inline-block;
    margin-right: 5px;
}
.mark{
    display: inline-block;
    margin-right: 20%;
}
.exist{
    width: 20px;
    color: rgb(0,148,35);
}
.notExist{
   width: 20px;
   text-align: center;
   color: rgba(187, 44, 0, 0.637);
}

/* #4fbc6f */
</style>