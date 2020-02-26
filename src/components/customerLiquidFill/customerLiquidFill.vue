<template>
    <div>
        <div class="chartWrapper">
            <div class="label allCenter2">
                <span class="value">{{label.value}}</span>
                <span class="name">{{label.name}}</span>
            </div>
            <vECharts :options="options"></vECharts>
        </div>
        <ul class="legend">
            <li class="item"
              :key="index"
              v-for="(item,index) in seriesData">
                <span class="name">{{item.name}}</span>
                <span class="value DM">{{item.value}}</span>
                <span class="bottomLine"></span>
            </li>
        </ul>
    </div>
</template>

<script>
    import vECharts from "vue-echarts";
    import "./echarts-liquidfill/src/liquidFill";
    import echarts from "echarts";

    export default {
        name: "customerLiquidFill",
        props: ["seriesData", "label"],
        components: {
            vECharts
        },
        data() {
            return {
                options: {
                    series: [
                        {
                            color: ["rgba(0,255,255,0)", "rgba(0,255,255,.1)"],
                            type: "liquidFill",
                            radius: "55%",
                            center: ["50%", "50%"],
                            data: [
                                {
                                    name: "服务次数",
                                    value: 0.4,
                                    itemStyle: {
                                        normal: {
                                            // color: '#000000'
                                            color: "transparent"
                                        }
                                    }
                                    // amplitude: 0,
                                    // waveAnimation: false,
                                    // animationDuration: 0,
                                },
                                {
                                    name: "受理次数",
                                    value: 0.5,
                                    // amplitude: 2
                                },
                                {
                                    name: "bg",
                                    value: 0.7,
                                    waveAnimation: false
                                    // itemStyle: {
                                    //     normal: {
                                    //         color: '#000000'
                                    //     }
                                    // }
                                }
                                // {
                                //     name:'办结次数',
                                //     value:5598
                                // },
                                //
                                // {
                                //     name:'有偿服务次数',
                                //     value:4688
                                // },
                                // {
                                //     name:'有偿服务收入',
                                //     value:4783
                                // },
                            ],
                            backgroundStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    1,
                                    0,
                                    0, //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                                    [
                                        {offset: 0, color: "rgba(0,255,255,.4)"},
                                        {offset: 1, color: "rgba(0,255,255,0)"}
                                    ] //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                                )
                            },
                            outline: {
                                show: false
                            },
                            label: {
                                show: false,
                                color: "#294D99",
                                insideColor: "#fff",
                                fontWeight: "bold"
                                // normal:{
                                // fontSize: 20,
                                //     formatter: function(param) {
                                //         return param.name + '\n'
                                //              + param.value;
                                //     }
                                // }
                            }
                        }
                    ]
                }
            };
        }
    };
</script>

<style scoped
  lang="scss">
    .chartWrapper {
        float: left;
        position: relative;
        margin-left: -1vw;
        width: 10.1vw;
        height: 10.1vw;
        background: url("~@/assets/app/img/propertyAnalysis/liquidfill.png") no-repeat;
        background-size: 100% 100%;

        .label {
            font-family: DM;
            width: 8vw;
            z-index: 5;
            /*left: 35%;*/
            /*top: 55%;*/
            .value {
                width: 100%;
                float: left;
                font-size: 2vw;
                color: #00ffff;
                text-align: center;
            }

            .name {
                width: 100%;
                float: left;
                color: #fff;
                text-align: center;
            }
        }
    }

    .echarts {
        position: absolute;
        /*left: 40%;*/
        /*transform-origin: 50% 50%;*/
        /*transform: scale(0.5);*/
        width: 100%;
        height: 100%;
    }

    .legend {
        display: flex;
        width: 7.3vw;
        float: right;
        height: 100%;
        padding: 1.3vw 0;
        flex-direction: column;
        align-content: space-between;

        li {
            flex: 1;
            position: relative;
            cursor: pointer;

            &:last-child {
                .bottomLine {
                    background-image: unset

                }
            }

            span {
                color: #fff;

                &.name {
                    line-height: 1.8vw;
                    float: left;
                }

                &.value {
                    line-height: 1.8vw;
                    float: right;
                    margin-right: 0.2vw;
                    font-size: 0.8vw;
                    color: #00ffff;
                }


                &.bottomLine {

                    background-image: linear-gradient(
                        to right,
                        rgba(0, 255, 255, 0),
                        #00ffff
                    );
                    position: absolute;
                    width: 100%;
                    height: 0.12vw;
                    bottom: 0;
                    left: 0;
                }
            }
        }
    }
</style>
