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
                <li v-else id="dropdown-list-item">
                    <div id="dropdown">
                        <div>
                            <i class="fas fa-user-alt user"></i>
                        </div>
                    </div>
                    <span>My page</span>
                    <i class="fas fa-caret-down"></i>
                    <transition name="dropdown">
                        <ul id="dropdown-menu">
                            <li><router-link to="/settings/my-cars">My cars</router-link></li>
                            <li><router-link to="/settings/saved-cars">My saved cars</router-link></li>
                            <li><router-link to="/settings/balance">Balance</router-link></li>
                            <li><router-link to="/settings/user-settings">User settings</router-link></li>
                            <hr/>
                            <li><p @click="logOut">Log out</p></li>
                        </ul>
                    </transition>
                    <!-- <base-button mode="flat" @toggleLogIn="logOut">Log out</base-button> -->
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
a{
    text-decoration: none;
    color: black;
}
li p {
    margin-bottom: 5px;
}

#dropdown-menu{
    display: none;
    position: absolute;
    background-color: white;
    border-radius: 5px;
    top: 55px;
    right: 0;
    width: 100%;
    font-weight: 100;
}
#dropdown-menu li{
    width: 100%;
    list-style: none;
    padding-left: 5px;
}
#dropdown-menu li:hover{
    background-color: rgb(204, 204, 204);
}


#dropdown-list-item{
    display: flex;
    column-gap: 5px;
    position: relative;
}
#dropdown-list-item:hover{
    cursor: pointer;
}
#dropdown-list-item:hover #dropdown-menu{
    display: flex;
    flex-direction: column;
    row-gap: 5px;
}
#dropdown{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.user{
    width: 100%;
    height: 100%;
    color: white;
    font-size: 40px;
}

.saved_container{
    position: relative;
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

#main-nav > li{
    display: inline-block;
    margin-left: 15px;
    display: flex;
    align-items: center;
}


</style>