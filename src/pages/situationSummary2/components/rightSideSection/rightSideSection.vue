<template>
    <div class="section">
        <div class="chartItem">
            <chartWrapperHeader title="环境监测"/>
            <div class="itemBody">
                <div :key="index"
                  class="item"
                  v-for="(item,index) in environmentDetectedData">
                    <span
                      :style="{
                            backgroundImage:`url(${item.imageUrl})`
                        }"
                      class="iconBg"></span>
                    <p class="value"
                      v-if="item.hasUnit">
            <span class="num">
              {{item.value}}
              <span class="unit">{{item.unit}}</span>
            </span>
                    </p>
                    <p class="value"
                      v-else>{{item.value}}</p>
                    <p class="name">{{item.name}}</p>
                </div>
            </div>

        </div>
        <div class="chartItem">
            <chartWrapperHeader title="能耗概况"></chartWrapperHeader>
            <div class="itemBody">
                <customerPie :itemStyle="energySummaryItemStyle"
                  :valueArr="energySummaryArr"
                >
                    <div class="summary"
                      slot="legend">
                        <div class="item">
                            <p class="text">今日用水</p>
                            <p class="value DM">
                                <span class="num">503</span>
                                <span class="unit">m</span>
                            </p>
                        </div>

                        <div class="item">
                            <p class="text">今日用电</p>
                            <p class="value DM">
                                <span class="num">33300</span>
                                <span class="unit">kw/h</span>
                            </p>
                        </div>

                    </div>
                </customerPie>
            </div>
        </div>
        <div class="chartItem">
            <chartWrapperHeader title="人员安防监测实况"></chartWrapperHeader>
            <div class="itemBody">
                <ul class="visitorCard">
                    <li :key="index"
                      v-for="(item,index) in visitorCardData">
                        <div class="avatar">
                            <div :style="{
                                backgroundImage:`url(${item.imageUrl})`
                        }"
                              class="img"
                            ></div>
                        </div>
                        <div class="info">
                            <p class="name">{{item.name}}</p>
                            <p class="time">
                                <span>{{item.time}}前</span>
                            </p>
                        </div>
                        <div class="btns">
                            <span class="btn iconfont icon-phone"></span>
                            <span class="btn iconfont icon-video"></span>
                        </div>
                    </li>

                </ul>
                <div class="numberCards">
                    <ul>
                        <li :key="index"
                          v-for="(card,index) in staffRecord">
                            <p class="value DM"
                              v-html="card.valueDescription"></p>
                            <p class="name">{{card.name}}</p>
                            <div class="splitLine"></div>
                        </li>

                    </ul>
                </div>
                <chartSubTitle title="本月各区域告警排行(次)"></chartSubTitle>
            </div>
        </div>
    </div>
</template>

