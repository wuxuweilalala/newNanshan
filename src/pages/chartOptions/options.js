import echarts from "echarts";

export let LineIcon = 'path://M200,80h-43.4c-8.2-23.3-30.5-40-56.6-40S51.7,56.7,43.4,80H0v40h43.4c8.2,23.3,30.5,40,56.6,40s48.3-16.7,56.6-40H200V80z'
const chartName = ['珠海***有限公司', '好吵味酒楼', '努力健身房', '阳光雨露有限公司', '煌上煌', '黄焖鸡', '海底捞',]

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
        endValue: 5,
    },],
    grid: {
        top: '25%',
        height: '65%',
        left: '15%'
    },
    legend: {
        icon: 'rect',
        itemGap: 3,
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        data: [

            {
                name: '企业用水',
                // itemWidth: 14,
                // itemHeight: 14,
            },
            {
                name: '商铺用水',

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
            name: '',
            min: 0,
            max: 1000,
            // interval: 50,
            axisLabel: {
                fontSize: 12,
                color: '#fff'
            },
            nameTextStyle: {
                color: '#fff',
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
            name: '企业用水',
            type: 'line',
            data: [600, 550, 550, 580, 680, 750, 480, 605, 550, 680, 700, 620],
            itemStyle: {
                color: "#00e8ff"
            },
            legend: {
                itemWidth: 50,
                itemHeight: 50
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        { offset: 1, color: 'rgba(0,255,255,0.5)' },
                        { offset: 0, color: 'rgba(0,255,255,0)' },
                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            }
        },
        {
            name: '商铺用水',
            type: 'line',
            data: [800, 700, 750, 900, 880, 850, 680, 700, 650, 880, 850, 720],
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        { offset: 1, color: 'rgba(251,44,75,0.5)' },
                        { offset: 0, color: 'rgba(251,44,75,0)' },
                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            }

        },

    ]
}
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
                name: '报事保修累月度数量',
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
            name: '数量',
            min: 0,
            max: 1000,
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
                show: false
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
            max: 1000,
            axisLabel: {
                fontSize: 0,
                color: 'transparent'
            },
            nameTextStyle: {
                fontSize: 10,
                color: '#fff'
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
            // interval: 5,
        }
    ],
    series: [

        {
            type: 'bar',
            barWidth: 8,
            name: '报事保修累月度数量',
            data: [500, 300, 256, 26, 767, 135, 326, 200, 64, 33, 200, 175, 300],
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
            data: [326, 200, 64, 300, 500, 135.6, 326, 200, 8, 182.2, 33, 200, 175, 300],
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
            data: [1, 50, 8, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            itemStyle: {
                color: "#fe2850"
            },
        },

    ]
}
export const stackLineOptions = {
    color: ['#2db7f5', '#ff6600', '#808bc6'],
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
        endValue: 4,
    }],
    legend: {
        icon: 'rect',
        itemGap: 3,
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        data: ['用水', '用电', '亏欠',]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '0%',
        top: '15%',
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
            verticalAlign: 'bottom',
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
            name: '用水',
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
                        fontSize: 10,
                        color: '#fff',
                    },
                    formatter: function (data) {
                        return chartName[data.dataIndex];
                    }
                }
            },
            data: [390, 334, 320, 302, 301, 134, 90]
        },
        {
            name: '用电',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        { offset: 0, color: '#0066ff' },
                        { offset: 1, color: 'rgba(0,102,255,0)' },
                    ]
                )
            },
            data: [90, 134, 120, 132, 101, 134, 90]
        },
        {
            name: '亏欠',
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
            data: [290, 234, 220, 182, 191, 134, 90]
        },

    ]
};
