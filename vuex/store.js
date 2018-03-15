/**
 * Created by sdd on 2017/5/11.
 */
import echarts from 'echarts'
import { http } from './config'
export default {
  name: 'second',
  data: function () {
    return {
      msg: '盈利',
      tap: '盈利概况',
      jl: '净利',
      ml: '毛利',
      aa: '',
      cc: '',
      firstpage: 1,
      secondpage: 1,
      isjl: '',
      isml: '',
      oneaim: '',
      twoaim: ''
    }
  },
  methods: {
    JiLi: function () {
      console.log(this.aa)
    },
    MaLi: function () {
      this.secondpage = 1
    }
  },
  mounted: function () {
    console.log(2345,http)
    this.$http.get(http +'/second.json'
      , {name: 'second'}).then(function (res) {
        console.log(res.data)
        this.aa = res.data
        let cc = res.data.mes
        console.log(34, cc)
        if (cc === '盈利') {
          if (this.firstpage === 1) {
            bb(res.data.one.month.aim)
          }
          if (this.secondpage === 1) {
            dd(res.data)
          }
        }
      },
      function (res) {
        console.log(res)
      })
    let myChart = echarts.init(document.getElementById('main'))
    let myChart1 = echarts.init(document.getElementById('main1'))
    let myChart2 = echarts.init(document.getElementById('main2'))
    const my = {
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
          value: '',
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
            value: 78,
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
    }
    function dd (data) {
      my.series[0].data[0].value = data.two.month.aim
      myChart2.setOption(my)
    }
    function bb (data) {
      my.series[0].data[0].value = data
      myChart.setOption(my)
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
  }
}

/*
 //要修改
 import echarts from 'echarts'
 let myChart = echarts.init(document.getElementById('main'))
 let myChart1 = echarts.init(document.getElementById('main1'))
 const my = {
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
 value: '',
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
 value: 78,
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
 }
 const my1 = {
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
 value: '',
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
 value: 78,
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
 };
 export default {
 name: 'second',
 data: function () {
 return {
 msg: '盈利',
 tap: '盈利概况',
 jl: '净利',
 ml: '毛利',
 aa: '',
 cc: '',
 ff: '',
 ee: '',
 isjl: '',
 isml: '',
 firstpage: false,
 secondpage: true,
 nu: '',
 oneaim: '',
 twoaim: ''
 }
 },
 methods: {
 JiLi: function (firstpage) {
 this.firstpage = !this.firstpage
 console.log(this.aa)
 if (this.aa.mes === '盈利') {
 if (this.firstpage) {
 return dd(this.aa.one)
 } else if (this.secondpage) {
 console.log(42234, this.nu)
 return dd(this.aa.two)
 }
 function dd (data) {
 console.log(3425, data)
 my.series[0].data[0].value = data.month.aim
 my1.series[0].data[0].value = data.year.aim
 myChart.setOption(my)
 myChart1.setOption(my1)
 }
 }
 },
 MaLi: function (secondpage) {
 this.secondpage = !this.secondpage
 }
 },
 watch: function (nu) {
 this.nu = 1
 console.log(this.nu)
 },
 mounted: function () {
 this.$http.get('http://localhost:8000/project/data/second.json'
 , {name: 'second'}).then(function (res) {
 console.log(res.data)
 this.aa = res.data
 },
 function (res) {
 console.log(res)
 })
 }
 }
 */