<script>
    import chartWrapperHeader from "@/components/chartWrapperHeader/chartWrapperHeader";
    import chartSubTitle from "@/components/chartSubTitle/chartSubTitle";
    import customerPie from "@/components/customerPie/customerPie";
    
    import {set as _set} from 'lodash'
    import echarts from "echarts";

    export default {
        name: "rightSideSection",
        data() {
            return {
                environmentDetectedData: [
                    {
                        imageUrl: require('@/assets/app/img/circulate/temperature.png'),
                        hasUnit: true,
                        value: '28.55',
                        name: "大堂温度",
                        unit: "℃",
                    },
                    {
                        imageUrl: require('@/assets/app/img/circulate/PM2.5.png'),
                        hasUnit: true,
                        value: '44.00',
                        name: "大堂PM2.5",
                        unit: "ppm",
                    },
                    {
                        imageUrl: require('@/assets/app/img/circulate/temperature.png'),
                        hasUnit: true,
                        value: '33.10',
                        name: "机房温度",
                        unit: "℃"
                    },
                    {
                        imageUrl: require('@/assets/app/img/circulate/parking.png'),
                        value: '10.3',
                        hasUnit: true,
                        unit: "ppm",
                        name: "今日用水",
                    },
                ],
                energySummaryArr: [3512, 2001, 1863, 1840, 800],
                energySummaryItemStyle: [
                    {
                        name: 'A座',
                        itemStyle: {
                            color: "#00ffff"
                        }
                    },
                    {
                        name: 'B座',
                        itemStyle: {
                            color: "#42f412"
                        }
                    },
                    {
                        name: 'C座',
                        itemStyle: {
                            color: "#0066ff"
                        }
                    },
                    {
                        name: 'D座',
                        itemStyle: {
                            color: "#f62742"
                        }
                    },
                    {
                        name: 'E座',
                        itemStyle: {
                            color: "#ffffff"
                        }
                    },
                ],
                staffRecord: [
                    {
                        value: '6',
                        valueDescription: '<p><span class="arrow">↑</span><span class="num">6人</span></p>',
                        name: "设备机房通行记录"
                    },
                    {
                        value: '-6',
                        valueDescription: '<p><span class="num">481</span><span class="arrow">↓环比</span><span class="percent">-60</span>%</p>',
                        name: "今日报警总量"
                    },
                ],
                visitorCardData: [
                    {
                        name: '马小丽',
                        time: '2分钟',
                        imageUrl: require('@/assets/app/img/circulate/female.png'),
                    },
                    {
                        name: '覃树强',
                        time: '4分钟',
                        imageUrl: require('@/assets/app/img/circulate/male.png'),
                    },
                    {
                        name: '李晓媛',
                        time: '4分钟',
                        imageUrl: require('@/assets/app/img/circulate/female.png'),
                    },
                    {
                        name: '张小凡',
                        time: '9分钟',
                        imageUrl: require('@/assets/app/img/circulate/male.png'),
                    },
                ]

            }
        },
        computed: {
        },
        components: {
            chartWrapperHeader,
            chartSubTitle,
            customerPie,
        }
    }
</script>

