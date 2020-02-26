<template functional>
  <div class="headerContainer">
    <header class="aCenter">
      <span class="icon iconfont icon-verticalLine"></span>
      <span class="title">{{props.title}}</span>
      <span class="icon iconfont icon-verticalLineReverse"></span>
    </header>
  </div>
</template>

<script>
export default {
  name: "chartWrapper",
  props: {
    title: String
  }
};
</script>

<style scoped
  lang="scss">
.headerContainer {
  width: 100%;
  height: 1.6vw;
  background: url("~@/assets/app/img/optionBg.png") no-repeat;
  background-size: 100% 100%;
  margin-bottom: 0.9vw;
  header {
    height: 1.6vw;
    width: 100%;
    display: flex;
    justify-content: center;
    span {
      font-size: 0.6vw;
      line-height: 1.6vw;
      float: left;
      color: #00f0ff;
    }

    .title {
      color: #fff;
      margin: 0 0.4vw;
    }
  }
}
</style>
