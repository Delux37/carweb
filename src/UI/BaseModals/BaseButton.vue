<template>
    <div>
        <button :class="mode" @click="clicked" v-if="!link">
            <span v-if="mode==='default'"><i class="fas fa-plus-circle plus"></i></span>
            <span v-else-if="mode==='flat'"><i class="fas fa-user-alt user"></i></span>
            <span v-else-if="mode==='submit'"><i class="far fa-paper-plane"></i></span>
            <span v-else-if="mode==='saved'"><i class="fas fa-save save"></i></span>
            <slot></slot>
        </button>
        <router-link v-else :to = "to" :class="mode">
            <span v-if="mode==='default'"><i class="fas fa-plus-circle plus"></i></span>
            <span v-else-if="mode==='flat'"><i class="fas fa-user-alt user"></i></span>
            <slot></slot>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['mode', 'link', 'to'],
    methods: {
        clicked(){
           this.$emit('toggleLogIn')
        },
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: white;
}
button,
a{
    background: none;
    outline: none;
    border: none;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 700;
    color: rgb(61, 61, 61);
    border-radius: 15px;
    padding: 5px 10px;
    cursor: pointer;
    /* box-shadow: 1px 1px 1px 1px rgba(192, 192, 192, 0.411); */
}

.withBackground{
    background-color: #d4a44a;
    color: white;
    font-weight: 100;
}

.noBackground,
.submit{
    border: 2px solid #d4a44a;
    color: #d4a44a;
    font-weight: 100;
}

.user{
    color: rgb(255, 255, 255);
    margin-right: 7px;
}

.plus,
.save{
    color: orange;
    margin-right: 3px;
}
.default{
    background-color: white;
    border: 1px solid rgb(192, 192, 192);
}
.flat{
    background-color: #d4a44a;
    color: white;
    border: 1px solid #fdcb6e;
}
.saved{
    background-color: white;
    border: 1px solid rgb(192, 192, 192);
}

.submit{
   padding: 10px 30px;
   color: black
}
</style>