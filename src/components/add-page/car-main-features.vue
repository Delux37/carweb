<template>
    <div class="wrapper">
        <header>
            <p>Car main fetaures</p>
        </header>
        <div class="container">
            <div class="left-container">
                <div class="form-control">
                    <label for="category">Category:</label>
                    <select id="category" class="select">
                        <option></option>
                        <option>Sedan</option>
                        <option>SUV</option>
                        <option>Coupe</option>
                        <option>Hatchback</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="model">Model:</label>
                    <input id = "model" type="text"/>
                </div>
                <div class="form-control">
                    <label for="brand">Brand:</label>
                    <input id = "Brand" type="text"/>
                </div>
                <div class="form-control">
                    <label for="year">Year:</label>
                    <select id="year" class="select">
                        <option class="testOption"></option>
                        <option v-for="index in 30" :key="index">
                            {{ index + 1991}}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="milage">Milage:</label>
                    <input id="milage" type="text"/>
                </div>
                <div class="form-group">
                    <label for="vin">Vin code:</label>
                    <input id="vin" type="text"/>
                </div>
                <div class="form-control">
                    <label for="transmission">Transmission:</label>
                    <select id="transmission" class="select">
                        <option></option>
                        <option>Manual</option>
                        <option>Automatic</option>
                        <option>Tiptronic</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="engine-size" >Engine-size:</label>
                    <select id="engine-size" class="select">
                        <option></option>
                        <option v-for="index in 50" :key = index>
                            {{ index / 10. }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="right-container" >
                <div class="form-control">
                    <label for="cylinder">Cylinder:</label>
                    <select id="cylinder" class="select">
                        <option></option>
                        <option v-for="index in 12" :key="index">
                            {{  index  }}
                        </option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="door-amount">Door:</label>
                    <select id="door-amount" class="select"> 
                        <option></option>
                        <option>4/5</option>
                        <option>2/3</option>
                        <option>5+</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="fuel-type">Fuel type:</label>
                    <select id="fuel-type" class="select">
                        <option></option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>Hybrod</option>
                        <option>Diesel</option>
                        <option>CNG</option>
                        <option>LPG</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="drive-wheels">Drive wheels:</label>
                    <select id="drive-wheels" class="select">
                        <option></option>
                        <option>FWD</option>
                        <option>RWD</option>
                        <option>AWD</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="color">Color:</label>
                    <input type="text" id="color"/>
                </div>
                <div class="form-control">
                    <label for="interior-color">Interior color:</label>
                    <input type="text" id="interior-color"/>
                </div>
                <div class="form-control">
                    <label for="interior-material">Interior material:</label>
                    <input type="text" ud="interior-material"/>
                </div>
                <div class="form-control">
                    <label for="airbags">Airbags:</label>
                    <select id="airbags" class="select">
                        <option v-for="index in 12" :key="index">
                            {{ index }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
header{
    width: 30%;
    color: #ffbe46;
    margin-bottom: 10px;
    /* border-top: 1px solid rgb(124, 124, 124); */
    /* border-bottom: 1px solid rgb(124, 124, 124); */
}
.wrapper{
    width: 80%;       
    margin: 150px auto;
}
.container{
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    border-top: 1px dotted black;
    border-bottom: 1px dotted black;
}
label{
    display: block;
    margin-top: 15px;
    font-size: 16px;
    font-weight: 100;
    color: rgba(83, 83, 83, 0.671);
}


input,
.select{
    width: 100%;
    outline: none;
    border: 1px dotted black;
    padding: 5px 3px
}
.left-container{
    padding: 10px;
    width: 30%;
}
.right-container{
    width: 30%;
    padding: 10px;
    /* margin-left: 150px; */
}


</style>

