import echarts from 'echarts'
import { LineIcon } from '@/pages/chartOptions/options'
let receivable = [800, 600, 700, 750, 650, 610, 655, 660, 650, 500, 480, 670,]
let unreceived = [600, 410, 450, 450, 480, 500, 600, 600, 490, 400, 430, 570]
let received = receivable.map((ele, index) => {
    return ele - unreceived[index]
})
const funnerlColor = ['#00ffff', '#0066ff', '#3ff514', '#fe2850'];
const borderColor = ['#3ff514', '#fe2850', '#00ffff', '#0066ff'];
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
        top: '20%',
        height: '50%',
        left: '15%'
    },
    legend: {
        show: false,
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
                name: '开门',
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
            name: '开门率(%)',
            min: 0,
            max: 100,
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
    ],
    series: [
        {
            name: '开门',
            type: 'line',
            data: [61, 59, 73, 60, 80, 79, 81, 56, 63, 78, 68, 78],
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

    ]
}
export const barOptions = {
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
        height: '55%',
        left: '15%'
    },
    legend: {
        show: false,
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
                name: '开门',
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
                show: false,
                // interval: 0
            },
            axisLabel: {
                interval: 0,
                fontSize: 12,
                color: 'rgba(255,255,255,1)'
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '万元',
            min: 0,
            max: 80,
            // interval: 50,
            axisLabel: {
                fontSize: 12,
                color: 'rgba(255,255,255,1)'
            },
            nameTextStyle: {
                color: 'rgba(255,255,255,1)',
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
    ],
    series: [
        {
            name: '开门',
            type: 'bar',
            data: [61, 59, 73, 60, 82, 79, 81, 56, 63, 78, 68, 78],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        { offset: 1, color: '#00ffff' },
                        { offset: 0, color: 'rgba(0,255,255,0)' },
                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            },
            barWidth: 10,
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
        data: ['收入', '水电', '物业', '其他'],
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
                { value: 100, name: '收入' },
                { value: 80, name: '水电' },
                { value: 60, name: '物业' },
                { value: 20, name: '其他' }
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
            gap: 5,
            label: {
                position: 'inside',
                formatter: '{c}',
                color: '#fff'
            },
            itemStyle: {

                opacity: 0.3,
                borderColor: 'rgba(12, 13, 43, .9)',
                borderWidth: 3,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, .6)'

            },
            emphasis: {
                label: {
                    position: 'inside',
                    formatter: '{b}实际: {c}%'
                }
            },
            data: [
                {
                    value: 80, name: '收入',
                    itemStyle: {
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
                    value: 50, name: '水电',
                    itemStyle: {
                        normal: {
                            opacity: 0.3,
                            borderColor: "#0066ff",
                            borderWidth: 3,
                            shadowBlur: 0,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowColor: 'rgba(0, 0, 0, .6)'
                        }
                    }
                },
                {
                    value: 40, name: '物业',
                    itemStyle: {
                        normal: {
                            opacity: 0.3,
                            borderColor: "#3ff514",
                            borderWidth: 3,
                            shadowBlur: 0,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowColor: 'rgba(0, 0, 0, .6)'
                        }
                    }
                },
                {
                    value: 15, name: '其他',
                    itemStyle: {
                        normal: {
                            opacity: 0.3,
                            borderColor: "#fe2850",
                            borderWidth: 3,
                            shadowBlur: 0,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowColor: 'rgba(0, 0, 0, .6)'
                        }
                    }
                }
            ]
        }
    ]
};
