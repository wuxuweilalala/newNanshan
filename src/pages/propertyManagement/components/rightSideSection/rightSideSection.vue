<template>
  <div class="section">
    <div class="chartItem">
      <chartWrapperHeader title="实时数据" />
      <div class="itemBody">
        <div class="item" v-for="(item,index) in basicDataList" :key="index">
          <span class="iconBg" :class="item.icon"></span>
          <p class="value" v-if="item.hasUnit">
            <span class="num">
              {{item.value}}
              <span class="unit">{{item.unit}}</span>
            </span>
          </p>
          <p class="value" v-else>{{item.value}}</p>
          <p class="name">{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="chartItem">
      <chartWrapperHeader title="用水趋势"></chartWrapperHeader>
      <div class="itemBody">
        <span class="yName">m</span>
        <customerLine :options="lineOptions"></customerLine>
      </div>
    </div>
    <div class="chartItem">
      <chartWrapperHeader title="水电排行"></chartWrapperHeader>
      <div class="itemBody"
        :style="{
                    height:(~~(vwToPx(1.95)+0.5)*7)+'px'
                }">
        <customerStackLine :options="stackLineOptions"></customerStackLine>
      </div>
    </div>
  </div>
</template>

<script>
import chartWrapperHeader from "@/components/chartWrapperHeader/chartWrapperHeader";
import customerLine from "@/components/customerLine/customerLine";
import customerStackLine from "@/components/customerStackLine/customerStackLine";
import { lineOptions, stackLineOptions } from "@/pages/chartOptions/options";
import { set as _set } from "lodash";

export default {
  name: "rightSideSection",
  data() {
    return {
      areaCategoryArr: [3512, 2001, 1863, 800],
      basicDataList: [
        {
          icon: "icon-park",
          value: 10000,
          name: "今日受理"
        },
        {
          icon: "icon-businessDistrict",
          value: 10000,
          name: "今日办结"
        },
        {
          hasUnit: true,
          icon: "icon-residence",
          value: 15649,
          name: "今日用电",
          unit: "kw/h"
        },
        {
          hasUnit: true,
          icon: "icon-apartment",
          value: 5945,
          name: "今日用水",
          unit: "m"
        },
        {
          icon: "icon-satisfaction",
          value: 50,
          name: "今日有偿服务次数"
        },
        {
          icon: "icon-sale",
          value: 1345,
          name: "今日有偿服务收入"
        }
      ],
      itemStyle: [
        {
          name: "仓储",
          itemStyle: {
            color: "#00ffff"
          }
        },
        {
          name: "住宅",
          itemStyle: {
            color: "#42f412"
          }
        },
        {
          name: "公寓",
          itemStyle: {
            color: "#0066ff"
          }
        },
        {
          name: "商贷",
          itemStyle: {
            color: "#f62742"
          }
        }
      ],
      lineOptions: lineOptions,
      watchBarData: [
        300,
        500,
        256,
        26.4,
        767,
        135.6,
        326,
        200,
        64,
        33,
        200,
        175,
        300
      ],
      stackLineOptions
    };
  },
  computed: {
    vwToPx() {
      return this.$store.getters["main/vwToPx"];
    },
    // watchBarData() {
    //     // let itemStyleArr = new Array(this.barData.length).fill({})
    //     for (let i = 0; i < this.barData.length; i++) {
    //         this.$set(this.barData[i], 'value', this.barData[i])
    //     }
    //     debugger
    //     let maxIndex = this.barData.indexOf(Math.max(...this.barData));
    //             return this.propertyAnalysis.series[0].data
    // }
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
        // itemStyleArr[maxIndex].itemStyle=maxBarStyle;
      }
    }
  },
  components: {
    chartWrapperHeader,
    customerLine,
    customerStackLine
  }
};
</script>

<style scoped
  lang="scss">
.section {
  padding-bottom: 2vw;
  display: flex;
  flex-direction: column;

  .chartItem {
    margin-bottom: 1vw;
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    &:first-child {
      flex-basis: 13.5vw;
      .itemBody {
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        padding: 1vw 0.8vw 1.7vw 1.5vw;
        position: absolute;
        top: 1.6vw;
        bottom: 0;
        width: 100%;

        .item {
          &:nth-child(1) {
            .iconBg {
              background-image: url("~@/assets/app/img/icon/park.png");
            }
          }

          &:nth-child(2) {
            .iconBg {
              background-image: url("~@/assets/app/img/icon/businessDistrict.png");
            }
          }

          &:nth-child(3) {
            .iconBg {
              background-image: url("~@/assets/app/img/icon/residence.png");
            }
          }

          &:nth-child(4) {
            .iconBg {
              background-image: url("~@/assets/app/img/icon/apartment.png");
            }
          }

          &:nth-child(5) {
            .iconBg {
              background-image: url("~@/assets/app/img/icon/satisfaction.png");
            }
          }

          &:nth-child(6) {
            .iconBg {
              background-image: url("~@/assets/app/img/icon/sale.png");
            }
          }

          .value .num {
            font-family: DM;
            position: relative;
          }

          .value .unit {
            display: block;
            position: absolute;
            bottom: 0;
            font-size: 0.6vw;
            right: -0.5vw;
            transform: translate(100%, 0%);
            font-size: 0.6vw;
          }

          &:nth-child(4) .value .unit::after {
            display: block;
            content: "2";
            position: absolute;
            bottom: 0;
            font-size: 1vw;
            right: 0;
            transform-origin: -100% 100%;
            transform: translate(150%, -10%) scale(0.5);
          }

          &:nth-child(4) .value .num::after {
            display: block;
            position: absolute;
            bottom: 0;
            font-size: 0.6vw;
            right: 0;
            transform: translate(100%, 30%);
          }

          position: relative;
          margin-bottom: 1vw;
          justify-content: space-between;
          width: 50%;

          .iconBg {
            display: block;
            width: 1.7vw;
            height: 1.7vw;
            line-height: 2.2vw;
            text-align: center;
            background-size: 100% 100%;
          }

          .value {
            position: absolute;
            transform: translateY(-30%);
            top: 0;
            left: 2.5vw;
            right: 0;
            font-size: 1vw;
            color: #00ffff;
            text-align: left;
            padding-right: 1.5vw;
          }

          .name {
            white-space: nowrap;
            font-size: 1vw;
            transform-origin: 0 0;
            transform: translateY(20%) scale(0.5);
            bottom: 0;
            position: absolute;
            left: 2.5vw;
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
      flex-grow: 1;
      .itemBody {
        padding-top: 0.5vw;
        padding-bottom: 1vw;
        /*padding: 1vw 2vw 1.7vw;*/
        position: absolute;
        top: 1.6vw;
        bottom: 0;
        width: 100%;

        .yName {
          transform-origin: 0 0;
          transform: scale(0.5);
          font-size: 1vw;
          color: #fff;
          position: absolute;
          top: 1.5vw;
          left: 1vw;

          &::before {
            transform: scale(0.8);
            display: block;
            content: "2";
            position: absolute;
            top: -0.5vw;
            right: -0.5vw;
          }
        }
      }
    }

    &:nth-child(3) {
      flex-basis: 14vw;

      margin-bottom: 0;
      .itemBody {
        padding-top: 0.5vw;
        position: absolute;
        top: 1.6vw;
        bottom: 0;
        width: 100%;
      }
    }
  }
}
</style>
