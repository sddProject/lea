<template>
  <div>
    <div class="title">{{ msg }}</div>
    <div class="tap">{{tap}}</div>
    <div class="gk" v-on:click="change(1)"><div class="bor">{{jl}}</div></div>
    <div class="gk" v-on:click="change(2)"><div class="bor">{{ml}}</div></div>
    <div class="echart_div" style="clear:both;height:12rem;width:100%;">
      <div id="main" v-bind:style='style'></div>
      <div id="main1" v-bind:style='style'></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data: function () {
    return {
      msg: '盈利',
      tap: '盈利概况',
      jl: '净利',
      ml: '毛利',
      aa: '',
      cc: '',
      ff: '',
      fff: '',
      style: {
        width: '50%',
        float: 'left'
      }
    }
  },
  created: function () {
    this.$http.get('http://localhost:8000/project/data/second.json'
      , {name: 'second'}).then(function (res) {
        this.aa = res.data
        let myChart = echarts.init(document.getElementById('main'))
        let myChart1 = echarts.init(document.getElementById('main1'))
        const my = {
          series: [{
            name: '销量',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
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
            center: ['50%', '50%'],
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
        if (this.aa.mes === '盈利') {
          d(this.aa.one)
        }
        function d (data) {
          my.series[0].data[0].value = data.month.aim
          my1.series[0].data[0].value = data.year.aim
          myChart.setOption(my)
          myChart1.setOption(my1)
        }
      },
      function (res) {
        console.log(res)
      })
  },
  methods: {
    change: function (type) {
      let myChart = echarts.init(document.getElementById('main'))
      let myChart1 = echarts.init(document.getElementById('main1'))
      this.cc = this.aa
      const my = {
        series: [{
          name: '销量',
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
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
          center: ['50%', '50%'],
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
      if (this.cc.mes === '盈利') {
        d(this.aa.one)
      }
      function d (data) {
        my.series[0].data[0].value = data.month.aim
        my1.series[0].data[0].value = data.year.aim
        myChart.setOption(my)
        myChart1.setOption(my1)
      }
      if (type === 1) {
        my.series[0].data[0].value = this.aa.one.month.aim
        my1.series[0].data[0].value = this.aa.one.year.aim
        myChart.setOption(my)
        myChart1.setOption(my1)
      }
      if (type === 2) {
        my.series[0].data[0].value = this.aa.two.month.aim
        my1.series[0].data[0].value = this.aa.two.year.aim
        myChart.setOption(my)
        myChart1.setOption(my1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  padding: 0;
  margin: 0;
}
.tap{
  clear:both;
  width:100%;
  height:2rem;
  line-height:2rem;
  text-align:left;
  color:#000;
  margin-bottom:.5rem;
  border-top:1px solid #EEEEEE;
  border-bottom:1px solid #EEEEEE;
}
.title{
  text-align: center;
  font-size: 1rem;
  width: 100%;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
#main,#main1 {
  width:50%;
  height:12rem;
}
a {
  color: #000;
}
.top{
  width:100%;
  height:230px;
}
.gk{
  float:left;
  width:50%;
  line-height:3rem;
}
.gk .bor{
  width:80%;
  margin-left:9%;
  height:2.6rem;
  line-height:2.6rem;
  text-align:center;
  border:1px solid #979797;
  border-radius: 8%;
  background:#E6E6E6;
}
</style>
