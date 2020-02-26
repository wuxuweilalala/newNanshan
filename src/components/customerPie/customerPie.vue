<template>
    <div :style="chartContainerStyle"
      class="chartContainer">
        <div class="chartBody">
            <div class="label allCenter2">
                <div class="default "
                  v-show="showDefaultLabel">
                    <p class="percent">{{getDefaultLabelValue}}<span class="symbol"
                      v-show="labelType==='percent'">%</span></p>
                    <p class="name">{{defaultName}}</p>
                </div>
                <div class="hover"
                  v-show="!showDefaultLabel">
                    <p :style="{
                        color:this.hoverColor
                      }"
                      class="value"
                    >{{getHoverLabelVal}}<span class="symbol"
                      v-show="labelType==='percent'">%</span></p>
                    <p class="name">{{hoverName}}</p>
                </div>
            </div>
            <vECharts :options="options"
              ref='ecInstance'></vECharts>
        </div>
        <slot name="legend">
            <div
              @mouseenter="stopAnimate"
              @mouseleave="startAnimate"
              class="legend xixixihahah"
            >
                <div :key="index"
                  @mouseenter="showHoverValue(item,valueArr[index])"
                  @mouseleave="hideHoverValue"
                  class="item"
                  v-for="(item,index) in itemStyle">
                <span :style="{
                    backgroundColor:item.itemStyle.color
                }"
                  class="circle"></span>
                    <span class="name">{{item.name}}</span>
                    <span class="line"
                      v-show="legendLineShowState"></span>
                    <span class="num"
                      v-show="legendLineShowState">{{valueArr[index]}}</span>
                </div>
            </div>

        </slot>
    </div>
</template>

<script>
    import vECharts from 'vue-echarts';
    import 'echarts/lib/chart/pie';
    import {sum, set as _set} from 'lodash';

    export default {
        name: "customerPie",
        props: {
            valueArr: Array,
            itemStyle: Array,
            chartContainerStyle: Object,
            legendLineShowState: {
                type: Boolean,
                default: true
            },
            labelType: {
                type: String,
                default: 'percent'
            },
        },
        components: {
            vECharts,
        },
        data() {
            return {
                pieSelectTimer: null,
                defaultPercent: 0,
                defaultValue: 0,
                defaultName: '',
                hoverPercent: 0,
                hoverValue: 0,
                hoverName: '',
                hoverColor: '',
                showDefaultLabel: true,
                options: {
                    backgroundColor: 'transparent',
                    series: [
                        {
                            type: 'pie',
                            radius: ['72%', '80%'],
                            avoidLabelOverlap: false,
                            hoverAnimation: false,
                            selectedMode: 'single',
                            selectedOffset: 5,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '12',
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: []
                        },
                        {
                            name: 'innerCircle',
                            type: 'pie',
                            radius: ['60%', '68%'],
                            avoidLabelOverlap: false,
                            hoverAnimation: false,
                            itemStyle: {
                                color: "red"
                            },
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '12',
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: []
                        },
                    ]
                },
                pieSelectName: '',
                pieSelectIndex: 0
            }
        },
        methods: {
            showHoverValue(item, value) {
                let count = sum(this.valueArr);
                this.showDefaultLabel = false
                this.hoverPercent = (value / count * 100).toFixed(2)
                this.hoverValue = value
                this.hoverName = item.name
                this.hoverColor = item.itemStyle.color
            },
            hideHoverValue() {
                this.showDefaultLabel = true;
            },
            stopAnimate() {
                window.clearInterval(this.pieSelectTimer)
                this.$refs.ecInstance.dispatchAction({
                    name: this.pieSelectName,
                    type: 'pieUnSelect',
                })
            },
            startAnimate() {
                let vm = this
                vm.pieSelectTimer = setInterval(() => {
                    let dataLength = vm.itemStyle.length;
                    let index = vm.pieSelectIndex % dataLength;
                    let name = vm.itemStyle[index].name
                    vm.$refs.ecInstance.dispatchAction({
                        type: 'pieSelect',
                        // 图例名称
                        name: name
                    })
                    vm.pieSelectName = name
                    // this.
                    vm.showHoverValue(vm.itemStyle[index], vm.valueArr[index])
                    vm.pieSelectIndex += 1

                    // console.log( this.$refs.ecInstance)
                }, 3000)
            },
        },
        computed: {
            getDefaultLabelValue() {
                return this.labelType === 'percent' ? this.defaultPercent : this.defaultValue
            },
            getHoverLabelVal() {
                return this.labelType === 'percent' ? this.hoverPercent : this.hoverValue
            },
        },
        watch: {
            options: {
                deep: true,
                immediate: true,
                handler(val) {
                    const greyItemStyle = {
                        itemStyle: {
                            color: "rgba(66,244,18,0.2)"
                        }
                    }
                    const emptyItemStyle = {
                        itemStyle: {
                            color: "rgba(66,244,18,0)"
                        }
                    }
                    let count = sum(this.valueArr);
                    // let max = Math.max(...this.valueArr);
                    let valLength = this.valueArr.length;
                    let total = count / ((100 - valLength * 2) / 100);
                    let emptyVal = ~~(total * 0.02 + 0.5);
                    // this.defaultPercent=(max/count).toFixed(4)*100
                    this.defaultValue = this.valueArr[0];
                    this.defaultPercent = (this.valueArr[0] / count * 100).toFixed(2)
                    this.defaultName = this.itemStyle[0].name
                    let newArray = new Array(valLength * 2)
                    for (let i = 0; i < newArray.length; i++) {
                        if (i % 2 === 0) {
                            _set(this, `options.series[0].data[${i}]`, {
                                value: this.valueArr[i / 2],
                                ...this.itemStyle[i / 2]
                            })
                            _set(this, `options.series[1].data[${i}]`, {
                                value: this.valueArr[i / 2],
                                ...greyItemStyle
                            })
                        } else {
                            _set(this, `options.series[0].data[${i}]`, {
                                value: emptyVal,
                                name: '',
                                ...emptyItemStyle
                            })
                            _set(this, `options.series[1].data[${i}]`, {
                                value: emptyVal,
                                name: '',
                                ...emptyItemStyle
                            })
                        }
                    }
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.startAnimate()
                // this.$refs.ecInstance
            })
        },
        beforeDestroy() {
            window.clearInterval(this.pieSelectTimer)
        }
    }
