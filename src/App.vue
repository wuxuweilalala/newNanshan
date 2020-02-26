<template>
  <div id="app">
    <customerHeader></customerHeader>
    <div class="mainContent aCenter">
      <centerSection class="aCenter"></centerSection>
    </div>
    <div
      :key="index"
      class="storeWindowInfoWrapper"
      :style="{
              top: storeWindowStyle[index].top,
              left: storeWindowStyle[index].left
          }"
      v-for="(item,index) in storeWindowInfo.data"
    >
      <ripples wrapperClass="ripples" color="rgb(0,255,255,"></ripples>
      <div class="storeWindowInfo">
        <header>
          <span class="icon iconfont icon-businessDistrict"></span>
          <span class="text">{{item.title}}</span>
          <span class="closeBtn iconfont icon-close"></span>
        </header>
        <div class="content">
          <div class="item">
            <span class="text">{{storeWindowInfo.name1}}</span>
            <span class="num" :class="storeWindowInfo.nameClass1">{{item.value1}}</span>
          </div>
          <div class="item">
            <span class="text">{{storeWindowInfo.name2}}</span>
            <span class="num" :class="storeWindowInfo.nameClass2">{{item.value2}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="parkingWindowInfo aCenter">
      <div class="parkingPosition"></div>

      <p class="unusedNum">
        剩余:
        <span>{{unusedNum}}</span>
      </p>
      <div class="useSituation">
        <div class="item">situationSummary2
          <span class="text">已使用车位</span>
          <span class="percent">{{usedPercent}}%</span>
          <span class="bottomLine"></span>
        </div>
        <div class="item">
          <span class="text">剩余车位</span>
          <span class="percent">{{unusedPercent}}%</span>
          <span class="bottomLine"></span>
        </div>
      </div>
    </div>
    <div
      class="order randomPosition"
      :style="{
                left:randomPosition[randomPositionIndex%3].left,
                bottom:randomPosition[randomPositionIndex%3].bottom
              }"
      v-show="orderWindowState"
    >
      <div class="line" v-if="$route.name === 'index' || $route.name ==='propertyManagement'">
        <div class="window">
          <span class="title">物业工单</span>
          <span class="englishTitle">management order</span>
          <span @click="hideWindow" class="icon-close iconfont closeBtn"></span>
          <div class="content">
            <ul>
              <li class="item"></li>
              <li class="item">
                <span class="name">提交时间</span>
                <p class="text">{{submitTime.date}} {{submitTime.nowTime}}</p>
              </li>
              <li class="item">
                <span class="name">位置</span>
                <p class="text">{{buildingNum}}栋{{floorNum}}层</p>
              </li>
              <li class="item">
                <span class="name">状态</span>
                <p class="text">未处理</p>
              </li>
              <li class="item describe">
                <span class="name">描述</span>
                <p class="text">楼道灯时好时坏，影响出行</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view class="routerView"></router-view>

    <!--            <leftSideSection class="leftSideSection"/>-->
    <!--            <rightSideSection class="rightSideSection"/>-->
  </div>
</template>

<script>
import "@/assets/common/css/reset.css"; //初始化样式
import "@/assets/common/css/common.css";
import "@/assets/common/font/index.css";
import "@/assets/common/font/font.css";
import { timeFormatter } from "@/assets/app/js/util";
import { customerHeader } from "./pages/customerHeader";
import centerSection from "./pages/centerSection/centerSection";
import ripples from "@/components/ripples/ripples";
import { mapGetters } from "vuex";
// import {leftSideSection} from './pages/leftSideSection'
// import {rightSideSection} from './pages/rightSideSection'

