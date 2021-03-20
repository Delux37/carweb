<template>
    <div id="parent">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-body">
                <p v-if="notification">{{ notification }}</p>

                <!-- <slot name="body">
                  
                </slot> -->
              </div>

              <div class="modal-footer">
                  <button id="btn" @click="$emit('clickedClose')">Close</button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>

export default{
props: ['mode', 'msg'],
emits: ['clickedClose'],
computed: {
  notification() {
    //  console.log(this.$store.getters.notification)
    return this.$store.getters.notification
   
  }
}
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  background-color: #fff;
  padding: 5px;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.modal-footer{
    display: flex;
    justify-content: flex-end;
}

#btn{
    width: 20%;
    background-color: rgb(0, 119, 255);
    color: white;
    border-radius: 25px;
    outline: none;
    border: none;
    padding: 5px;
}
#btn:hover{
  cursor: pointer;
  background-color: rgb(0, 89, 190);
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}



</style>
