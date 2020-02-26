<template>
  <vECharts
    ref="ecInstance"
    @mouseover.native="stopDataZoom"
    @mouseout.native="startDataZoom"
    :options="options"
  ></vECharts>
</template>

<script>
import vECharts from "vue-echarts";
import "echarts/lib/chart/line";

export default {
  name: "customerLine",
  props: ["options"],
  data() {
    return {
      dataZoomTimer: null,
      startValue: 0,
      endValue: 5
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
        if (vm.endValue === vm.options.xAxis[0].data.length) {
          vm.startValue = 0;
          vm.endValue = 5;
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
      this.startDataZoom();
    });
  },
  beforeDestroy() {
    window.clearInterval(this.dataZoomTimer);
  }
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
