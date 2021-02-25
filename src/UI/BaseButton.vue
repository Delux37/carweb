<template>
    <div>
        <button :class="mode">
            <span v-if="mode==='default'"><i class="fas fa-plus-circle plus"></i></span>
            <span v-else><i class="fas fa-user-alt user"></i></span>
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style scoped>

button{
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

.user{
    color: rgb(255, 255, 255);
    margin-right: 7px;
}

.plus{
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
</style>