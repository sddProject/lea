/**
 * Created by sdd on 2017/5/9.
 */
import echarts from 'echarts'
var second2 = new Vue({
    el: '#second-2',
    data: function () {
        return {
            msg: 'datas',
            tap: '盈利概况',
            jl: '净利',
            ml: '毛利'
        }
    },
    mounted: function () {
        this.$http.get('http://localhost:8000/project/data/first.json'
            , {name: 'first1'}).then(function (res) {
                aa(res.data)
            },
            function (res) {
                console.log(res)
            })
        var datas = []
        const aa = function (data) {
            datas.push(data)
        }
        let myChart = echarts.init(document.getElementById('main'))
        myChart.setOption({
            tooltip: {},
            series: [{
                name: '销量',
                type: 'pie',
                radius: '65%',
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center',
                        textStyle: {
                            color: '#fcb336',
                            fontSize: 15,
                            fontWeight: 'bolder'
                        },
                        formatter: function (params) {
                            return parseInt(params.percent) + '%\n' + params.name
                        }
                    }
                },
                data: [{
                    value: 200,
                    name: '累计',
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize: 12,
                                fontWeight: 'bolder'
                            }
                        }
                    }
                },
                {
                    value: 200,
                    name: '累计',
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize: 12,
                                fontWeight: 'bolder'
                            }
                        }
                    }
                }
                ]
            }]
        })
        let myChart1 = echarts.init(document.getElementById('main1'))
        myChart1.setOption({
            tooltip: {},
            xAxis: {
                type: 'category',
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
                minInterval: 0
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })
    }
})
second2.JiLi
data: function () {
  return {
    res:[

    ]
  }
},