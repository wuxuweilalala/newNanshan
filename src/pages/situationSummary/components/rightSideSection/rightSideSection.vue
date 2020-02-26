<template>
    <div class="section">
        <div class="chartItem">
            <chartWrapperHeader title="客户分析"/>
            <chartSubTitle title="客户类型面积分析"></chartSubTitle>
            <customerPie :valueArr="areaCategoryArr"
              :chartContainerStyle="{
                paddingLeft:'1vw'
              }"
              :legendLineShowState="false"
              :itemStyle="itemStyle"></customerPie>
            <chartSubTitle title="客户类型数量占比"></chartSubTitle>
            <customerPie
              :chartContainerStyle="{
                paddingLeft:'1vw'
              }"
              :valueArr="areaCategoryArr"
              :legendLineShowState="false"
              labelType="value"
              :itemStyle="itemStyle"></customerPie>
        </div>
        <div class="chartItem">
            <chartWrapperHeader title="招商分析"></chartWrapperHeader>
            <div class="itemBody">
                <customerLine :options="lineOptions"
                ></customerLine>
            </div>
        </div>
        <div class="chartItem">
            <chartWrapperHeader title="物业分析"></chartWrapperHeader>
            <customerLineAndBar :options="propertyAnalysis"
              class="customerLineAndBar"></customerLineAndBar>
        </div>
    </div>
</template>

<script>
    import chartWrapperHeader from "@/components/chartWrapperHeader/chartWrapperHeader";
    import chartSubTitle from "@/components/chartSubTitle/chartSubTitle";
    import customerPie from "@/components/customerPie/customerPie";
    import customerLine from "@/components/customerLine/customerLine";
    import customerLineAndBar from "@/components/customerLineAndBar/customerLineAndBar";
    import {lineOptions, propertyAnalysis} from '@/pages/chartOptions/options'
    import {set as _set} from 'lodash'
    // import customerLineAndBar from "@/pages/customerLineAndBar/customerLineAndBar";
    import echarts from "echarts";

    let maxBarStyle = {
        color: new echarts.graphic.LinearGradient(
            0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
            [
                {offset: 0, color: 'rgba(246,39,66,0)'},
                {offset: 1, color: '#f62742'}
            ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
        )
    }
    export default {
        name: "rightSideSection",
        data() {
            return {
                areaCategoryArr: [3512, 2001, 1863, 800],
                itemStyle: [
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
                        name: '商贷',
                        itemStyle: {
                            color: "#f62742"
                        }
                    },
                ],
                lineOptions: lineOptions,
                propertyAnalysis: propertyAnalysis,
                watchBarData: [300, 500, 256, 26.4, 767, 135.6, 326, 200, 64, 33, 200, 175, 300],
            }
        },
        computed: {
            // watchBarData() {
            //     // let itemStyleArr = new Array(this.barData.length).fill({})
            //     for (let i = 0; i < this.barData.length; i++) {
            //         this.$set(this.barData[i], 'value', this.barData[i])
            //     }
            //     debugger
            //     let maxIndex = this.barData.indexOf(Math.max(...this.barData));
            //             return this.propertyAnalysis.series[0].data
            // }
        },
        watch: {
            'watchBarData': {
                deep: true,
                immediate: true,
                handler(barData) {
                    let itemStyleArr = []
                    for (let i = 0; i < barData.length; i++) {
                        _set(itemStyleArr,`[${i}].value`,barData[i])
                    }
                    let maxIndex = barData.indexOf(Math.max(...barData));
                    itemStyleArr[maxIndex].itemStyle=maxBarStyle;
                    // this.$set(itemStyleArr,maxIndex,maxBarStyle)
                    // console.log(maxIndex+'最大值下标')
                    this.propertyAnalysis.series[0].data=itemStyleArr
                    // let options=val;
                    // const valueArray=options.series[0].data=;
                }
            }
        },
        components: {
            chartWrapperHeader,
            chartSubTitle,
            customerLine,
            customerLineAndBar,
            customerPie,
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
            background-color: rgba(0,0,0,0.5);
            &:first-child {
                flex-basis: 17.7vw;
                /*margin-bottom: 0.6vw;*/

            }

            &:nth-child(2) {
                flex-basis: 13.5vw;
                /*margin-bottom: 0.6vw;*/
                .itemBody {
                    padding-bottom: 1vw;
                    /*padding: 1vw 2vw 1.7vw;*/
                    position: absolute;
                    top: 1.6vw;
                    bottom: 0;
                    width: 100%;
                }
            }

            &:nth-child(3) {
                flex-grow: 1;

                .customerLineAndBar {
                    position: absolute;
                    padding-top: 0.5vw;
                    top: 1.6vw;
                    bottom: 0;
                    /*height: 100%;*/
                    width: 100%;
                }
            }
        }

    }
</style>
