<template>
    <div>
        <div class="wrapper" @click="test">
            <div class="image">
                <img :src="image"/>
            </div>
            <div class="model">
                <h2>{{ brand }}</h2>
            </div>
            <div class="location">
                <h3>{{ location }}</h3>
            </div>
            <div class="price">
                <h3>{{ price }}$</h3>
            </div>
        </div>
        <div class="hide" :class="{show: isActive}">
            <button class="view"><i class="fa fa-trash" aria-hidden="true"></i>
 View car</button>
            <button class="delete"><i class="fas fa-eye"></i>

Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['price', 'location', 'brand', 'image'],
    data() {
        return {
            isActive: false
        }
    },
    methods:{
        test(){
            this.isActive=true
        }
    }
    
}
</script>


<style scoped>
button{
    outline: none;
    border: none;
    margin-right: 20px;
    padding: 5px;
    border-radius: 25px;
    background-color: white;
}
button:hover{
    cursor: pointer;
}
.view{
    border: 1px solid rgb(0, 204, 0);
    color: rgb(0, 204, 0);
}
.delete{
    border: 1px solid rgb(204, 0, 0);
    color: rgb(204, 0, 0);
}
.hide{
    display: none;
    margin: -20px 10px 10px 10px;
}
.show{
    display: block;
}
.wrapper{
    display: flex;
    justify-content: space-between;
    height: 15vh;
    /* padding: 5px 10px; */
    margin: 0 10px 20px 10px;
}
.wrapper:hover{
    cursor: pointer;
    background-color: rgb(170, 170, 170);
}
.image{
    width: 25%;
    height: 100%;
}
.image img{
    width: 100%;
    height: 100%;
}
.model,
.price{
    width: 20%;
    display: flex;
    align-items: center;
}
.location{
    width: 15%;
    display: flex;
    align-items: center;
}
.model h2{
    font-size: 20px;
    color: rgb(71, 71, 71);
}
.location h3{
    font-weight: 100;
}
.price h3{
    color: #fdcb6e;
}

</style>