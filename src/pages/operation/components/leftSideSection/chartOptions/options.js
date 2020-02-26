import echarts from 'echarts'
import { LineIcon } from '@/pages/chartOptions/options'
import { getVw } from "@/utils/domMethods";
let receivable = [80, 60, 70, 75, 65, 61, 65, 66, 65, 50, 48, 67,]
let unreceived = [60, 41, 45, 45, 48, 50, 60, 60, 49, 40, 43, 57]
let received = receivable.map((ele, index) => {
    return ele - unreceived[index]
})


export const radarOptions = {
    grid: {
        top: '25%',
        left: '10% '
    },
    legend: {
        orient: 'vertical',
        data: ['已收', '无效'],
        bottom: 65,
        right: 10,
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 10,
        textStyle: {
            color: '#fff',
        },
    },
    color: ['#00ffff', '#fe2850'],
    radar: {
        radius: '60%',
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: 'transparent',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['rgb(2,22,23)', 'rgb(2,22,23)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: 'rgb(0,255,255,.2)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgb(0,255,255,.2)', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        },
        indicator: [
            { name: '办公', max: 6500 },
            { name: '厂房', max: 16000 },
            { name: '仓库', max: 30000 },
            { name: '公寓', max: 38000 },
            { name: '其他', max: 52000 },
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [5500, 13000, 5000, 35000, 22000],
                name: '已收',
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#00ffff'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#00ffff'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                }
            },
            {
                value: [4000, 11000, 3000, 30000, 30000],
                name: '无效',
                areaStyle: {
                    normal: { // 单项区域填充样式
                        color: {
                            type: 'linear',
                            x: 0, //右
                            y: 0, //下
                            x2: 1, //左
                            y2: 1, //上
                            colorStops: [{
                                offset: 0,
                                color: '#fe2850'
                            }, {
                                offset: 0.5,
                                color: 'rgba(0,0,0,0)'
                            }, {
                                offset: 1,
                                color: '#fe2850'
                            }],
                            globalCoord: false
                        },
                        opacity: 1 // 区域透明度
                    }
                }
            }
        ]
    }]
};

export const serviceAnalyzeVal = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [{
        type: 'inside',
        zoomOnMouseWheel: false,
        startValue: 0,
        endValue: 4,
    },],
    grid: {
        top: '30%',
        height: '45%',
        left: '15%'
    },
    legend: {
        icon: 'rect',
        itemGap: getVw(25),
        itemWidth: getVw(10),
        itemHeight: getVw(10),
        textStyle: {
            color: '#fff',
        },
        data: [
            {
                name: '租赁费',
            },
            {
                name: '物业费',
            },
            {
                name: '水电费',
            },
            {
                name: '其他',
            },
            {
                name: '同比',
                icon: LineIcon
                // itemWidth: 14,
                // itemHeight: 14,
            },
            {
                name: '环比',
                icon: LineIcon

            },

        ]
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
            axisPointer: {
                type: 'shadow'
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                fontSize: 12,
                color: '#fff'
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '总收入(%)',
            min: 0,
            max: 100,
            // interval: 50,
            axisLabel: {
                fontSize: 12,
                color: '#fff'
            },
            nameTextStyle: {
                color: '#fff'
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }

        },
    ],
    series: [
        {
            type: 'bar',
            barWidth: getVw(6),
            name: '水电费',
            stack: "环比",
            data: [30, 20, 25, 26.4, 26, 13, 32, 20, 24, 33, 20, 17, 30],
            itemStyle: {
                // color: "#00e8ff"
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        { offset: 0, color: 'rgba(1,88,247,0)' },
                        { offset: 1, color: '#0158f7' }
                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            },
        },
        {
            type: 'bar',
            barWidth: getVw(6),
            name: '其他',
            stack: "环比",
            data: [30, 30, 25, 26.4, 36, 13, 32, 20, 34, 33, 20, 17, 30],
            itemStyle: {
                // color: "#00e8ff"
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        { offset: 0, color: 'rgba(254,40,80,0)' },
                        { offset: 1, color: '#fe2850' }
                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            },
        },
        {
            type: 'bar',
            barWidth: getVw(6),
            name: '物业费',
            stack: "同比",
            data: [20, 17, 30, 50, 25, 76, 13, 16, 32, 20, 64, 33],
            itemStyle: {
                // color: "#00e8ff"
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        { offset: 0, color: 'rgba(66,244,18,0)' },
                        { offset: 1, color: '#42f412' }
                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            },

        },
        {
            type: 'bar',
            barWidth: getVw(6),
            name: '租赁费',
            stack: "同比",
            data: [30, 50, 25, 26.4, 46, 13, 32, 20, 34, 33, 20, 17, 30],
            itemStyle: {
                // color: "#00e8ff"
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        { offset: 0, color: 'rgba(0,255,255,0)' },
                        { offset: 1, color: '#00ffff' }
                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            },
        },
        {
            name: '同比',
            type: 'line',
            data: receivable,
            itemStyle: {
                color: "#00e8ff"
            },
            legend: {
                itemWidth: 50,
                itemHeight: 50
            }
        },
        {
            name: '环比',
            type: 'line',
            itemStyle: {
                color: "#fe2850"
            },
            data: unreceived
        },
    ]
};
