<template>
    <div class="section">
        <div class="chartItem">
            <chartWrapperHeader title="园区概览"/>
            <div class="itemBody">
                <div class="circulate">
                    <div class="portrait">
                        <div class="outer allCenter"></div>
                        <div class="cirlce allCenter"></div>
                    </div>
                    <div class="chart">
                        <div class="label">
                            <p class="text">实时人流通行率</p>
                            <p class="value"><span>8</span>人/min</p>
                        </div>
                        <vECharts :options="circulateOptions"
                          class="echarts"></vECharts>
                    </div>

                </div>
                <div class="numberCards">
                    <ul>
                        <li :key="index"
                          v-for="(card,index) in cardList">
                            <p class="value DM">{{card.value}}</p>
                            <p class="name">{{card.name}}</p>
                            <div class="splitLine"></div>
                        </li>

                    </ul>
                </div>
                <div class="settled">
                    <vECharts :options="settledOptions"></vECharts>
                    <div class="label vCenter">
                        <span class="name">入驻企业数量</span>
                        <span class="value DM">146<span>家</span></span>
                        <div class="bottomBar"></div>
                    </div>
                </div>
            </div>

        </div>
        <div class="chartItem">
            <chartWrapperHeader title="物业服务实况"></chartWrapperHeader>
            <customerLiquidFill
              :label="liquidillLabel"
              :seriesData="liquidillSeriesData"
              class="liquidfill"
            ></customerLiquidFill>
        </div>
        <div class="chartItem">
            <chartWrapperHeader title="设备检测数据"></chartWrapperHeader>
            <div class="itemBody">
                <div class="numberCards">
                    <ul>
                        <li :key="index"
                          v-for="(card,index) in deviceDetectedData">
                            <p class="value DM">{{card.value}}</p>
                            <p class="name">{{card.name}}</p>
                            <div class="splitLine"></div>
                        </li>

                    </ul>
                </div>
                <chartSubTitle class="chartSubTitle"
                  title="设备运行数据"></chartSubTitle>
                <ul class="lineChart">
                    <li v-for="(item,index) in lineChartList"
                      :key='index'>
                        <span class="icon"
                          :style="{
                            backgroundImage:`url(${item.imageUrl})`
                        }"></span>
                        <div class="barBody">
                            <div class="label">
                                <span class="name">{{item.name}}</span>
                                <span class="title">运行</span>
                                <span class="value DM">{{lineSeriesData[0][index]+lineSeriesData[1][index]}}</span>
                            </div>
                            <div class="bars">
                                <div
                                  :style="{
                                    width:getBarWidth(lineSeriesData[0][index])
                                  }"
                                  class="bar"
                                ></div>
                                <div
                                  :style="{
                                    width:getBarWidth(lineSeriesData[1][index])
                                  }"
                                  class="bar"
                                ></div>
                            </div>
                        </div>
                    </li>
                </ul>
                <!--                <vECharts-->
                <!--                  :options="stackLineOptions"-->
                <!--                  class="lineChart"-->
                <!--                ></vECharts>-->

            </div>


        </div>
    </div>
</template>

