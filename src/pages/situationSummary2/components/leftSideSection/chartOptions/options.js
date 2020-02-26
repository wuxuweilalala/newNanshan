import echarts from 'echarts'
const chartName = ['智能照明', '智能对讲', '智能水表', '送排风', ]

export const circulateOptions = {
    visualMap: {
        show: false,
        dimension: 0,
        inRange: {},
        pieces: [

        ],  //pieces的值由动态数据决定

    },
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
         width:'100%',
         top: '0',
         height: '100%',
         left: '10%'
    },
    legend: {
        show: false
    },
    xAxis: [
        {
            type: 'category',
            data: ['0时','1时', '2时', '3时', '4时', '5时', '6时', '7时', '8时', '9时', '10时', '11时', '12时',],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false,
                // interval: 0
            },
            axisLabel: {
                show: false,

            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            // interval: 50,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle:{
                    color:'grey',
                    type:'dashed'
                }
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
            name: '实时人流通行率',
            type: 'line',
            data: [600, 550, 550, 580, 700, 730, 750, 730, 725, 705, 700, 620],
            symbolSize: 0,
            itemStyle: {
                color: "#00e8ff"
            },
            legend: {
                itemWidth: 50,
                itemHeight: 50
            },
            LineStyle: {},
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        {offset: 1, color: 'rgba(0,255,255,0.5)'},
                        {offset: 0, color: 'rgba(0,255,255,0)'},
                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            }
        },

    ]

}
export const  settledOptions={

    legend: {
        show:false,
    },
    color: ['#00ffff', '#fe2850'],
    radar: {
        center : ['50%', '55%'],
        radius: '60%',
        nameGap:5,
        // shape: 'circle',
        name: {
            textStyle: {
                fontSize:11,
                color: '#fff',
                backgroundColor: 'transparent',
            }
        },
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: false,
            areaStyle: { // 分隔区域的样式设置。
                color: ['rgb(2,22,23)', 'rgb(2,22,23)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: 'rgba(214,214,214,0.2)'
            }
        },
        axisTick:{
        },
        splitLine: {
            show:true,
            lineStyle: {
                color: 'rgba(214,214,214,0.2)', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        },
        indicator: [
            { name: '互联网', max: 6500 },
            { name: '金融', max: 16000 },
            { name: '仓库', max: 30000 },
            { name: '公寓', max: 38000 },
            { name: '其他', max: 52000 },
        ]
    },
    series: [
        {
        name: '入驻企业数量',
        type: 'radar',
            symbolSize:0,
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
        ]
    }]

}
export const stackLineOptions={

    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    dataZoom: [{
        type: 'inside',
        zoomOnMouseWheel: false,
        orient: 'vertical',
        startValue: 0,
        endValue: 3
    }],
    legend: {
        show:false
    },
    grid: {
        left: '15%',
        right: '4%',
        bottom: '0',
        top: '9%',
        containLabel: false
    },
    xAxis: {
        show: false,
        type: 'value',
        axisTick: {
            show: false,
            // interval: 0
        },

        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            fontSize: 12,
            color: '#fff'
        },
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['01', '02', '03', '04', ],
        axisLabel: {
            color: '#fff',
            borderColor: '#00ffff',
            padding: [5, 5, 5, 5],
            borderWidth: '100%',
            borderRadius: [30]
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name: '正常',
            type: 'bar',
            stack: '总量',
            barWidth: '10%',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        { offset: 0, color: '#00ffff' },
                        { offset: 1, color: 'rgba(0,255,255,0)' },
                    ]
                )
            },
            label: {

                normal: {
                    show: true,
                    position: [0, '-15'],
                    textStyle: {
                        fontSize: 12,
                        color: '#fff',
                    },
                    formatter: function (data) {
                        return chartName[data.dataIndex];
                    }
                }
            },
            data: [500, 319, 250, 169, ]
        },
        {
            name: '异常',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [

                        {offset: 0, color: '#FB2C4B'},
                        {offset: 1, color: 'rgba(251,44,75,0)'},
                    ]
                )
            },
            data: [50, 80, 60, 32]
        },


    ]

}
