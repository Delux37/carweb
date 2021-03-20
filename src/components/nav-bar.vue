<template>
    <div id="nav">
        <div id="logo-container" @click="goHomePage">
            <img id="logo" src="../img/carWeb.png" />
        </div>
        <nav>
            <ul id="main-nav">
                <li class="saved_container" v-if="isAuthenitcated">
                    <savedCars />
                </li>
                <li><base-button link=true :to="checkAuth" mode="default">Add</base-button></li>
                <li v-if="!isAuthenitcated">
                    <base-button mode="flat" link=true to="/authentication">Log in</base-button>
                </li>
                <li v-else>
                    <base-button mode="flat" @toggleLogIn="logOut">Log out</base-button>
                </li>
                <li id="menu"><i class="fas fa-bars hamburger">
                    <div id="drop-down">
                    <ul>
                        <li>Contact</li>
                    </ul>
                </div>
                </i>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import baseButton from '../UI/BaseModals/BaseButton.vue'
import savedCars from './nav-bar/saved-cars.vue'
export default {
    components:{
        baseButton,
        savedCars
    },
    data() {
        return {
            savedLength: null
      }
    },
    computed: {
        checkAuth(){
            if(this.$store.getters.isAuthenticated){
                return '/add'
            }else {
                return '/authentication'
            }
        },
        isAuthenitcated(){
            return this.$store.getters.isAuthenticated
        },
    },    
    methods: {
        logOut(){
            this.$store.dispatch('logout')
        },
        goHomePage(){
            this.$router.replace('/')
        },
    },
}
</script>


<style scoped>
.saved_container{
    position: relative;
}
#menu:hover #drop-down{
    display: block;
}
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
    z-index: 10;
}

#logo-container{
    height: 70%;
    border-radius: 25px;
    margin-left: 15px;
    background-color: rgb(231, 231, 231);
    width: 15%;
    display: flex;
    justify-content: center;
    box-shadow: 5px 5px 5px 2px rgba(78, 78, 78, 0.438)
}
#logo-container:hover{
    cursor: pointer;
    background-color: rgb(184, 184, 184)
}

#logo{
    width: auto;
    height: 100%;
    margin: 0 auto;
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