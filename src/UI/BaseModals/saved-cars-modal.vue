<template>
    <div id="parent">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-head">
                <i class="fas fa-times" @click="close"></i>
              </div>

              <div class="modal-body" v-if="!isLoading">
                <item-card v-for="(car,index) in carList" :key="index"
                :image = car.image
                :brand = car.brand
                :location = car.location
                :price = car.price
                />
              </div>
              <div class="loader" v-else>
                
                <loading-spinner id="loading-spinner" />
              </div>


              <!-- <div class="modal-footer">
                  
              </div> -->
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
import itemCard from './item-card.vue'
import loadingSpinner from '../loading/loading-spinner.vue'
// brand image location price
export default{
  components: {
    itemCard,
    loadingSpinner
  },
  mounted(){
    this.$store.dispatch('toggleLoading', true)
    this.$store.dispatch('fetchSavedCars', this.$store.getters.savedCarsList);
  },
  computed:{
    carList(){
      return this.$store.getters.carList
    },
    isLoading(){
      return this.$store.getters.isLoading
    },
    currentLength(){
      return this.$store.getters.savedCarsList
    }
  },
  methods: {
    close(){
      this.$store.dispatch('toggleShown');
      this.$store.dispatch('clearCarList');
    }
  },
  watch:{
    carList(){
      if(Object.keys(this.carList).length === Object.keys(this.currentLength).length){
        this.$store.dispatch('toggleLoading', false)
      }
    }
  }
}
</script>

<style scoped>
.loader{
  height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
}
.modal-mask {
  position: fixed;
  z-index: 100;
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
  /* padding: 5px; */
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  height: 50vh;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
.modal-head{
  width: 100%;
  height: 5vh !important;
  background: linear-gradient(90deg, rgba(250,215,150,1) 0%, rgba(255,201,105,1) 49%, rgba(255,177,40,1) 100%);
  /* background-color: #fdcb6e; */
  margin-bottom: 20px;
  box-shadow: 5px 1px 5px 1px rgba(75, 75, 75, 0.534);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.modal-body{
  height: 40vh;
}
.modal-head i {
  color: white;
  margin-right: 15px;
}

.modal-head i:hover{
  cursor: pointer;
  color: grey;
}
/* .modal-footer{
    display: flex;
    justify-content: flex-end;
} */

/* #btn{
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
} */
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


::-webkit-scrollbar-track
{
  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
  background-color: #F5F5F5;
}

::-webkit-scrollbar
{
  width: 10px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
  background-color: #F90; 
  background-image: -webkit-linear-gradient(45deg,
                                            rgba(255, 255, 255, .2) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(255, 255, 255, .2) 50%,
                        rgba(255, 255, 255, .2) 75%,
                        transparent 75%,
                        transparent)
}
</style>
