<template>
  <div>
    <leftSideSection class="left"></leftSideSection>
    <rightSideSection class="right"></rightSideSection>
  </div>
</template>

<script>
import { leftSideSection } from "./components/leftSideSection/";
import { rightSideSection } from "./components/rightSideSection";

export default {
  name: "propertyManagement",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("main/setStoreWindowInfo", {
        title: "商贸区",
        name1: "满意度",
        nameClass1: "satisfiedProportion",
        name2: "未处理工单",
        nameClass2: "unhandledworkOrder",
        data: [
          {
            title: "专业市场",
            value1: "85%",
            value2: "200"
          },
          {
            title: "仓储区",
            value1: "90%",
            value2: "80"
          },
          {
            title: "商贸区",
            value1: "95%",
            value2: "56"
          }
        ]
      });
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
