<template>
    <div id="nav">
        <div id="logo">
            <h1>carWebs</h1>
        </div>
        <nav>
            <ul id="main-nav">
                <li class="saved_container" v-if="isAuthenitcated">
                    <base-button link=true to="#" mode="saved">Saved</base-button>
                    <span id="saved">{{ savedLength }}</span>  
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
import baseButton from '../UI/BaseButton.vue';
import axios from 'axios'
export default {
    components:{
        baseButton
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
        }
    },
    mounted(){
        console.log(this.$store.getters.userId)
        axios.get(`https://carweb-797f8-default-rtdb.firebaseio.com/savedCars/${this.$store.getters.userId}.json?auth=` + this.$store.getters.token)
        .then((response) => {
           this.savedLength =  Object.keys(response.data).length
        }).catch(() => {
            this.savedLength = 0;
        });
    }

}
</script>


<style scoped>
.saved_container{
    position: relative;
}
#saved{
    position: absolute;
    right: 10px;
    top: -10px;
    font-size: 10px;
    background-color: rgb(0, 162, 255);
    color: white;
    border-radius: 50%;
    padding: 2px;
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