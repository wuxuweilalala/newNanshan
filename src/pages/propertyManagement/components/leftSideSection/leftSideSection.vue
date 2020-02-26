<template>
  <div class="section">
    <div class="chartItem">
      <chartWrapperHeader title="基础数据" />
      <customerLiquidFill
        :label="liquidillLabel"
        :seriesData="liquidillSeriesData"
        class="liquidfill"
      ></customerLiquidFill>
    </div>
    <div class="chartItem">
      <chartWrapperHeader title="本月服务分析"></chartWrapperHeader>
      <vECharts class="lineChart" :options="serviceAnalyzeVal"></vECharts>
    </div>
    <div class="chartItem">
      <chartWrapperHeader title="水电异常"></chartWrapperHeader>
      <div class="tableList">
        <div
          class="header tr"
          :style="{
                    height:(~~(vwToPx(1.95)+0.5))+'px'
                }"
        >
          <span
            :key="titleIndex"
            v-for="(item,titleIndex) in waterAndElectricityTable.header"
          >{{item}}</span>
        </div>
        <!--                  :step="1"-->
        <!--                  :waitTime="10000"-->
        <vueSeamless
          :class-option="seamlessOptions"
          :style="{
                    height:(~~(vwToPx(1.95)+0.5)*6)+'px'
                }"
          class="seamlessBody"
          :data="waterAndElectricityTable.body"
        >
          <div
            class="body tr"
            :style="{
                    height:(~~(vwToPx(1.95)+0.5))+'px'
                }"
            :key="trIndex"
            v-for="(tr,trIndex) in waterAndElectricityTable.body"
          >
            <span class="td" :key="tdIndex" v-for="(td,tdIndex) in tr.slice(0,3)">{{td}}</span>
            <span
              class="iconfont"
              :class="[
                      tr[3]?'icon-handled':'icon-unhandled' ,
                      tr[3]?'handled':'unhandled' ,
                    ]"
            ></span>
          </div>
        </vueSeamless>
      </div>
    </div>
  </div>
</template>

<script>
import vECharts from "vue-echarts";
import vueSeamless from "vue-seamless-scroll";
import chartWrapperHeader from "@/components/chartWrapperHeader/chartWrapperHeader";
import customerLiquidFill from "@/components/customerLiquidFill/customerLiquidFill";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import { serviceAnalyzeVal } from "./chartOptions/options";

export default {
  name: "leftSideSection",
  computed: {
    vwToPx() {
      return this.$store.getters["main/vwToPx"];
    },
    seamlessOptions: function() {
      return {
        singleHeight: ~~(this.vwToPx(1.95) + 0.5),
        limitMoveNum: 6,
        waitTime: 2500
      };
    }
  },
  data() {
    return {
      liquidillLabel: {
        value: "95%",
        name: "满意度"
      },
      liquidillSeriesData: [
        {
          name: "服务次数",
          value: 10000
        },
        {
          name: "受理次数",
          value: 1569
        },

        {
          name: "办结次数",
          value: 5598
        },

        {
          name: "有偿服务次数",
          value: 4688
        },
        {
          name: "有偿服务收入",
          value: 4783
        }
      ],
      waterAndElectricityTable: {
        header: ["商户", "类型", "异常描述", "状态"],
        body: [
          ["好炒味", "用电", "电费未缴", false],

          ["煌上煌", "用电", "电费未缴", false],

          ["煌上煌", "用电", "本月用水量大幅度下降", true],

          ["酒楼", "用电", "本月用水量大幅度下降", true],

          ["珠海公司", "用电", "本月用水量大幅度下降", true],

          ["阳光雨露", "用电", "本月用水量大幅度下降", true],
          ["好炒味", "用电", "电费未缴", false],

          ["煌上煌", "用电", "电费未缴", false],

          ["煌上煌", "用电", "本月用水量大幅度下降", true],

          ["酒楼", "用电", "本月用水量大幅度下降", true],

          ["珠海公司", "用电", "本月用水量大幅度下降", true],

          ["阳光雨露", "用电", "本月用水量大幅度下降", true]
        ]
      },

      serviceAnalyzeVal: serviceAnalyzeVal
    };
  },
  components: {
    vueSeamless,
    vECharts,
    chartWrapperHeader,
    customerLiquidFill
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

      .liquidfill {
        padding-bottom: 1.2vw;
        width: 100%;
        height: 11.3vw;
      }

      /*margin-bottom: 0.6vw;*/
    }

    &:nth-child(2) {
      flex-grow: 1;

      /*flex-basis: 14.7vw;*/

      .lineChart {
        position: absolute;
        padding-top: 0.5vw;
        top: 1.6vw;
        bottom: 0;
        width: 100%;
        height: unset;
      }

      /*margin-bottom: 0.6vw;*/
    }

    &:nth-child(3) {
      flex-basis: 16.5vw;

      margin-bottom: 0;
      .tableList {
        padding-left: 0.5vw;
        position: absolute;
        padding-top: 0.5vw;
        top: 1.6vw;
        bottom: 0;
        width: 100%;
        overflow: hidden;

        .header {
          color: #00e8ff;
        }

        .seamlessBody {
          position: absolute;
          left: 0.5vw;
          top: 1.8vw;
          /*height: 11.7vw;*/
          bottom: 0;
          width: calc(100% - 0.5vw);
          overflow: hidden;
        }

        .body {
          color: #fff;
        }

        .tr {
          display: flex;
          align-content: space-between;
          width: 100%;
          /*height: 1.95vw;*/
          padding-bottom: 0.5vw;

          .td {
            text-align: left;
            white-space: nowrap;
          }

          span:nth-child(1) {
            flex-basis: 4vw;
          }

          span:nth-child(2) {
            flex-basis: 3vw;
          }

          span:nth-child(3) {
            flex-grow: 1;
          }

          span:nth-child(4) {
            flex-basis: 2vw;
            text-align: center;

            &.handled {
              color: #fb2c4b;
            }

            &.unhandled {
              color: #00ffff;
            }
          }
        }
      }
    }
  }
}
</style>
