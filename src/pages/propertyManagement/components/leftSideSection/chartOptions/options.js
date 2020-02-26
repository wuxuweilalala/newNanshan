import echarts from 'echarts'
import {LineIcon} from '@/pages/chartOptions/options'
import {getVw} from "@/utils/domMethods";
let receivable=[800, 600, 700, 750, 650, 610, 655, 660, 650, 500, 480, 670,]
let unreceived =[600, 410, 450, 450, 480, 500, 600, 600, 490, 400, 430, 570]
let received =receivable.map((ele,index)=>{
     return ele-unreceived[index]
})

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
    // dataZoom: [{
    //     type: 'inside',
    //     zoomOnMouseWheel: false,
    //     startValue: 0,
    //     endValue: 5,
    // },],
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
                name: '住宅',
            },
            {
                name: '仓储',
            },
            {
                name: '商贸',
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六','周日' ],

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
            barWidth: getVw(6),
            name: '住宅',
            data: [300, 500, 256, 26.4, 767, 135.6, 326, 200, 64, 33, 200, 175, 300],
            itemStyle: {
                // color: "#00e8ff"
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        {offset: 0, color: 'rgba(254,40,80,0)'},
                        {offset: 1, color: '#fe2850'}
                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            },
        },

        {
            type: 'bar',
            barWidth: getVw(6),
            name: '仓储',
            data: [200, 175, 300, 500, 256, 767, 135.6, 162.2, 326, 200, 64, 33],
            itemStyle: {
                // color: "#00e8ff"
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        {offset: 0, color: 'rgba(1,88,247,0)'},
                        {offset: 1, color: '#0158f7'}
                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            },

        },
        {
            type: 'bar',
            barWidth: getVw(6),
            name: '商贸',
            data: [300, 500, 256, 26.4, 767, 135.6, 326, 200, 64, 33, 200, 175, 300],
            itemStyle: {
                // color: "#00e8ff"
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,       //4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
                    [
                        {offset: 0, color: 'rgba(0,255,255,0)'},
                        {offset: 1, color: '#00ffff'}
                    ]                //数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数. offset的范围是0 ~ 1, 用于表示位置
                )
            },
        },
        {
            name: '同比',
            type: 'line',
            data: receivable,
            itemStyle: {
                color: "#ffffff"
            },
            legend: {
                itemWidth: 50,
                itemHeight: 50
            }
        },
        // {
        //     name: '同比',
        //     type: 'line',
        //     data: received,
        //     itemStyle: {
        //         color: "#fe2850"
        //     },
        // },
        {
            name: '环比',
            type: 'line',
            itemStyle: {
                color: "#42f412"
            },
            data: unreceived
        },
    ]
};

