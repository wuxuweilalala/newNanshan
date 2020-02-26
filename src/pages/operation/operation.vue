<template>
  <div>
    <leftSideSection class="left"></leftSideSection>
    <rightSideSection class="right"></rightSideSection>
  </div>
</template>
<script>
import { leftSideSection } from "@/pages/operation/components/leftSideSection";
import { rightSideSection } from "@/pages/operation/components/rightSideSection";
export default {
  name: "investment",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("main/setStoreWindowInfo", {
        title: "某某商铺",
        name1: "应收总额",
        nameClass1: "satisfiedProportion",
        name2: "未收金额",
        nameClass2: "intentional",
        data: [
          {
            title: "专业市场",
            value1: "858万",
            value2: "20万"
          },
          {
            title: "仓储区",
            value1: "780万",
            value2: "80万"
          },
          {
            title: "商贸区",
            value1: "1095万",
            value2: "56万"
          }
        ]
      });
      vm.$store.commit("main/setRollNum", "50284057903");
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
