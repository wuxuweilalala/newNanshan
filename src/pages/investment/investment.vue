<template>
  <div>
    <leftSideSection class="left"></leftSideSection>
    <rightSideSection class="right"></rightSideSection>
  </div>
</template>
<script>
import { leftSideSection } from "@/pages/investment/components/leftSideSection";
import { rightSideSection } from "@/pages/investment/components/rightSideSection";
export default {
  name: "investment",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("main/setStoreWindowInfo", {
        title: "某某商铺",
        name1: "签约率",
        nameClass1: "satisfiedProportion",
        name2: "当前意向客户",
        nameClass2: "intentional",
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
