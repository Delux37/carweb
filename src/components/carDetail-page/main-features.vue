<template>
    <div class="wrapper" >
        <div v-for="(item,index) in objKeys" :key="index" class="items">
            <div class="list">{{ item  }}</div>
            <div class="mark">{{  mainFeatures[item] }}</div>
        </div>
        <div class="items">
            <div class="list">Steering Wheel</div>
            <div class="mark">{{ steeringWheelSide }}</div>
        </div>
    </div>
</template>

<script>
export default {
props: ['mainFeatures', 'steeringWheelSide'],
data() {
    return {
        objKeys: []
    }
},
mounted(){
    this.objKeys = Object.keys(this.mainFeatures)
    const myRegex = /[A-Z]/g
    for(const key in this.objKeys){
        if(myRegex.test(this.objKeys[key])){
            this.objKeys[key].replace(myRegex, ' ')
        }
    }
}
}


</script>



<style scoped>
.wrapper{
    /* background-color: white; */
    width: 50%;
    /* height: 500px; */
}
.items{
    margin: 0 auto;
    padding: 10px 0;
    bordeR: 0.5px solid rgb(160, 160, 160);
    width: 100%;
    display: flex;
    justify-content: center;
}
.list{
    display: inline-block;
    font-size: 20px;
    color: rgb(54, 54, 54);
    margin-right: 5px;
    font-weight: 100;
}
.mark{
    display: inline-block;
    font-size: 20px;
    
}
/* .exist{
    width: 20px;
    color: rgb(0,148,35);
}
.notExist{
   width: 20px;
   text-align: center;
   color: rgba(187, 44, 0, 0.637);
} */

</style>