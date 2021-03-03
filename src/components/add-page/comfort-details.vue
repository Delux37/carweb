<template>
    <div class="wrapper">
        <header>
            <p>Car comforts</p>
        </header> 
        <div id="container">
            <div class="left-container">
                <div class="form-group diff">
                    <p>Steering:</p>
                    <input type="radio" name="steering-wheel" id="left-steering" value="Left" v-model="carComfortDetails.steeringWheelSide"/>
                    <label for="left-steering">Left</label>
                    <input type="radio" name="steering-wheel" id="right-steering" value="Right" v-model="carComfortDetails.steeringWheelSide"/>
                    <label for="right-steering">Right</label>
                </div>
                <div class="form-group diff">
                    <p>Selling type:</p>
                    <input type="radio" name="selling-type" id="selling" value="Selling" v-model="carComfortDetails.sellingType"/>
                    <label for="selling">Selling</label>
                    <input type="radio" name="selling-type" id="for-rent" value="For rent" v-model="carComfortDetails.sellingType"/>
                    <label for="for-rent">For rent</label>
                </div>
                <div class="form-group">
                    <input type="checkbox" id="electric-windows" value="Electric windows" v-model="carComfortDetails.comforts">
                    <label for="electric-windows">El. windows</label>
                </div>
                <div class="form-group">
                    <input type="checkbox" id="hydraulic" value="Hydraulic" v-model="carComfortDetails.comforts">
                    <label for="hydraulic">Hydraulic</label>
                </div>
                <div class="form-group">
                    <input type="checkbox" id="rims" value="Rims" v-model="carComfortDetails.comforts">
                    <label for="rims">Rims</label>
                </div>
            </div>
            <div class="right-container">
                <div class="form-control">
                    <input type="checkbox" id="seat-heater" value="Seat heater" v-model="carComfortDetails.comforts"/>
                    <label for="seat-heater">Seat heater</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="central-lock" value="Central lock" v-model="carComfortDetails.comforts"/>
                    <label for="central-lock">Central-lock</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="alarm" value="Alarm" v-model="carComfortDetails.comforts"/>
                    <label for="alarm">alarm</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="board-computer" value="Board computer" v-model="carComfortDetails.comforts"/>
                    <label for="board-computer">Board computer</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="navigation-system" value="Navigation system" v-model="carComfortDetails.comforts"/>
                    <label for="navigation-systemr">Navigation-system</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="sunroof" value="Sunroof" v-model="carComfortDetails.comforts"/>
                    <label for="seat-heater">Sunroof</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="air-conditioner" value="Air conditioner" v-model="carComfortDetails.comforts"/>
                    <label for="air-conditioner">Air conditioner</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="abs" value="ABS" v-model="carComfortDetails.comforts"/>
                    <label for="abs">ABS</label>
                </div>
                <div class="form-control">
                    <input type="checkbox" id="anti-skid" value="Antiskid" v-model="carComfortDetails.comforts"/>
                    <label for="seat-heater">Seat heater</label>
                </div>
                <div class="form-control">
                    <input type="checkbox" id="parking-control" value="Parking control" v-model="carComfortDetails.comforts"/>
                    <label for="parking-control">Parking control</label>
                </div>
                <div class="form-control">
                    <input type="checkbox" id="rear-view-camera" value="Rear view camera" v-model="carComfortDetails.comforts"/>
                    <label for="rear-view-camera">Rear view camera</label>
                </div>       
            </div>
        </div> 
    </div>   
</template>

<script>
export default {
    data(){
        return {
            carComfortDetails: {
                steeringWheelSide: null,
                sellingType: null,
                comforts: [],
            }
        }
    },
    computed: {
        carComfs() {
            this.$emit("clicked", this.carComfortDetails)
            return this.carComfortDetails
        },
    },
    watch: {
        carComfs(){}
    }
}
</script>

<style scoped>
header p{
    color: #ffbe46;
    margin-bottom: 10px;
}
.wrapper{
    width: 80%;
    margin: 0 auto;
}
#container{
    border-top: 1px dotted black;
    border-bottom: 1px dotted black;
    padding: 20px 0;
    display: flex;
    margin-bottom: 200px;
    justify-content: space-around;
}
.left-container{
    width: 30%;
}
.right-container{
    width: 30%;
}
.form-group,
.form-control{
    margin-top: 5px;
}
.diff{
    height: 20%;
    border: 1px solid rgb(141, 141, 141);
    border-radius: 15px;
    margin-bottom: 25px;
    padding: 0 10px;
}
.diff p{
    font-weight: 100;
    font-size: 12px;
    width: fit-content;
    position: relative;
    top: -10px;
    left: 10px;
    background-color: rgb(235, 235, 235);
}

.diff label{
    margin-right: 15px;
}
.form-control input{
    margin-right: 5px;
}
.form-group input{
    margin-right: 5px;
}
</style>