import echarts from 'echarts'
let receivable = [800, 600, 700, 750, 650, 610, 655, 660, 650, 500, 480, 670,]
let unreceived = [600, 410, 450, 450, 480, 500, 600, 600, 490, 400, 430, 570]
let received = receivable.map((ele, index) => {
    return ele - unreceived[index]
})

const chartName = ['B3专业市场', 'B2-2品牌展示区', 'B7商办及配套商业', 'B7专业市场', '综合楼', 'B1行政大楼', 'B3办公楼']
export const lineOptions = {
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
        endValue: 4,
    },],
    grid: {
        top: '25%',
        height: '65%',
        left: '15%'
    },
    legend: {
        icon: 'rect',
        itemGap: 10,
        itemWidth: 8,
        itemHeight: 8,
        top: '5%',
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        data: [

            {
                name: '中介',
                // itemWidth: 14,
                // itemHeight: 14,
            },
            {
                name: '网络渠道',

            },
            {
                name: '线下门店',

            },
        ]
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisTick: {
                show: false,
                // interval: 0
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
            name: '人数(k)',
            min: 0,
            max: 1.2,
            // interval: 50,
            axisLabel: {
                fontSize: 12,
                color: '#fff'
            },
            nameTextStyle: {
                color: '#fff'
            },
            axisLine: {
                // show: false
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
            name: '中介',
            type: 'line',
            data: [0.7, 0.63, 0.75, 0.63, 0.78, 0.76, 0.79, 0.6, 0.7, 0.75, 0.73, 0.76],
            itemStyle: {
                color: "#06ffff"
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(6,255,255,0.4)'
                }, {
                    offset: 1,
                    color: 'rgba(225,36,61,0)'
                }])
            },
            legend: {
                itemWidth: 50,
                itemHeight: 50
            }
        },
        {
            name: '网络渠道',
            type: 'line',
            data: [0.72, 0.76, 0.73, 0.78, 0.9, 0.68, 0.7, 0.67, 0.8, 0.7, 0.78, 0.76],
            itemStyle: {
                color: "#f62742"
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(246,39,66,0.4)'
                }, {
                    offset: 1,
                    color: 'rgba(225,36,61,0)'
                }])
            },
        },
        {
            name: '线下门店',
            type: 'line',
            data: [0.43, 0.62, 0.6, 0.58, 0.55, 0.54, 0.45, 0.47, 0.49, 0.50, 0.59, 0.62],
            itemStyle: {
                color: "#ffffff"
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,255,255,0.4)'
                }, {
                    offset: 1,
                    color: 'rgba(225,36,61,0)'
                }])
            },
        },
    ]
}

export const stackLineOptions = {
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
        endValue: 4
    }],
    legend: {
        icon: 'rect',
        itemGap: 10,
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        data: ['线索', '意向', '协议', '签约', '退园']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '4%',
        top: '9%',
        containLabel: true
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
        data: ['01', '02', '03', '04', '05', '06', '07'],
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
            name: '线索',
            type: 'bar',
            stack: '总量',
            barWidth: '10%',
            itemStyle: {
                color: "#00ffff"
            },
            label: {
                normal: {
                    show: true,
                    position: [0, '-20'],
                    textStyle: {
                        fontSize: 12,
                        color: '#fff',
                    },
                    formatter: function (data) {
                        return chartName[data.dataIndex];
                    }
                }
            },
            data: [320, 302, 301, 334, 390, 134, 90]
        },
        {
            name: '意向',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: "#0066ff"
            },
            data: [120, 132, 101, 134, 90, 134, 90]
        },
        {
            name: '协议',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: "#3ff514"
            },
            data: [220, 182, 191, 234, 290, 134, 90]
        },
        {
            name: '签约',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: "#ffffff"
            },
            data: [150, 212, 201, 154, 190, 134, 90]
        },
        {
            name: '退园',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: "#fe2850"
            },
            data: [934, 765, 600, 425, 290, 134, 90]
        }
    ]
};

