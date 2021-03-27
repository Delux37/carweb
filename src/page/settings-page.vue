<template>
    <div id="wrapper">
        <div id="settings-list">
            <ul>
                <li><router-link to="/settings/my-cars">My cars</router-link></li>
                <li><router-link to="/settings/saved-cars">My saved cars</router-link></li>
                <li><router-link to="/settings/balance">Balance</router-link></li>
                <li><router-link to=#>Additional settings</router-link></li>
                
            </ul>
        </div>
        <div id="content-div">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#wrapper{
   width: 70%;
   margin: 10vh auto 0 auto;
   display: flex;
   justify-content: space-between;
}
ul{
    background-color: white;
    list-style: none;
    font-weight: 100;
    font-size: 20px;
    box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.075); 
    border-radius: 15px;
    /* padding: 0 10px; */
    overflow: hidden;
}
li{
    /* margin-bottom: 20px; */
    padding: 20px 0 20px 10px;
    border-top: 1px solid rgb(214, 214, 214);
    border-bottom: 1px solid rgb(214, 214, 214);
}
li:hover{
    background-color: rgb(211, 211, 211);
    cursor: pointer;
}
a{
    text-decoration: none;
    color: rgb(53, 53, 53);
}
#settings-list{
    width: 28%;
}
#content-div{
    width: 70%;
    bordeR: 2px solid blue;
}
</style>