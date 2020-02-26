import echarts from 'echarts'
import { LineIcon } from '@/pages/chartOptions/options'
let receivable = [800, 600, 700, 750, 650, 610, 655, 660, 650, 500, 480, 670,]
let unreceived = [600, 410, 450, 450, 480, 500, 600, 600, 490, 400, 430, 570]
let received = receivable.map((ele, index) => {
    return ele - unreceived[index]
})
const funnerlColor = ['#00ffff', '#0066ff', '#3ff514', '#ffffff', '#fe2850'];
/* const funnerlColor = ['#fe2850', '#ffffff', '#3ff514', '#0066ff', '#00ffff']; */

export const leaseAnalyzeVal = {
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
        endValue: 5,
    },],
    grid: {
        top: '20%',
        height: '65%',
        left: '15%'
    },
    legend: {
        icon: 'rect',
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            color: '#fff',
        },
        data: [
            {
                name: '仓储',
            },
            {
                name: '商铺',
            },
            {
                name: '应收',
                icon: LineIcon
                // itemWidth: 14,
                // itemHeight: 14,
            },
            {
                name: '未收',
                icon: LineIcon

            },
            {
                name: '已收',
                icon: LineIcon

            },
        ]
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],

            // data: ['1月', '2月', '3月', '4月', '5月', '6月',],
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
            name: '收入',
            min: 0,
            max: 1000,
            // interval: 50,
            axisLabel: {
                fontSize: 12,
                color: '#fff'
            },
            nameTextStyle: {
                color: 'transparent'
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }

        },
        // {
        //     type: 'value',
        //     name: '温度',
        //     min: 0,
        //     max: 25,
        //     interval: 5,
        //     axisLabel: {
        //         formatter: '{value} °C'
        //     }
        // }
    ],
    series: [
        {
            type: 'bar',
            barWidth: 8,
            name: '仓储',
            data: [200, 175, 300, 500, 256, 767, 135.6, 162.2, 326, 200, 64, 33],
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
            barWidth: 8,
            name: '商铺',
            data: [300, 500, 256, 26.4, 767, 135.6, 326, 200, 64, 33, 200, 175, 300],
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
            name: '应收',
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
            name: '未收',
            type: 'line',
            data: received,
            itemStyle: {
                color: "#fe2850"
            },
        },
        {
            name: '已收',
            type: 'line',
            itemStyle: {
                color: "#42f412"
            },
            data: unreceived
        },
    ]
};

export const radarOptions = {
    grid: {
        top: '25%'
    },
    legend: {
        orient: 'vertical',
        data: ['签约', '意向'],
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
            { name: '仓储', max: 16000 },
            { name: '分拨', max: 30000 },
            { name: '生活', max: 38000 },
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
                name: '签约',
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
                name: '意向',
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


export const propertyAnalysis = {
    backgroundColor: 'transparent',
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
        endValue: 5,
    },],
    grid: {
        top: '25%',
        height: '60%',
        left: '20%'
    },
    legend: {
        icon: 'rect',
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            color: '#fff',
        },
        data: [
            {
                name: '出租率',
            },
            {
                name: '同比',
                icon: LineIcon
            },
            {
                name: '环比',
                icon: LineIcon
                // itemWidth: 14,
                // itemHeight: 14,
            },
        ]
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',],
            axisPointer: {
                type: 'shadow'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                interval: 0,
                fontSize: 12,
                color: '#fff'
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '出租率(% )',
            min: 0,
            max: 80,
            // interval: 50,
            axisLabel: {
                fontSize: 12,
                color: '#fff'
            },
            nameTextStyle: {
                align: 'right',
                fontSize: 10,
                color: '#fff'
            },
            axisLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }

        },
        {
            type: 'value',
            name: '同环(%)',
            min: 0,
            max: 80,
            axisLabel: {
                fontSize: 0,
                color: 'transparent'
            },
            nameTextStyle: {
                fontSize: 10,
                color: '#fff'
            },
            axisLine: {
                show: true
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
            // interval: 5,
        }
    ],
    series: [

        {
            type: 'bar',
            barWidth: 8,
            name: '出租率',
            data: [59, 40, 78, 43, 37, 50, 57, 36, 40, 60, 38, 59],
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
            data: [60, 59, 63, 58, 65, 63, 65, 57, 60, 63, 60, 63],
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
            yAxisIndex: 1,
            data: [62, 66, 63, 66, 70, 60, 62, 61, 68, 64, 69, 67],
            itemStyle: {
                color: "#fe2850"
            },
        },

    ]
}


export const funnelOptions = {
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        data: ['线索', '意向', '协议', '签约', '关闭'],
        itemWidth: 8,
        itemHeight: 8,
        top: '6%',
        textStyle: {
            color: '#fff',
        },
    },
    series: [
        {
            name: '预期',
            type: 'funnel',
            top: '25%',
            left: 'center',
            width: '90%',
            height: '70%',
            color: funnerlColor,
            gap: 5,
            label: {
                show: false,
                formatter: '{b}预期'
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                normal: {
                    opacity: 0.15,
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowColor: 'rgba(0, 0, 0, .6)'
                }
            },
            emphasis: {
                label: {
                    position: 'inside',
                    formatter: '{b}预期: {c}%'
                }
            },
            data: [
                { value: 100, name: '线索' },
                { value: 80, name: '意向' },
                { value: 60, name: '协议' },
                { value: 40, name: '签约' },
                { value: 20, name: '关闭' }
            ]
        },
        {
            name: '实际',
            type: 'funnel',
            top: '25%',
            left: 'center',
            width: '80%',
            height: '72%',
            maxSize: '80%',
            label: {
                position: 'inside',
                formatter: '{c}',
                color: '#fff'
            },
            itemStyle: {
                normal: {
                    opacity: 0.3,
                    borderColor: function (data) {
                        return funnerlColor[data.dataIndex];
                    },
                    borderWidth: 3,
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, .6)'
                }
            },
            emphasis: {
                label: {
                    position: 'inside',
                    formatter: '{b}实际: {c}%'
                }
            },
            data: [
                {
                    value: 80, name: '线索', itemStyle: {
                        normal: {
                            opacity: 0.3,
                            borderColor: "#00ffff",
                            borderWidth: 3,
                            shadowBlur: 0,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowColor: 'rgba(0, 0, 0, .6)'
                        }
                    },
                },
                {
                    value: 50, name: '意向', itemStyle: {
                        normal: {
                            opacity: 0.3,
                            borderColor: "#0066ff",
                            borderWidth: 3,
                            shadowBlur: 0,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowColor: 'rgba(0, 0, 0, .6)'
                        }
                    },
                },
                {
                    value: 30, name: '协议', itemStyle: {
                        normal: {
                            opacity: 0.3,
                            borderColor: "#3ff514",
                            borderWidth: 3,
                            shadowBlur: 0,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowColor: 'rgba(0, 0, 0, .6)'
                        }
                    },
                },
                {
                    value: 10, name: '签约', itemStyle: {
                        normal: {
                            opacity: 0.3,
                            borderColor: "#ffffff",
                            borderWidth: 3,
                            shadowBlur: 0,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowColor: 'rgba(0, 0, 0, .6)'
                        }
                    },
                },
                {
                    value: 5, name: '关闭', itemStyle: {
                        normal: {
                            opacity: 0.3,
                            borderColor: "#fe2850",
                            borderWidth: 3,
                            shadowBlur: 0,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowColor: 'rgba(0, 0, 0, .6)'
                        }
                    },
                }
            ]
        }
    ]
};