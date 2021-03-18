<template>
    <div>
        <div id="container">
            <div class="input-control">
                <label for="email">Enter e-mail</label>
                <input placeholder="Email" type="email" id="email" v-model="email"/>
            </div>
            <div class="input-control">
                <label for="password">Enter your password</label>
                <input placeholder="password" type="password" id="password" v-model="password"/>
            </div>
            <div class="btn-container">
                <base-button mode="withBackground" class="first-btn" @toggleLogIn="auth">
                    <p v-if="mode === 'logIn'">Log in</p>
                    <p v-else>Sign up</p>
                </base-button>
                <base-button mode="noBackground" @toggleLogIn="toggleLogIn"
                >
                    <p v-if="mode === 'logIn' ">Sign up instead</p>
                    <p v-else>Log in instead</p>   
                </base-button>
            </div>
        </div>
    </div>
</template>

<script>
import baseButton from '../UI/BaseButton.vue'

export default{
    components: {
        baseButton,
    },
    data(){
        return {
            email: '',
            password: '',
            mode: 'logIn'
        }
    },
    methods: {
        auth() {
            try{
                if(this.mode === 'logIn'){
                    this.$store.dispatch('auth', {
                        email: this.email,
                        password: this.password,
                        mode: 'login',
                        router: this.$router
                    });                   
                }else{
                    this.$store.dispatch('auth', {
                        email: this.email,
                        password: this.password,
                        mode: 'signup'
                    });
                }
                // this.$router.replace('/')
            }catch(err){
                this.error = err.message || "Failed to authenticate, try later."

            }
        },
        toggleLogIn(){
            if(this.mode === 'logIn'){
                this.mode = 'signUp';
            }else{
                this.mode = 'logIn';
            }
        },
    }
}
</script>


<style scoped>
.first-btn{
    margin-right: 20px;
}
.btn-container{
    padding: 0 10%;
    display: flex;
    width: 80%;
    margin: 0 auto;    
}
.input-control{
    margin-top: 20px;
    width: 80%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.input-control label{
    display: block;
    text-align: center;
    color: grey;
    font-weight: 100;
}
.input-control input{
    width: 80%;
    margin: 0 auto;
    padding: 10px 15px;
    border-radius: 25px;
    border: 1px solid grey;
    outline: none;
}

#container{
    width: 50%;
    margin: 100px auto;
    background-color: #ecf0f1;
    padding: 30px 0;
    box-shadow: 12px 15px 15px 5px rgba(148, 148, 148, 0.425);
}
</style>