<template>
  <div class="section">
    <div class="chartItem">
      <chartWrapperHeader title="基础数据分析" />
      <div class="itemBody">
        <div class="item" v-for="(item,index) in basicDataList" :key="index">
          <span class="iconBg" :class="item.icon"></span>
          <p class="value" v-if="item.hasUnit">
            <span class="num">{{item.value}}</span>
            <span class="unit">{{item.unit}}</span>
          </p>
          <p class="value" v-else>{{item.value}}</p>
          <p class="name">{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="chartItem">
      <chartWrapperHeader title="各业态收入情况分析"></chartWrapperHeader>
      <div class="itemBody">
        <customerRadar :options="radarOptions"></customerRadar>
      </div>
    </div>
    <div class="chartItem">
      <chartWrapperHeader title="年度收入情况分析"></chartWrapperHeader>
      <ul class="legends">
        <li class="legend" ></li>
      </ul>
      <customerLine class="lineChart" :options="serviceAnalyzeVal"></customerLine>
    </div>
  </div>
</template>

<script>
import chartWrapperHeader from "@/components/chartWrapperHeader/chartWrapperHeader";
import customerLine from "@/components/customerLine/customerLine";
import customerRadar from "@/components/customerRadar/customerRadar";
import { serviceAnalyzeVal, radarOptions } from "./chartOptions/options.js";

import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
export default {
  name: "leftSideSection",
  data() {
    return {
      legends:[
        {
          name:'租赁费',
          color:'#00ffff',
          fontName:''
        }
      ],
      basicDataList: [
        {
          hasUnit: true,
          icon: "icon-park",
          value: "27,249",
          name: "应收款总额",
          unit: "万元"
        },
        {
          hasUnit: true,
          icon: "icon-businessDistrict",
          value: "25,838",
          name: "已收款总额",
          unit: "万元"
        },
        {
          hasUnit: true,
          icon: "icon-residence",
          value: "2,305",
          name: "未收款总额",
          unit: "万元"
        },
        {
          hasUnit: true,
          icon: "icon-apartment",
          value: "1,305",
          name: "滞纳金总额",
          unit: "万元"
        }
      ],
      radarOptions,
      serviceAnalyzeVal
    };
  },
  components: {
    chartWrapperHeader,
    customerLine,
    customerRadar
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
      flex-basis: 9.4vw;
      /*margin-bottom: 0.6vw;*/
      .itemBody {
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        padding: 1vw 0.8vw 1.7vw 1.1vw;
        position: absolute;
        top: 1.6vw;
        bottom: 0;
        width: 100%;

        .item {
          &:nth-child(1) {
            .iconBg {
              background-image: url("~@/assets/app/img/operation/op1.png");
            }
          }

          &:nth-child(2) {
            .iconBg {
              background-image: url("~@/assets/app/img/operation/op2.png");
            }
          }

          &:nth-child(3) {
            .iconBg {
              background-image: url("~@/assets/app/img/operation/op3.png");
            }
          }

          &:nth-child(4) {
            .iconBg {
              background-image: url("~@/assets/app/img/operation/op4.png");
            }
          }

          .value .num {
              font-family: DM;
              margin-right: 0.2vw;
          }

          .value .unit {
            display: block;
            font-size: 0.6vw;
            /*   transform: translate(100%, 30%); */
          }
          position: relative;
          margin-bottom: 1vw;
          justify-content: space-between;
          width: 50%;

          .iconBg {
            display: block;
            width: 2.3vw;
            height: 2.3vw;
            line-height: 2.2vw;
            text-align: center;
            background-size: 100% 100%;
          }

          .value {
            display: flex;
            align-items: baseline;
            position: absolute;
            transform: translateY(-30%);
            top: 0.5vw;
            left: 3vw;
            right: 0;
            font-size: 1vw;
            color: #00ffff;
          }

          .name {
            white-space: nowrap;
            font-size: 1vw;
            transform-origin: 0 0;
            transform: translateY(20%) scale(0.5);
            bottom: -0.4vw;
            position: absolute;
            left: 3vw;
            right: 0;
            color: #fff;
            text-align: left;
            /*padding-left: 0.2vw;*/
            padding-right: 1.5vw;
          }
        }
      }
    }

    &:nth-child(2) {
      flex-basis: 17.7vw;
      margin-top: 1vw;
      .itemBody {
        padding-bottom: 1vw;
        /* padding: 1vw 2vw 1.7vw; */
        position: absolute;
        top: 1.6vw;
        bottom: 0;
        width: 100%;
      }
    }

    &:nth-child(3) {
      flex-basis: 20.7vw;
      margin-top: 1vw;
      .lineChart {
        position: absolute;
        padding-top: 0.5vw;
        top: 1.6vw;
        bottom: 0;
        width: 100%;
        height: unset;
      }
    }
  }
}
</style>
