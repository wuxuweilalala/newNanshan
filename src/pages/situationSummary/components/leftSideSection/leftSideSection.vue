<template>
    <div class="section">
        <div class="chartItem">
            <chartWrapperHeader title="园区基础数据"/>
            <div class="itemBody">
                <div class="item"
                  v-for="(item,index) in basicDataList"
                  :key="index">
                    <span class="iconBg"
                      :class="item.icon"
                    ></span>
                    <p class="value">{{item.value}}</p>
                    <p class="name">{{item.name}}</p>
                </div>
                <div class="item">
                    <span class="iconBg icon-sale"></span>
                    <p class="value">
                        <span class="num">96</span>
                    </p>
                    <p class="name">满意度</p>
                </div>
                <div class="item">
                    <span class="iconBg icon-satisfaction"></span>
                    <p class="value">2996</p>
                    <p class="name">销售回款</p>
                </div>
            </div>
        </div>
        <div class="chartItem">
            <chartWrapperHeader title="占比分析"></chartWrapperHeader>
            <chartSubTitle title="招商分析"></chartSubTitle>
            <customerPie :valueArr="incomeAnalyzeVal"
              :itemStyle="itemStyle"></customerPie>
            <chartSubTitle title="水电分析"></chartSubTitle>
            <customerPie :valueArr="waterAndElectricity"
              :itemStyle="waterAndElectricityItemStyle"></customerPie>
        </div>
        <div class="chartItem">
            <chartWrapperHeader title="租赁分析"></chartWrapperHeader>
            <customerLineAndBar class="customerLineAndBar"
              :options="leaseAnalyzeVal"></customerLineAndBar>
        </div>
    </div>
</template>

<script>
    import chartWrapperHeader from "@/components/chartWrapperHeader/chartWrapperHeader";
    import chartSubTitle from "@/components/chartSubTitle/chartSubTitle";
    import customerPie from "@/components/customerPie/customerPie";
    import customerLineAndBar from "@/components/customerLineAndBar/customerLineAndBar";
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/legend';
    import {leaseAnalyzeVal} from './chartOptions/options'

    export default {
        name: "leftSideSection",
        data() {
            return {
                basicDataList: [
                    {
                        icon: 'icon-park',
                        value: 10000,
                        name: '园区总面积',
                    },
                    {
                        icon: 'icon-businessDistrict',
                        value: 10000,
                        name: '商铺数量',
                    },
                    {
                        icon: 'icon-residence',
                        value: 15649,
                        name: '住宅数量',
                    },
                    {
                        icon: 'icon-apartment',
                        value: 5945,
                        name: '公寓数量',
                    },
                    // {
                    //     icon:'icon-satisfaction',
                    //     value: 96,
                    //     name: '满意度',
                    // },
                    // {
                    //     icon:'icon-sale',
                    //     value: 2996,
                    //     name: '销售回款',
                    // },
                ],
                tableList:[
                    {}
                ],
                incomeAnalyzeVal: [11085, 9526, 5946, 4959, 1258],
                itemStyle: [
                    {
                        name: '办公',
                        itemStyle: {
                            color: "#00ffff"
                        }
                    },
                    {
                        name: '商铺',
                        itemStyle: {
                            color: "#42f412"
                        }
                    },
                    {
                        name: '停车场',
                        itemStyle: {
                            color: "#0066ff"
                        }
                    },
                    {
                        name: '生活配套',
                        itemStyle: {
                            color: "#f62742"
                        }
                    },
                    {
                        name: '楼仓',
                        itemStyle: {
                            color: "#fff"
                        }
                    }
                ],
                waterAndElectricity: [11085, 9526, 5946, 4959],
                waterAndElectricityItemStyle: [
                    {
                        name: '仓储',
                        itemStyle: {
                            color: "#00ffff"
                        }
                    },
                    {
                        name: '住宅',
                        itemStyle: {
                            color: "#42f412"
                        }
                    },
                    {
                        name: '公寓',
                        itemStyle: {
                            color: "#0066ff"
                        }
                    },
                    {
                        name: '商贸',
                        itemStyle: {
                            color: "#f62742"
                        }
                    },

                ],
                leaseAnalyzeVal: leaseAnalyzeVal
            }
        },
        components: {
            chartWrapperHeader,
            chartSubTitle,
            customerPie,
            customerLineAndBar,
        }
    }
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
                    flex-wrap: wrap;
                    display: flex;
                    flex-direction: row;
                    padding: 1vw 0.8vw 1.7vw 1.5vw;
                    position: absolute;
                    top: 1.6vw;
                    bottom: 0;
                    width: 100%;

                    .item {
                        &:nth-child(1) {
                            .iconBg {
                                background-image: url("~@/assets/app/img/icon/park.png");
                            }

                        }

                        &:nth-child(2) {
                            .iconBg {
                                background-image: url("~@/assets/app/img/icon/businessDistrict.png");
                            }

                        }

                        &:nth-child(3) {
                            .iconBg {
                                background-image: url("~@/assets/app/img/icon/residence.png");
                            }

                        }

                        &:nth-child(4) {
                            .iconBg {
                                background-image: url("~@/assets/app/img/icon/apartment.png");
                            }

                        }

                        &:nth-child(5) {
                            .iconBg {
                                background-image: url("~@/assets/app/img/icon/satisfaction.png");
                            }

                        }

                        &:nth-child(6) {
                            .iconBg {
                                background-image: url("~@/assets/app/img/icon/sale.png");
                            }

                        }

                        &:nth-child(5) .value .num {
                            position: relative;
                        }

                        &:nth-child(5) .value .num::after {
                            display: block;
                            content: '%';
                            position: absolute;
                            bottom: 0;
                            font-size: 0.6vw;
                            right: -0.1vw;
                            transform: translate(100%, 0%);
                        }

                        position: relative;
                        margin-bottom: 1vw;
                        justify-content: space-between;
                        width: 50%;

                        .iconBg {
                            display: block;
                            width: 1.8vw;
                            height: 1.8vw;
                            line-height: 2.2vw;
                            text-align: center;
                            background-size: 100% 100%;

                        }

                        .value {
                            font-family: DM;
                            position: absolute;
                            transform: translateY(-30%);
                            top: 0;
                            left: 2.5vw;
                            right: 0;
                            font-size: 1vw;
                            color: #00ffff;
                            text-align: left;
                            padding-right: 1.5vw;

                        }

                        .name {
                            white-space: nowrap;
                            font-size: 1vw;
                            transform: translateY(0%) scale(0.6);
                            bottom: 0;
                            position: absolute;
                            left: 1vw;
                            right: 0;
                            color: #fff;
                            text-align: left;
                            /*padding-left: 0.2vw;*/
                            padding-right: 1.5vw;

                        }
                    }
                }
            }

            &:nth-child(2) {
                flex-basis: 17.7vw;
                /*margin-bottom: 0.6vw;*/
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
