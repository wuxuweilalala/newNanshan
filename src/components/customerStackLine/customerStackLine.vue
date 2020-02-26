<template>
    <vECharts
      ref="ecInstance"
      @mouseover.native="stopDataZoom"
      @mouseout.native="startDataZoom"
      :options="options"
    ></vECharts>
    <!--     <div class="numWrapper">
      <div>01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
      <div>05</div>
      <div>06</div>
      <div>07</div>
    </div>-->
<!--  </div>-->
</template>

<script>
import vECharts from "vue-echarts";
import "echarts/lib/chart/line";

export default {
  name: "customerLine",
  props: {
      "options":Object,
      showDataLength:{
          type:Number,
          default:4
      }
  }
  ,
  data() {
    return {
      dataZoomTimer: null,
      startValue: 0,
      endValue: 0
    };
  },
  components: {
    vECharts
  },
  methods: {
    stopDataZoom() {
      window.clearInterval(this.dataZoomTimer);
    },
    startDataZoom() {
      let vm = this;
      this.dataZoomTimer = setInterval(() => {
          vm.startValue++;
          vm.endValue++;
          if (vm.endValue === vm.options.yAxis.data.length) {
              vm.startValue = 0;
              vm.endValue = this.showDataLength;
          }
          vm.$refs.ecInstance.dispatchAction({
              type: "dataZoom",
              dataZoomIndex: 0,
              startValue: vm.startValue,
              endValue: vm.endValue
          });
      }, 4000);
    }
  },
    mounted() {
        this.$nextTick(() => {
            this.endValue=this.showDataLength;
            this.startDataZoom();
        });
    },
    beforeDestroy() {
        window.clearInterval(this.dataZoomTimer)
    }
};
</script>

<style scoped lang="scss">
.echarts {
  width: 100%;
  height: 100%;
}
</style>
