<template>
  <div class="section">
    <div class="chartItem">
      <chartWrapperHeader title="本年度预测收款" />
      <div class="itemBody">
        <div class="itemList">
          <div class="itemLeft">
            <div class="iconImg">
              <!--    <img src="@/assets/app/img/operation/zujin.png" /> -->
            </div>
            <div class="intro">
              <p class="itemTitle">本年度租金预测收款</p>
              <p class="itemNum">同比65.0%</p>
            </div>
          </div>
          <div class="itemRight">
            <span class="rightValue">3,309.34</span>
            <span class="rightUnit">元</span>
          </div>
        </div>
        <div class="itemList">
          <div class="itemLeft">
            <div class="iconImg"></div>
            <div class="intro">
              <p class="itemTitle">本年度物业预测收款</p>
              <p class="itemNum">同比35.0%</p>
            </div>
          </div>
          <div class="itemRight">
            <span class="rightValue">2,020.79</span>
            <span class="rightUnit">元</span>
          </div>
        </div>
      </div>
    </div>
    <div class="chartItem">
      <chartWrapperHeader title="收入结构情况分析"></chartWrapperHeader>
      <div class="itemBody">
        <customerFunnel :options="funnelOptions"></customerFunnel>
      </div>
    </div>
    <div class="chartItem">
      <chartWrapperHeader title="经营分析统计"></chartWrapperHeader>
      <customerLine :options="lineOptions" class="customerLineAndBar"></customerLine>
    </div>
    <div class="chartItem">
      <chartWrapperHeader title="园区整体收入统计"></chartWrapperHeader>
      <div class="itemBody">
        <customerLineAndBar :options="barOptions"></customerLineAndBar>
      </div>
    </div>
  </div>
</template>

<script>
import chartWrapperHeader from "@/components/chartWrapperHeader/chartWrapperHeader";
import customerFunnel from "@/components/customerFunnel/customerFunnel";
import customerLine from "@/components/customerLine/customerLine";
import customerLineAndBar from "@/components/customerLineAndBar/customerLineAndBar";
import { funnelOptions, lineOptions, barOptions } from "./chartOptions/options";
import { set as _set } from "lodash";
// import customerLineAndBar from "@/pages/customerLineAndBar/customerLineAndBar";
import echarts from "echarts";

let maxBarStyle = {
  color: new echarts.graphic.LinearGradient(
    0,
    1,
    0,
    0, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
    [
      { offset: 0, color: "rgba(246,39,66,0)" },
      { offset: 1, color: "#f62742" }
    ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
  )
};
export default {
  name: "rightSideSection",
  data() {
    return {
      funnelOptions,
      lineOptions,
      barOptions,
      watchBarData: [61, 59, 73, 60, 82, 79, 81, 56, 63, 78, 68, 78]
    };
  },
  components: {
    chartWrapperHeader,
    customerFunnel,
    customerLine,
    customerLineAndBar
  },
  watch: {
    watchBarData: {
      deep: true,
      immediate: true,
      handler(barData) {
        let itemStyleArr = [];
        for (let i = 0; i < barData.length; i++) {
          _set(itemStyleArr, `[${i}].value`, barData[i]);
        }
        let maxIndex = barData.indexOf(Math.max(...barData));
        itemStyleArr[maxIndex].itemStyle = maxBarStyle;
        // this.$set(itemStyleArr,maxIndex,maxBarStyle)
        // console.log(maxIndex+'最大值下标')
        this.barOptions.series[0].data = itemStyleArr;
        // let options=val;
        // const valueArray=options.series[0].data=;
      }
    }
  }
};
</script>

<style scoped
  lang="scss">
.section {
  display: flex;
  flex-direction: column;

  .chartItem {
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    &:first-child {
      flex-basis: 8.9vw;
      /*margin-bottom: 0.6vw;*/
      .itemBody {
        padding: 0 1vw;
        position: absolute;
        top: 1.6vw;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .itemList {
          display: flex;
          align-items: center;
          /*     justify-content: space-between; */
          &:nth-child(1) {
            border-bottom: 1px solid rgba(6, 255, 255, 0.2);
            .iconImg {
              background-image: url("~@/assets/app/img/operation/zujin.png");
            }
          }
          &:nth-child(2) {
            .iconImg {
              background-image: url("~@/assets/app/img/operation/wuye.png");
            }
          }
          .itemLeft {
            display: flex;
            align-items: center;
            .iconImg {
              width: 2.2vw;
              height: 2.2vw;
              margin-right: 0.4vw;
              background-size: 100% 100%;
            }
            .intro {
              /*pad*/
              .itemTitle {
                /*        float: left; */
                transform-origin: 0 100%;
                transform: scale(0.6);
                white-space: nowrap;
                color: #fff;
                font-size: 1vw;
              }
              .itemNum {
                transform-origin: 0 0;
                transform: scale(0.6);
                /*      float: left; */
                color: #fe2850;
                font-size: 1vw;
              }
            }
          }
          .itemRight {
            display: flex;
            align-items: baseline;
            color: #00eeff;
            .rightValue {
              font-family: DM;
              font-size: 1.5vw;
            }
            .rightUnit {
              font-family: AdobeHeitiStd-Regular;
              font-size: 0.6vw;
            }
          }
        }
      }
    }

    &:nth-child(2) {
      flex-basis: 11.5vw;
      /*margin-bottom: 0.6vw;*/
      .itemBody {
        /*padding: 1vw 2vw 1.7vw;*/
        position: absolute;
        top: 1.6vw;
        bottom: 0;
        width: 100%;
      }
    }

    &:nth-child(3) {
      flex-basis: 10.4vw;
      margin-top: 1vw;
      .customerLineAndBar {
        position: absolute;
        padding-top: 0.5vw;
        top: 1.6vw;
        bottom: 0;
        /*height: 100%;*/
        width: 100%;
      }
    }
    &:nth-child(4) {
      flex-basis: 13.9vw;
      margin-top: 1vw;
      .itemBody {
        position: absolute;
        padding-top: 0.5vw;
        top: 1.6vw;
        bottom: 0;
        /*height: 100%;*/
        width: 100%;
        .echarts {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