<script>
    import vECharts from "vue-echarts";
    import {sum as _sum} from 'lodash'
    import customerLiquidFill from "@/components/customerLiquidFill/customerLiquidFill";
    import customerStackLine from "@/components/customerStackLine/customerStackLine";
    import chartWrapperHeader from "@/components/chartWrapperHeader/chartWrapperHeader";
    import chartSubTitle from "@/components/chartSubTitle/chartSubTitle";
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/legend';
    import {
        circulateOptions,
        settledOptions,
        stackLineOptions
    } from './chartOptions/options'

    export default {
        name: "leftSideSection",
        data() {
            return {
                circulateOptions,
                settledOptions,
                stackLineOptions,
                liquidillLabel: {
                    value: 15,
                    name: "今日工作总量"
                },
                liquidillSeriesData: [
                    {
                        name: "客户服务满意率",
                        value: '96%'
                    },
                    {
                        name: "巡检任务完成率",
                        value: '96%'
                    },

                    {
                        name: "今日工单结单率",
                        value: '94%'
                    },

                    {
                        name: "巡更任务完成率",
                        value: '97%'
                    },
                    {
                        name: "设备任务完成率",
                        value: '94%'
                    },
                ],
                cardList: [
                    {
                        value: '96.7%',
                        name: "入住率"
                    },
                    {
                        value: '130144',
                        name: "入驻面积"
                    },
                    {
                        value: '6543',
                        name: "今日客流总入"
                    },
                    {
                        value: '3,545',
                        name: "今日客流总出"
                    },
                ],
                deviceDetectedData: [
                    {
                        value: 3232,
                        name: "设备总数"
                    },
                    {
                        value: 2207,
                        name: "运行数"
                    },
                    {
                        value: 56,
                        name: "异常数"
                    },
                    {
                        value: '3176',
                        name: "正常数"
                    },
                ],
                lineSeriesData: [
                    [500, 319, 250, 169],
                    [50, 80, 60, 32]
                ],
                lineChartList: [
                    {
                        imageUrl: require('@/assets/app/img/circulate/illumination.png'),
                        name: '智能照明'
                    },
                    {
                        imageUrl: require('@/assets/app/img/circulate/talkback.png'),
                        name: '智能对讲'
                    },
                    {
                        imageUrl: require('@/assets/app/img/circulate/waterMeter.png'),
                        name: '智能水表'
                    },
                    {
                        imageUrl: require('@/assets/app/img/circulate/airMoving.png'),
                        name: '送排风'
                    },
                ]
            }
        },
        computed: {
            lineSeriesTotalData() {
                let dataArray = this.lineSeriesData[0].map((ele, index) =>
                    this.lineSeriesData.map((childEle) => childEle[index])
                )
                let totalArray = dataArray.map(ele => _sum(ele))
                return totalArray
            },
            lineSeriesMax() {
                return Math.max(...this.lineSeriesTotalData)
            },
            getBarWidth() {
                return (value) =>
                    (value / this.lineSeriesMax) * 100 + '%'
            }

        },
        components: {
            vECharts,
            chartWrapperHeader,
            chartSubTitle,
            customerLiquidFill,
            customerStackLine,
        }
    }
</script>

