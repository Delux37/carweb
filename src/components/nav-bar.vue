<template>
    <div id="nav">
        <div id="logo">
            <h1>carWebs</h1>
        </div>
        <nav>
            <ul id="main-nav">
                <li><base-button mode="default">Add</base-button></li>
                <li><base-button mode="flat">Log in</base-button></li>
                <li><i class="fas fa-bars hamburger"></i>
                <div id="drop-down">
                    <ul>
                        <li>Contact</li>
                    </ul>
                </div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import baseButton from '../UI/BaseButton.vue';
export default {
    components:{
        baseButton
    }
    
}
</script>


<style scoped>
#nav{
    width: 100%;
    height: 8vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fdcb6e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 10px 2px rgba(77, 77, 77, 0.671);
}

#logo{
    padding: 0 5px;
    height: 70%;
    border-radius: 25px;
    background-color: #dfe6e9;
    margin-left: 15px;
}

h1{
    /* padding : 10px; */
    color: #74b9ff;
    height: 100%;
}

#main-nav{
    display: flex;
    list-style: none;
    margin-right: 15px;
}

#main-nav li{
    display: inline-block;
    margin-left: 15px;
    display: flex;
    align-items: center;
}

#drop-down{
    background-color: white;
    position: absolute;
    border-radius: 15px;
    width: 10%;
    height: 200px;
    right: 1vh;
    top: 8vh;
    display: none;
}

.hamburger:hover{
    cursor: pointer;
}
</style>