export default {
  name: "app",
  components: {
    customerHeader,
    ripples,
    // leftSideSection,
    centerSection
    // rightSideSection
  },
  data() {
    return {
      parkingTotalNum: 1000,
      usedNum: 700,
      level: "高",
      buildingNum: 13,
      floorNum: 17,
      submitTime: {},
      describe: "楼道时好时坏",
      orderStatus: "未处理",
      storeWindowStyle: [
        {
          top: "20vw",
          left: "39vw"
        },
        {
          top: "18vw",
          left: "65vw"
        },
        {
          top: "25vw",
          left: "21vw"
        }
      ],
      orderWindowState: false,
      randomPositionIndex: 0,
      randomPosition: [
        {
          left: "33vw",
          bottom: "20vh"
        },
        {
          left: "61vw",
          bottom: "34vh"
        },
        {
          left: "39vw",
          bottom: "46vh"
        }
      ]
    };
  },
  methods: {
    hideWindow() {
      this.orderWindowState = false;
    }
  },
  computed: {
    ...mapGetters("main", {
      storeWindowInfo: "getStoreWindowInfo"
    }),
    unusedNum() {
      return this.parkingTotalNum - this.usedNum;
    },
    unusedPercent() {
      return ((this.unusedNum / this.parkingTotalNum) * 100).toFixed(2);
    },
    usedPercent() {
      return (100 - this.unusedPercent).toFixed(2);
    }
  },
  mounted() {
    let vm = this;
    setInterval(() => {
      let addNum = Math.floor(Math.random() * 21 - 10);
      // this.orderWindowState = true
      this.randomPositionIndex += 1;
      this.buildingNum = Math.floor(Math.random() * 10 + 1);
      this.floorNum = Math.floor(Math.random() * 30 + 1);
      this.submitTime = timeFormatter({ prefix: true });
      this.usedNum += addNum;
    }, 3000);
    setInterval(() => {
      this.orderWindowState = true;
      setTimeout(() => {
        this.orderWindowState = false;
      }, 2901);
    }, 6000);
    window.onresize = () => {
      vm.$store.dispatch("main/resizeASync", {
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
  }
};
</script>
<style>
html {
  font-family: SR, Georgia, serif;
  overflow: hidden;
}

#app {
  background: url("~@/assets/app/img/mainBg.png");
  background-size: 100% 100%;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss"
  scoped>
.routerView {
  padding-top: 1vw;
  width: 100%;
  position: absolute;
  left: 0;
  top: 2.8vw;
  bottom: 0;
}

.storeWindowInfoWrapper {
  z-index: 6;
  position: absolute;
  top: 18vw;
  left: 48vw;
  width: 10.1vw;
  height: 5.2vw;

  /deep/ .ripples {
    width: 4vw;
    border-radius: 50%;
    position: absolute;
    left: 3.4vw;
    bottom: 0;
  }
}

.storeWindowInfo {
  z-index: 6;
  animation: dropAnimate 4s infinite;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("~@/assets/app/img/windowBg.png");
  background-size: 100% 100%;

  header {
    padding-left: 0.5vw;
    line-height: 1.4vw;
    color: #fff;

    .icon {
      font-size: 0.6vw;
      margin-right: 0.5vw;
    }

    .closeBtn {
      float: right;
      margin-right: 0.5vw;
    }
  }

  .content {
    padding-top: 0.3vw;

    .item {
      text-align: center;
      width: 50%;
      float: left;

      span.text {
        font-family: DM;
        width: 100%;
        float: left;
        font-size: 0.6vw;
        color: #fff;
      }

      span.num {
        font-family: DM;
        font-weight: 100;
        width: 100%;
        float: left;
        font-size: 1.1vw;
        color: #00ffff;

        &.unhandledworkOrder {
          color: #f62742;
        }
      }
    }
  }
}

.parkingWindowInfo {
  margin-right: -21.5vw;
  bottom: 0.6vw;
  width: 23.1vw;
  height: 7.1vw;
  background: url("~@/assets/app/img/parkingWindowBg.png");
  background-size: 100% 100%;

  .parkingPosition {
    position: absolute;
    left: 1.5vw;
    top: 1vw;
    width: 50%;
    height: 90%;
    background: url("~@/assets/app/img/parkingPosition.png") no-repeat;
    background-size: 100% 100%;
  }

  .unusedNum {
    color: #fff;
    position: absolute;
    left: 3.5vw;
    top: 1vw;
  }

  .useSituation {
    position: absolute;
    width: 30%;
    height: 60%;
    bottom: 20%;
    right: 1.5vw;

    .item {
      position: relative;
      width: 100%;
      height: 50%;

      .text {
        color: white;
        position: absolute;
        left: 0;
        bottom: 0.5vw;
      }

      .percent {
        color: #00ffff;
        position: absolute;
        right: 0;
        bottom: 0.5vw;
      }

      .bottomLine {
        background-image: linear-gradient(
          to right,
          rgba(0, 255, 255, 0),
          #00ffff
        );
        position: absolute;
        width: 100%;
        height: 0.12vw;
        bottom: 0;
        left: 0;
      }
    }
  }
}

.order {
  z-index: 7;
  position: absolute;
  /*width: 23.1vw;*/
  /*height: 15vw;*/
  /*background: url("~@/assets/app/img/orderWindow.png");*/
  /*background-size: 100% 100%;*/

  .line {
    width: 5vw;
    height: 8vw;
    background: url("~@/assets/app/img/windowLine.png") no-repeat;
    background-size: 100% 100%;
  }

  .window {
    position: absolute;
    left: 100%;
    top: -5vw;
    width: 23.1vw;
    height: 15vw;
    background: url("~@/assets/app/img/orderWindow.png");
    background-size: 100% 100%;

    .title {
      color: #fff;
      left: 2vw;
      top: 0.5vw;
      position: absolute;
    }

    .englishTitle {
      color: #fff;
      left: 1.8vw;
      top: 1.6vw;
      position: absolute;
    }

    .closeBtn {
      border: red 0.062vw solid;
      font-size: 1vw;
      color: #fff;
      right: 0.5vw;
      top: 0.3vw;
      position: absolute;
    }

    .content {
      padding: 1.2vw 0;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 11.8vw;

      ul {
        display: flex;
        width: 100%;
        height: 100%;
        padding-right: 2vw;
        flex-direction: column;

        .item {
          &.describe {
            height: 3vw;
          }

          width: 100%;
          margin-bottom: 1vw;

          .name {
            color: #fff;
            text-align: right;
            padding-right: 0.5vw;
            float: left;
            height: 100%;
            width: 20%;
          }

          .text {
            color: #fff;
            float: left;
            padding-left: 0.5vw;
            height: 100%;
            width: 80%;
            border: solid red 0.0625vw;
          }
        }
      }
    }
  }
}

.mainContent {
  z-index: 5;
  width: 50vw;
  position: absolute;
  top: 2.8vw;
  /*bottom: 0;*/

  @keyframes dropAnimate {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(0px);
    }
  }
}
</style>