<style lang="scss"
  scoped>
    .section {
        display: flex;
        flex-direction: column;
        padding-bottom: 1.9vh;

        .chartItem {
            position: relative;
            background-color: rgba(0, 0, 0, 0.5);
            margin-bottom: 1vw;

            &:first-child {
                flex-basis: 17.5vw;
                /*margin-bottom: 0.6vw;*/
                .itemBody {
                    flex-wrap: wrap;
                    display: flex;
                    flex-direction: column;
                    padding: 1vw 0.8vw 0.6vw 0;
                    position: absolute;
                    top: 1.6vw;
                    bottom: 0;
                    width: 100%;

                    .circulate {
                        width: 100%;
                        padding-left: 0.7vw;
                        flex-basis: 4.6vw;
                        padding-bottom: 0.5vw;
                        border-bottom: 0.0625vw solid rgba(0, 255, 255, 0.2);

                        .portrait {
                            position: relative;
                            float: left;
                            width: 4.1vw;
                            height: 4.1vw;

                            .outer {
                                transform-origin: 50% 50%;
                                animation: turn 5s linear infinite;
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background-image: url("~@/assets/app/img/circulate/circulateOutCircle_2.png");
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                            }

                            @keyframes turn {
                                0% {
                                    transform: rotate(0deg);
                                }
                                25% {
                                    transform: rotate(90deg);
                                }
                                50% {
                                    transform: rotate(180deg);
                                }
                                75% {
                                    transform: rotate(270deg);
                                }
                                100% {
                                    transform: rotate(360deg);
                                }
                            }

                            .cirlce {
                                width: 1.1vw;
                                height: 1.2vw;
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-image: url("~@/assets/app/img/circulate/circulateInner.png");
                            }
                        }

                        .chart {
                            position: relative;
                            padding-left: 1vw;
                            float: left;
                            width: 12vw;
                            height: 100%;

                            .label {
                                width: 4.3vw;
                                .text {
                                    line-height: 1.9vw;
                                    white-space: nowrap;
                                    font-size: 0.6vw;
                                    color: #fff;
                                    /*margin-top: 0.6vw;*/
                                    /*margin-bottom: 0.7vw;*/
                                }

                                .value {
                                    color: #fb2c4b;
                                    font-size: 0.7vw;

                                    span {
                                        font-family: DM;
                                        margin-right: 0.5vw;
                                        font-size: 1.7vw;
                                    }
                                }
                            }

                            .echarts {
                                padding-top: 1vw;
                                padding-bottom: 1vw;
                                top: 0.6vw;
                                right: 0;
                                position: absolute;
                                width: 7.5vw;
                                height: 100%;
                            }
                        }
                    }

                    .numberCards {
                        padding: 0.5vw 0;
                        position: relative;
                        border-bottom: 0.0625vw solid rgba(0, 255, 255, 0.2);
                        /*background-color: #00e8ff;*/
                        width: 100%;
                        flex-grow: 1;
                        height: 2.6vw;

                        ul {
                            height: 100%;
                        }

                        li {
                            position: relative;
                            float: left;
                            width: 25%;
                            height: 100%;
                            padding-left: 0.5vw;

                            p {
                                white-space: nowrap;
                            }

                            .value {
                                alignment-baseline: top;
                                font-size: 1vw;
                                color: #00eeff
                            }

                            .name {
                                transform-origin: 0 0;
                                transform: scale(0.7);
                                font-size: 0.6vw;
                                color: #ffffff;
                            }

                            .splitLine {
                                background-color: rgba(0, 255, 255, 0.5);
                                position: absolute;
                                width: 0.0625vw;
                                right: 0;
                                top: 0.2vw;
                                bottom: 0.2vw;

                            }

                            &:first-child {
                                .value {
                                    color: #fb2c4b
                                }
                            }

                            &:last-child {
                                .splitLine {
                                    visibility: hidden;

                                }
                            }
                        }
                    }

                    .settled {
                        position: relative;
                        height: 7vw;
                        /*flex-grow: 1;*/
                        overflow: visible;
                        padding-left: 1vw;
                        .label{
                            width: 6.5vw;
                            right: 0;
                            .name {
                                white-space: nowrap;
                                display: block;
                                transform-origin: 0 0;
                                transform: scale(0.6);
                                font-size: 1vw;
                                color: #fff;
                            }
                            .value {
                                position: relative;
                                color: #00ffff;
                                font-size: 1.5vw;

                                span {
                                    transform-origin: 0 100%;
                                    transform: scale(0.6);
                                    font-size: 1vw;
                                    position: absolute;
                                    bottom: 0;
                                    right: -1.5vw;
                                }
                            }

                            .bottomBar {
                                position: absolute;
                                width: calc(100% - 1vw);
                                height: 0.5vw;
                                left: 0;
                                bottom: 0;
                                background-color: rgba(0, 255, 255, 0.1);
                            }
                        }
                        .echarts {
                            width: 6.8vw;
                            height: 100%;
                        }
                    }
                }
            }

            &:nth-child(2) {
                flex-basis: 10.5vw;

                .liquidfill {
                    width: 100%;
                    position: absolute;
                    top: 1.7vw;
                    bottom: 0;
                    /*padding-right: 0.7vw;*/

                    /deep/ .chartWrapper {
                        width: 9vw;
                        height: 9vw;

                    }

                    /deep/ .legend {
                        padding: 0.1vw 0 0;
                        margin-right: 0.6vw;
                        /*padding-left: 1vw;*/
                    }
                }
            }

            &:nth-child(3) {
                flex-grow: 1;

                /*flex-basis: 13.5vw;*/
                margin-bottom: 0;

                .itemBody {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 100%;
                    position: absolute;
                    top: 1.6vw;
                    bottom: 0;

                    .numberCards {
                        padding: 0.3vw 0;
                        position: relative;
                        border-bottom: 0.0625vw solid rgba(0, 255, 255, 0.2);
                        /*background-color: #00e8ff;*/
                        width: 100%;
                        flex-basis: 2.6vw;

                        ul {
                            height: 100%;
                        }

                        li {
                            position: relative;
                            float: left;
                            width: 25%;
                            height: 100%;
                            padding-left: 0.5vw;

                            p {
                                white-space: nowrap;
                            }

                            .value {
                                alignment-baseline: top;
                                font-size: 1vw;
                                color: #00eeff
                            }

                            .name {
                                transform-origin: 0 0;
                                transform: scale(0.7);
                                font-size: 0.6vw;
                                color: #ffffff;
                            }

                            .splitLine {
                                background-color: rgba(0, 255, 255, 0.5);
                                position: absolute;
                                width: 0.0625vw;
                                right: 0;
                                top: 0.2vw;
                                bottom: 0.2vw;

                            }

                            &:nth-child(3) {
                                .value {
                                    color: #fb2c4b
                                }
                            }

                            &:last-child {
                                .splitLine {
                                    visibility: hidden;
                                }
                            }
                        }
                    }

                    /deep/ title {
                        margin-top: 0.5vw;
                        margin-bottom: 0.5vw;
                        flex-grow: 1;
                    }

                    .lineChart {
                        padding-right: 0.6vw;
                        padding-top: 0.5vw;
                        width: 100%;
                        flex-basis: 10vw;
                        display: flex;
                        flex-direction: column;
                        align-content: space-between;

                        li {
                            width: 100%;
                            height: 25%;
                            display: flex;
                            align-content: space-between;

                            .icon {
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                width: 1.5vw;
                                height: 1.5vw;
                                margin-right: 1vw;
                            }

                            .barBody {
                                position: relative;
                                height: 100%;
                                flex-grow: 1;

                                .label {
                                    height: 0.7vw;
                                    line-height: 0.7vw;

                                    .name {
                                        float: left;
                                        position: relative;
                                        font-size: 0.7vw;
                                        color: #fff;
                                        margin-right: 0.5vw;

                                        &:after {
                                            position: absolute;
                                            content: '';
                                            right: -0.5vw;
                                            top: 0.1vw;
                                            bottom: 0.1vw;
                                            width: 0.1vw;
                                            background-color: #00ffff;
                                            display: block;
                                        }
                                    }

                                    .title {
                                        float: left;
                                        transform-origin: 0 0;
                                        transform: scale(0.6) translateY(0.1vw);
                                        margin-left: 0.5vw;
                                        font-size: 1vw;
                                        color: #fff;
                                    }

                                    .value {
                                        font-size: 0.7vw;
                                        color: #00ffff;
                                    }

                                }

                                .bars {
                                    width: 100%;
                                    position: absolute;
                                    height: 0.3vw;
                                    bottom: 0.7vw;
                                    left: 0;

                                    .bar {
                                        height: 100%;
                                        float: left;

                                        &:first-child {
                                            background-image: linear-gradient(
                                                to right,
                                                rgba(0, 255, 255, 0),
                                                rgba(0, 255, 255, 1)
                                            );
                                        }

                                        &:nth-child(2) {
                                            background-image: linear-gradient(
                                                to right,
                                                rgba(251, 44, 75, 0),
                                                rgba(251, 44, 75, 1)
                                            );
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


            }
        }

    }

</style>
