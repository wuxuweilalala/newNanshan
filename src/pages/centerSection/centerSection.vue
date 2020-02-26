<template>
  <div class="section">
    <div class="message aCenter">
      <span class="iconfont icon-notification vCenter"></span>
      <vueSeamless :data="messageList" class="seamless-wrapper" :class-option="seamlessOptions">
        <ul class="titles">
          <li class="title" :key="index" v-for="(message,index) in messageList">{{message.title}}</li>
        </ul>
      </vueSeamless>
    </div>
    <div class="tabs">
      <div
        @click="toggleTab(index,item.to)"
        class="tab"
        :class="{active:item.to===$route.name}"
        v-for="(item,index) in tabList"
        :key="index"
        :to="{name:item.to}"
      >{{item.name}}</div>
      <!--            <div class="tab active">园区概览</div>-->
      <!--            <div class="tab">招商运营</div>-->
      <!--            <div class="tab">安防管控</div>-->
      <!--            <div class="tab">物业管理</div>-->
    </div>
    <div
      class="annualIncome aCenter"
      v-if="$route.name === 'index' || $route.name ===  'operation'"
    >
      <span class="text">年度总收入</span>
      <digitRoll :rollDigits="rollNum" class="digitRoll" />
      <span class="uint">万元</span>
    </div>
    <div class="addIncome aCenter" v-if="$route.name ===  'operation'">
      <div class="arrow">
        <img src="@/assets/app/img/operation/arrow.svg" alt />
      </div>

      <p>同比去年上升25%</p>
      <p>差额 234,217.58</p>
    </div>
  </div>
</template>

<script>
import vueSeamless from "vue-seamless-scroll";
import DigitRoll from "@huoyu/vue-digitroll";
import { mapGetters } from "vuex";

export default {
  name: "centerSection",
  components: {
    vueSeamless,
    DigitRoll
  },
  computed: {
    ...mapGetters("main", {
      rollNum: "getRollNum"
    }),
    vw() {
      return this.$store.getters["main/vw"];
    },
    vwToPx() {
      return this.$store.getters["main/vwToPx"];
    },
    seamlessOptions: function() {
      return {
        singleHeight: this.vwToPx(1.2),
        limitMoveNum: 1,
        waitTime: 2500
      };
    }
  },
  data() {
    return {
      rollNumTimer: null,
      options: {
        waitTime: 25000
      },
      countUpOptions: {
        useEasing: true,
        useGrouping: false,
        separator: "",
        decimal: ".",
        prefix: "",
        suffix: ""
      },
      animateTimer: null,
      animate: false,
      messageList: [
        {
          title:
            "2020年1月23日物业将组织工作人员对园区内公共水池进行集中清理消毒，届时将于14:00-1"
        },
        {
          title:
            "2020年1月23日物业将组织工作人员对园区内公共水池进行集中清理消毒，届时将于14:00-1"
        }
      ],
      tabActiveName: "index",
      tabList: [
        {
          name: "园区概览",
          to: "index"
        },
        {
          name: "园区招商",
          to: "investment"
        },
        {
          name: "园区物业",
          to: "propertyManagement"
        },
        {
          name: "园区运营",
          to: "operation"
        }
      ]
    };
  },
  methods: {
    toggleTab(index, name) {
      this.$router.push({ name });
    }
  },
  mounted() {
    /*  this.rollNumTimer = setInterval(() => {
      let addNum = Math.floor(Math.random() * 10) + 1;
      this.rollNum += addNum;
    }, 3000); */
  }
};
</script>

<style lang="scss"
  scoped>
.section {
  top: 0;
  padding: 0.5vw;

  .message {
    color: #fff;
    font-size: 0.5vw;

    span {
      color: #f62742;
      left: -1.4vw;
    }

    .seamless-wrapper {
      overflow: hidden;
      height: 1vw;
      width: 22vw;
    }

    .titles {
      .title {
        padding: 0.2vw 0;
        line-height: 0.8vw;
        height: 1.2vw;
        overflow: hidden;
        cursor: pointer;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 0.5vw;
      }
    }
  }

  .tabs {
    cursor: pointer;
    margin-top: 2vw;
    float: left;
    display: flex;
    /*align-content: space-between;*/
    .tab {
      &.active {
        opacity: 1;
      }

      &:last-child {
        margin-right: 0;
      }

      text-align: center;
      color: #fff;
      margin-right: 2.5vw;
      flex: 1;
      width: 6.3vw;
      height: 1.5vw;
      line-height: 1.5vw;
      opacity: 0.5;
      background: url("~@/assets/app/img/optionBg.png");
      background-size: 100% 100%;
    }
  }

  .annualIncome {
    display: flex;
    top: 5.1vw;
    height: 1.7vw;

    .text {
      white-space: nowrap;
      margin-right: 1vw;
      font-size: 0.8vw;
      color: #fff;
      line-height: 1.7vw;
    }

    .digitRoll {
      /*  width: 10vw; */
      margin: 0;
      color: #fff;
      font-size: 1.1vw;
      /deep/ .d-roll-item {
        background: url("~@/assets/app/img/numberBg.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 0.5vw;
        > .d-roll-bar {
          > div {
            padding: 0 0.3vw;
          }
        }
      }
    }

    .uint {
      position: absolute;
      right: -1.8vw;
      white-space: nowrap;
      color: #fff;
      bottom: 0;
      /*margin-left: 0.5vw;*/
    }
  }
  .addIncome {
    display: flex;
    top: 7.9vw;
    left: 46%;
    height: 1.7vw;
    color: #fff;
    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 0.8vw;
      height: 0.8vw;
      border: solid 1px #06ffff;
      margin-right: 0.5vw;
      img {
        width: 0.5vw;
        height: 0.5vw;
      }
    }
  }
}
</style>
