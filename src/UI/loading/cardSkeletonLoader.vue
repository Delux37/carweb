<template>
    <div class="item-card">
        <div class="img-container"></div>
        <div class="content-container">
            <p class="first-title"><span id="span1"> </span> <span id="span2"> </span></p>
            <h2> </h2>
            <p class="tags">
            </p>
            <h3> </h3>
        </div>
        <!-- <img :src="carImage"/> -->
    </div>
</template>

<style scoped>
.first-title{
    /* background-color: #b2bec3 */
    width: 50%;
        background: linear-gradient(90deg, #d3d3d3, #fff, #d3d3d3);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
}
#span1,
#span2{
    margin-right: 10px;
    border-radius: 15px;
    width: 20px;
    /* margin-left: 10px; */
    height: 10px;
        background: linear-gradient(90deg, #d3d3d3, #fff, #d3d3d3);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
}

h2{
    position: relative;
    margin-top: -15px;
    width: 30%;
       background: linear-gradient(90deg, #d3d3d3, #fff, #d3d3d3);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
    height: 20px;
}
h3{
    width: 70%;
        background: linear-gradient(90deg, #d3d3d3, #fff, #d3d3d3);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
    height: 23px;
}
.tags{
    width: 70%;
    height: 20px;
    /* background-color: #b2bec3; */
        background: linear-gradient(90deg, #d3d3d3, #fff, #d3d3d3);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
}
.item-card{
    border-radius: 10px;
    width: 23%;
    height: 400px;
    background-color: #fff;
}

/* 1. */
.img-container{
    width: 100%;
    height: 60%;
    /* animation: pulse 1s infinite; */
    /* animation: pulse-bg 1s infinte; */
    background-size: 300px 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;

    background: linear-gradient(90deg, #d3d3d3, #fff, #d3d3d3);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
}

.content-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
    height: 40%;
    padding-left: 10px;
}
@keyframes pulse{
    0% {
        background-color: rgb(209, 209, 209);
        /* background: rgb(255,255,255);
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(149,149,149,1) 50%, rgba(97,97,97,1) 100%); */
    }
    50% {
        background-color: #c4c4c4;
        /* background: rgb(149,149,149);
        background: linear-gradient(90deg, rgba(149,149,149,1) 0%, rgba(255,255,255,1) 50%, rgba(97,97,97,1) 100%); */
    }
    100% {
        background-color: rgb(209, 209, 209);
        /* background: rgb(149,149,149);
        background: linear-gradient(90deg, rgba(149,149,149,1) 0%, rgba(149,149,149,1) 50%, rgba(255,255,255,1) 100%); */
    }
}


@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>