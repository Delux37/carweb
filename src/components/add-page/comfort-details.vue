<template>
    <div class="wrapper">
        <header>
            <p>Car comforts</p>
        </header> 
        <div id="container">
            <div class="left-container">
                <div class="form-group diff">
                    <p>Steering:</p>
                    <input type="radio" name="steering-wheel" id="left-steering"/>
                    <label for="left-steering">Left</label>
                    <input type="radio" name="steering-wheel" id="right-steering"/>
                    <label for="right-steering">Right</label>
                </div>
                <div class="form-group diff">
                    <p>Selling type:</p>
                    <input type="radio" name="selling-type" id="selling"/>
                    <label for="selling">Selling</label>
                    <input type="radio" name="selling-type" id="for-rent"/>
                    <label for="for-rent">For rent</label>
                </div>
                <div class="form-group">
                    <input type="checkbox" id="electric-windows" value="Electric windows">
                    <label for="electric-windows">El. windows</label>
                </div>
                <div class="form-group">
                    <input type="checkbox" id="hydraulic" value="Hydraulic">
                    <label for="hydraulic">Hydraulic</label>
                </div>
                <div class="form-group">
                    <input type="checkbox" id="rims" value="Rims">
                    <label for="rims">Rims</label>
                </div>
            </div>
            <div class="right-container">
                <div class="form-control">
                    <input type="checkbox" id="seat-heater" value="seat-heater"/>
                    <label for="seat-heater">Seat heater</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="central-lock" value="seat-heater"/>
                    <label for="central-lock">Central-lock</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="alarm" value="seat-heater"/>
                    <label for="alarm">alarm</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="board-computer" value="seat-heater"/>
                    <label for="board-computer">Board computer</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="navigation-system" value="seat-heater"/>
                    <label for="navigation-systemr">Navigation-system</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="seat-heater" value="seat-heater"/>
                    <label for="seat-heater">Seat heater</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="air-conditioner" value="seat-heater"/>
                    <label for="air-conditioner">Air conditioner</label>
                </div>
                        <div class="form-control">
                    <input type="checkbox" id="abs" value="ABS"/>
                    <label for="abs">ABS</label>
                </div>
                <div class="form-control">
                    <input type="checkbox" id="anti-skid" value="Antiskid"/>
                    <label for="seat-heater">Seat heater</label>
                </div>
                <div class="form-control">
                    <input type="checkbox" id="parking-control" value="Parking control" v-model="testArr"/>
                    <label for="parking-control">Parking control</label>
                </div>
                <div class="form-control">
                    <input type="checkbox" id="rear-view-camera" value="Rear view camera" v-model="testArr"/>
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
            testArr: []
        }
    },
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