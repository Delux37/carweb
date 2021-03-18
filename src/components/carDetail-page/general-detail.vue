<template>
    <div id="parent">
        <div class="left-section">
            <h1>{{ price }}</h1>
            <p class="valute">Dollars</p>
            <div id="custom-wrapper">
                <p :class="{custom: isCustom, noCustom: !isCustom}">
                    {{ info.userDetail.custom }}
                </p>
            </div>
        </div>
        <div class="right-section">
            <info-card id="first">
                <div id="userInfo">{{ info.userDetail.name[0] }}</div>
                <p>{{ info.userDetail.name  }}</p>
            </info-card>
            <info-card id="second">
                <i class="fas fa-phone-alt"></i>
                <p>{{ info.userDetail.phone }}</p>
            </info-card>
            <info-card id="third">
                <i class="fas fa-map-marker-alt"></i>
                <p>{{ info.userDetail.location }}</p>
            </info-card>
            <info-card id="fourth">
                <i class="fas fa-paper-plane"></i>
                <p>Contact</p>
            </info-card>
        </div>
    </div>
</template>


<script>
import infoCard from '../../UI/info-card'
export default {
props: ['info'],
components:{
    infoCard
},
computed:{
    price(){
        return this.info.price + '$'
    },
    isCustom(){
        return this.info.userDetail.custom === 'After custom'
    }
}
}


</script>

<style scoped>
i, #userInfo {
    margin-right: 5px;
}
#first,
#second,
#third,
#fourth{
    width: fit-content;
    padding: 0 10px;
    display: flex;
    align-items: center;
}
#second{
    color: #55efc4;
}

#custom-wrapper{
    background-color: rgb(221, 221, 221);
    width: fit-content;
    margin: 0 auto;
    border-radius: 10px;
    padding: 2px;
}
.custom{
    color: #55efc4;
}
.noCustom{
    color: red;
}
#parent{
    width: 70%;
    margin: 0 auto;
    margin-top: 10px;
    height: 15vh;
    display: flex;
    justify-content: space-between;
}
h1{
    font-size: 32px;
    color: orange;
}
.valute{
    font-style: italic;
    color: rgb(78, 78, 78);
    margin-top: -10px;
    /* font-weight: 100; */
}
.left-section{
    width: 25%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
}
.right-section{
    width: 70%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
#userInfo{
    background-color: orange;
    width: 70px;
    height: 70px;
    font-size: 30px;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}
</style>