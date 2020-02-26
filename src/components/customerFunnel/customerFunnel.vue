<template>
  <vECharts ref="ecInstance" :options="options"></vECharts>
</template>

<script>
import vECharts from "vue-echarts";
export default {
  name: "funnel",
  props: ["options"],
  components: {
    vECharts
  }
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>