<style lang="scss"
  scoped>
    .section {
        display: flex;
        flex-direction: column;

        .chartItem {
            margin-bottom: 1.9vh;
            position: relative;
            background-color: rgba(0, 0, 0, 0.5);

            &:first-child {
                flex-basis: 8.9vw;

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
                        .iconBg {
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                        }

                        .value .num {
                            font-family: DM;
                            position: relative;
                        }

                        .value .unit {
                            display: block;
                            position: absolute;
                            bottom: 0;
                            font-size: 0.6vw;
                            right: -0.5vw;
                            transform: translate(100%, 0%);
                            font-size: 0.6vw;
                        }

                        &:nth-child(4) .value .unit::after {
                            display: block;
                            content: "2";
                            position: absolute;
                            bottom: 0;
                            font-size: 1vw;
                            right: 0;
                            transform-origin: -100% 100%;
                            transform: translate(150%, -10%) scale(0.5);
                        }

                        &:nth-child(4) .value .num::after {
                            display: block;
                            position: absolute;
                            bottom: 0;
                            font-size: 0.6vw;
                            right: 0;
                            transform: translate(100%, 30%);
                        }

                        position: relative;
                        margin-bottom: 1vw;
                        justify-content: space-between;
                        width: 50%;

                        .iconBg {
                            display: block;
                            width: 1.7vw;
                            height: 1.7vw;
                            line-height: 2.2vw;
                            text-align: center;
                            background-size: 100% 100%;
                        }

                        .value {
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
                            transform-origin: 0 0;
                            transform: translateY(50%) scale(0.6);
                            bottom: 0;
                            position: absolute;
                            left: 2.5vw;
                            right: 0;
                            color: #fff;
                            text-align: left;
                            /*padding-left: 0.2vw;*/
                            padding-right: 1.5vw;
                        }
                    }
                }

                /*margin-bottom: 0.6vw;*/

            }

            &:nth-child(2) {
                flex-basis: 13.2vw;
                /*margin-bottom: 0.6vw;*/
                .itemBody {
                    padding-bottom: 1vw;
                    /*padding: 1vw 2vw 1.7vw;*/
                    position: absolute;
                    top: 1.6vw;
                    bottom: 0;
                    width: 100%;

                    /deep/ .chartBody {
                        width: 11.1vw;
                        height: 10.3vw;
                        float: right;
                        margin-right: 0.6vw;
                    }

                    .summary {
                        padding-top: 1.7vw;
                        text-align: left;
                        width: 4.7vw;
                        margin-left: 1.1vw;
                        float: left;

                        .item {
                            &:first-child {
                                margin-bottom: 1.9vw;

                                .value {
                                    .unit {
                                        position: relative;

                                        &:before {
                                            content: '2';
                                            position: absolute;
                                            top: -0.1vw;
                                            right: -0.5vw;
                                            display: block;
                                        }
                                    }
                                }
                            }

                            .text {
                                white-space: nowrap;
                                font-size: 0.7vw;
                                color: #ffffff;
                            }

                            .value {
                                white-space: nowrap;
                                font-size: 1.1vw;
                                color: #00ffff;

                                .num {
                                    float: left;
                                }

                                .unit {
                                    float: left;
                                    transform-origin: 0 100%;
                                    display: block;
                                    transform: scale(0.6);
                                    font-size: 1vw;
                                    margin-left: 0.5vw;
                                }
                            }

                        }
                    }
                }
            }

            &:nth-child(3) {
                flex-grow: 1;
                margin-bottom: 0;

                .itemBody {
                    display: flex;
                    flex-direction: column;
                    position: absolute;
                    top: 2vw;
                    bottom: 0;
                    /*height: 100%;*/
                    width: 100%;

                    .visitorCard {
                        padding: 0 0.3vw;
                        flex-wrap: wrap;
                        width: 100%;
                        flex-basis: 6.7vw;
                        margin-bottom: 0.5vw;
                        display: flex;

                        li {
                            box-shadow: rgba(0, 255, 255, 0.15) 0px 0px 1vw inset;
                            position: relative;
                            padding: 0.4vw 0 0.5vw 0.3vw;
                            background-color: rgba(0, 0, 0, 0.3);
                            width: 8.3vw;
                            margin: auto;
                            height: 2.7vw;

                            &:nth-child(odd) {
                                margin-right: 0.2vw;
                            }

                            .avatar {
                                position: relative;
                                margin-right: 0.2vw;
                                background-image: url('~@/assets/app/img/circulate/avatarBorder.png');
                                background-size: 100% 100%;
                                background-repeat: no-repeat;
                                float: left;
                                width: 1.5vw;
                                height: 1.9vw;

                                .img {
                                    background-size: 100% 100%;
                                    background-repeat: no-repeat;
                                    position: absolute;
                                    left: 0.1vw;
                                    right: 0.1vw;
                                    top: 0.1vw;
                                    bottom: 0.1vw;
                                }
                            }

                            .info {
                                float: left;
                                width: 4.7vw;
                                height: 100%;
                                color: #fff;

                                .name {
                                    padding-left: 0.1vw;
                                    font-size: 0.6vw;
                                    line-height: 0.9vw;
                                }

                                .time {
                                    white-space: nowrap;
                                    line-height: 0.9vw;
                                    text-align: left;
                                    padding-left: 0.3vw;
                                    height: 0.9vw;
                                    background-color: rgba(0, 255, 255, 0.1);

                                    span {
                                        transform-origin: 0 50%;
                                        display: block;
                                        transform: scale(0.5);
                                        font-size: 1vw;
                                    }
                                }
                            }

                            .btns {
                                position: absolute;
                                top: 0;
                                right: 0;
                                height: 100%;
                                width: 1vw;

                                .btn {
                                    background-color: rgba(0, 255, 255, 0.1);
                                    text-align: center;
                                    background-repeat: no-repeat;
                                    background-size: 0.8vw 0.8vw;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    width: 100%;
                                    color: #fff;
                                    vertical-align: middle;
                                    font-size: 0.6vw;
                                    height: calc(50% - 0.05vw);

                                    &:first-child {
                                        margin-bottom: 0.1vw
                                    }
                                }
                            }
                        }
                    }

                    .numberCards {
                        flex-basis: 2vw;
                        margin-bottom: 0.5vw;

                        ul {
                            height: 100%;
                        }

                        li {
                            position: relative;
                            float: left;
                            width: 50%;
                            height: 100%;
                            padding-left: 0.5vw;

                            p {
                                white-space: nowrap;
                            }

                            .value {
                                font-size: 1vw;
                                color: #fb2c4b
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
                                top: 0.4vw;
                                bottom: 0.4vw;

                            }

                            &:first-child {
                                padding-left: 0.7vw;

                                .value {
                                    color: #00eeff
                                }
                            }

                            &:last-child {
                                padding-left: 2.3vw;

                                .splitLine {
                                    visibility: hidden;
                                }
                            }
                        }

                    }

                }
            }
        }

    }
</style>