</script>

<style lang="scss"
  scoped>
    .chartContainer {
        background-color: rgba(0, 0, 0, .5);
        padding-top: 1vw;
    }

    .chartBody {
        position: relative;
        float: left;
        width: 8.1vw;
        height: 7.4vw;
        margin-right: 1.5vw;
        padding-bottom: 1vw;

        .label {
            top: calc(50% - 0.5vw);

            > div {
                p {
                    text-align: center;
                    position: relative;
                }

                .value {
                    font-family: DM;
                    font-size: 1vw;
                    color: #00ffff;

                    .symbol {
                        font-size: .6vw;
                    }
                }

                .name {
                    font-size: .6vw;
                    color: #fff;
                }

            }
        }
    }

    .legend {
        padding-top: 1vw;
        padding-bottom: 1.4vw;
        float: left;
        display: flex;
        flex-direction: column;
        /*height: 7.4vw;*/
        width: 6.9vw;
        /*background-color: red;*/
        .item {
            cursor: pointer;
            display: flex;
            width: 100%;
            margin-bottom: 0.8vw;
            flex: 1;

            .circle {
                margin-right: 0.5vw;
                border-radius: 50%;
                display: block;
                width: 0.4vw;
                height: 0.4vw;
            }

            .name {
                line-height: 0.5vw;
                color: #fff;
            }

            .line {
                flex-grow: 1;
                position: relative;
                margin: 0 0.5vw;

                &:before {
                    width: 100%;
                    height: 0.0625vw;
                    left: 0;
                    bottom: 0;
                    background: #2dbef6;
                    display: block;
                    content: '';
                    position: absolute;
                }
            }

            .num {
                line-height: 0.5vw;
                color: #fff;
            }
        }
    }

    .chartContainer .echarts {
        width: 100%;
        height: 100%;
        background: url("~@/assets/app/img/circleBg.png") no-repeat;
        background-size: 100% 100%;
    }
</style>
