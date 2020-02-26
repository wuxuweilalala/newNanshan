<template>
  <div>
    <leftSideSection class="left"></leftSideSection>
    <rightSideSection class="right"></rightSideSection>
  </div>
</template>
<script>
import { leftSideSection } from "./components/leftSideSection";
import { rightSideSection } from "./components/rightSideSection";

export default {
  name: "situationSummary",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("main/setStoreWindowInfo", {
        name1: "出租率",
        value1: "85%",
        nameClass1: "rentOutProportion",
        name2: "未交租金",
        value2: "5227",
        nameClass2: "receivableRent",
        data: [
          {
            title: "专业市场",
            value1: "85%",
            value2: "5227"
          },
          {
            title: "仓储区",
            value1: "85%",
            value2: "5227"
          },
          {
            title: "商贸区",
            value1: "85%",
            value2: "5227"
          }
        ]
      });
      vm.$store.commit("main/setRollNum", 785214);
    });
  },
  components: {
    leftSideSection,
    rightSideSection
  }
};
</script>

<style scoped>
.left {
  float: left;
  /*position: absolute;*/
  /*top: 3.5vw;*/
  /*bottom: 0;*/
  width: 17.7vw;
  height: 100%;
  /*left: 0.5vw;*/
  margin-left: 0.5vw;
}

.right {
  float: right;
  /*position: absolute;*/
  top: 3.5vw;
  /*bottom: 0;*/
  /*right: 0.5vw;*/
  height: 100%;
  width: 17.7vw;
  margin-right: 0.5vw;
  /*background-color: rgba(255, 67, 57, 0.47);*/
}
</style>
