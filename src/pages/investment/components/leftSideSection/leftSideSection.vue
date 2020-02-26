<template>
  <div class="section">
    <div class="chartItem">
      <chartWrapperHeader title="累计历史招商情况" />
      <!--      <div class="itemBody">-->
      <customerLiquidFill
        :label="liquidillLabel"
        :seriesData="liquidillSeriesData"
        class="liquidfill"
      ></customerLiquidFill>
      <!--      </div>-->
      <!--        <customerLiquidFill-->
      <!--          :label='liquidillLabel'-->
      <!--          :seriesData="liquidillSeriesData"-->
      <!--          class="customerLiquidFill"-->
      <!--        ></customerLiquidFill>-->
    </div>
    <div class="chartItem">
      <chartWrapperHeader title="招商渠道统计"></chartWrapperHeader>
      <div class="itemBody">
        <customerLine :options="lineOptions"></customerLine>
      </div>
    </div>
    <div class="chartItem">
      <chartWrapperHeader title="各园区本月招商分析"></chartWrapperHeader>
      <customerStackLine class="customerLineAndBar" :options="stackLineOptions"></customerStackLine>
    </div>
  </div>
</template>

<script>
import chartWrapperHeader from "@/components/chartWrapperHeader/chartWrapperHeader";
import customerLiquidFill from "@/components/customerLiquidFill/customerLiquidFill";
import customerLine from "@/components/customerLine/customerLine";
import customerStackLine from "@/components/customerStackLine/customerStackLine";
import { lineOptions, stackLineOptions } from "./chartOptions/options.js";

import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
export default {
  name: "leftSideSection",
  data() {
    return {
      liquidillLabel: {
        value: 2907,
        name: "历史商机"
      },
      liquidillSeriesData: [
        {
          name: "意向客户",
          value: 2097
        },
        {
          name: "协议客户",
          value: 1650
        },

        {
          name: "签约客户",
          value: 3760
        },

        {
          name: "入驻客户",
          value: 1245
        }
      ],
      lineOptions,
      stackLineOptions
    };
  },
  components: {
    chartWrapperHeader,
    customerLiquidFill,
    customerLine,
    customerStackLine
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
      flex-basis: 13.5vw;
      /*margin-bottom: 0.6vw;*/
      .itemBody {
        position: absolute;
        top: 1.6vw;
        bottom: 0;
        width: 100%;
      }
    }

    &:nth-child(2) {
      flex-basis: 17.7vw;
      /*margin-bottom: 0.6vw;*/
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
      flex-grow: 1;

      .customerLineAndBar {
        position: absolute;
        padding-top: 0.5vw;
        top: 1.6vw;
        bottom: 0;
        width: 100%;
      }
    }
  }
}
</style>
