<template functional>
    <div class="ellipse" :class="props.wrapperClass">
        <div class="innerEllipse num1 allCenter"
        :style="{
            backgroundColor:props.color+'0.8)'
        }"></div>
        <div class="innerEllipse num2 allCenter"
        :style="{
        backgroundColor:props.color+'0.7)'
        }"></div>
        <div class="innerEllipse num3 allCenter"
        :style="{
            backgroundColor:props.color+'0.6)'
        }"></div>
        <div class="innerEllipse num4 allCenter"
        :style="{
        backgroundColor:props.color+'0.5)'
        }"></div>
<!--        <div class="light aCenter"></div>-->
<!--        <div class="light-horizontal allCenter"></div>-->
        <div class="mostInner allCenter"
          :style="{
        backgroundColor:props.color+'0.9)'
        }"></div>
    </div>
</template>

<script>
    export default {
        props:{
            color:{
                default:' rgba(255, 255, 0,'
            },
            wrapperClass:String
        },
        name: "ripples"
    }
</script>

<style scoped>
     .ellipse .innerEllipse {
        width: 0.6vw;
        height: 0.35vw;
        border-radius: 50%;
        animation: ellipse 4s infinite;
    }

     .ellipse .num1 {
        /*background: rgba(255, 255, 0, .8);*/
    }

     .ellipse .num2 {
        animation-delay: 1s;
        /*background: rgba(255, 255, 0, .7);*/
    }

     .ellipse .num3 {
        animation-delay: 2s;
        /*background: rgba(255, 255, 0, .6);*/
    }

     .ellipse .num4 {
        animation-delay: 3s;
        /*background: rgba(255, 255, 0, .5);*/
    }

     .ellipse .light {
        top: -1.8vh;
        width: 0.15vw;
        height: 4vh;
        background-image: linear-gradient(0deg, rgba(228, 255, 0, 1) 0%, rgba(228, 255, 0, 0) 100%);
    }

     .ellipse .light-horizontal {
        width: 1vw;
        height: 0.1vw;
        background: linear-gradient(to right, rgba(228, 255, 0, 0), rgba(228, 255, 0, .5), rgba(228, 255, 0, 0));
        animation: spin 4s linear infinite;
    }

     .ellipse .mostInner {
         border-radius: 50%;
        width: 0.2vw;
        height: 0.2vw;
    }

    @keyframes ellipse {
        from {
            opacity: 1;
            border-color: rgba(255, 255, 0, .8);
            transform: scale(1);
        }

        to {
            opacity: 0;
            border-color: rgba(255, 255, 0, .2);
            transform: scale(6);
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
</style>
