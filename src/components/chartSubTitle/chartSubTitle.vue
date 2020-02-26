<template functional>
    <title>
        <span class="text">{{props.title}}</span>
        <span class="icon iconfont icon-verticalLine"></span>
        <span class="line"></span>
    </title>
</template>

<script>
    export default {
        name: "chartSubTitle",
        props:{
            title:String
        }
    }
</script>

<style scoped lang="scss">
title{
    display: flex;
    width: 100%;
    padding-left: 0.5vw;
    padding-right: 0.6vw;
    height: 0.8vw;
    span{
        float: left;
        white-space: nowrap;
    }
    .text{
        font-size: 0.7vw;
        line-height: 0.8vw;
        color: #fff;
    }
    .icon{
        font-size: 0.6vw;
        line-height: 0.8vw;
        color: #00f0ff;
        margin-left: 0.4vw;
    }
    .line{
        height: 100%;
        flex-grow: 1;
        /*border-bottom: 0.0625vw #00f0ff solid;*/
        border-bottom: 0.0625vw rgba(0, 240, 255, 0.25) solid;
        /*background-color: #00f0ff;*/
        margin-left: 0.3vw;
        margin-right: 0.3vw;
        /*height: 0.062vw;*/

    }
}
</style>
