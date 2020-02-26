<template>
  <div class="header">
    <span class="allCenter centerTitle">    智慧产业园区领导驾驶舱数据可视化平台
</span>
      <div class="weatherInfo">
          <div class="item temperature">
              <span class="icon iconfont icon-weather"></span>
              <span class="text">18℃</span>
              <span class="line"></span>
          </div>
          <div class="item humidity">
              <span class="icon iconfont icon-humidity"></span>
              <span class="text">61%</span>
              <span class="line"></span>
      </div>
      <div class="item pm25">
        <span class="icon iconfont icon-pm25"></span>
        <span class="text">41优</span>
      </div>
    </div>
    <div class="rightSide">
      <span class="cityName">深圳</span>
      <span class="line"></span>
      <span class="time">{{date}} {{nowTime}}</span>
    </div>
  </div>
</template>
<script>
import { timeFormatter } from "@/assets/app/js/util";
export default {
  name: "customerHeader",
  data() {
    return {
      timer: null,
      date: "00:00:00",
      nowTime: "2020/01/01"
    };
  },
  beforeMount() {
    this.timer = setInterval(() => {
      let time = timeFormatter({ prefix: true });
      this.date = time.date;
      this.nowTime = time.nowTime;
    }, 1000);
  }
  // beforeDestroy() {
  //     clearInterval(this.timer)
  // }
};
</script>
<style lang="scss"
  scoped>
.header {
    position: relative;
    text-align: center;
    color: #fff;
    width: 100%;
    height: 2.8vw;
    line-height: 2.8vw;
    background-image: url("~@/assets/app/img/titleBg.png");
    background-size: 100% 100%;

    .centerTitle {
        font-size: 1.1vw;
        letter-spacing: 0.1vw;
        text-shadow: 0.08vw 0.08vw 0 #00f0ff;
    }

    .weatherInfo {
        top: 0;
        left: 0.6vw;
        position: absolute;

        .item {
            float: left;

            span {
                float: left;
      }

      &.temperature .icon {
        font-size: 1.2vw;
      }

      &.humidity .icon {
      }
      &.pm25 .icon {
        font-size: 0.8vw;
      }

      .icon {
        color: #00f0ff;
        font-size: 1vw;
        width: 2vw;
        height: 2vw;
      }

      .text {
        font-size: 0.8vw;
      }
    }
  }
  .rightSide {
    position: absolute;
    right: 1.3vw;
    top: 0;
    font-size: 0.8vw;
    span {
      float: right;
    }
    .time {
      margin-right: 0.5vw;
    }
  }
}
</style>
