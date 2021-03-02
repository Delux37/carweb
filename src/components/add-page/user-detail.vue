<template>
    <div class="wrapper">
        <header>
            <p>User detail</p>
        </header>
        <div class="container">
            <div class="left-container">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name"/>
                </div>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="number" id="phone"/>
                </div>
            </div>
            <div class="right-container">
                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" id="location"/>
                </div>
                <div class="form-group">
                    <label for="custom">Customs:</label>
                    <select id="custom" class="select">
                        <option>Before custom</option>
                        <option>After custom</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    header{
        margin-bottom: 10px;
        color: #ffbe46;
    }
    .wrapper{
        width: 80%;
        margin: 100px auto;
    }
    .container{
        border-top: 1px dotted black;
        border-bottom: 1px dotted black;
        display: flex;
        justify-content: space-around;
    }
    .left-container{
        width: 30%
    }
    .right-container{
        width: 30%;
    }
    .form-group label{
        display: block;
    }
    .form-group input{
        width: 100%;
        padding: 5px;
    }
    .form-group .select{
        width: 100%;
        padding: 5px;
    }

    .form-group{
        margin-top: 15px;
        margin-bottom: 30px;
    }
</style>

<script>
export default {
    
}
</script>

