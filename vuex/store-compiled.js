
import echarts from 'echarts';
import { http } from './config';
export default {
  name: 'second',
  data: function data() {
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
    };
  },
  methods: {
    JiLi: function JiLi() {
      console.log(this.aa);
    },
    MaLi: function MaLi() {
      this.secondpage = 1;
    }
  },
  mounted: function mounted() {
    console.log(2345, http);
    this.$http.get(http + '/second.json', { name: 'second' }).then(function (res) {
      console.log(res.data);
      this.aa = res.data;
      var cc = res.data.mes;
      console.log(34, cc);
      if (cc === '盈利') {
        if (this.firstpage === 1) {
          bb(res.data.one.month.aim);
        }
        if (this.secondpage === 1) {
          dd(res.data);
        }
      }
    }, function (res) {
      console.log(res);
    });
    var myChart = echarts.init(document.getElementById('main'));
    var myChart1 = echarts.init(document.getElementById('main1'));
    var myChart2 = echarts.init(document.getElementById('main2'));
    var my = {
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
            formatter: function formatter(params) {
              return parseInt(params.percent) + '%\n' + params.name;
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
        }, {
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
        }]
      }]
    };
    function dd(data) {
      my.series[0].data[0].value = data.two.month.aim;
      myChart2.setOption(my);
    }
    function bb(data) {
      my.series[0].data[0].value = data;
      myChart.setOption(my);
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
      });
    }
  }
};

//# sourceMappingURL=store-compiled.js.map