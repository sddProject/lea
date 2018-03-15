<template>
  <div>
    <div class="tap">{{tap}}</div>
    <div class="qus">
      <div class="qs" v-on:click="change2(1)"><div>{{yf}}</div></div>
      <div class="qs qsr" v-on:click="change2(2)"><div>{{lj}}</div></div>
      <div class="tab1">
        <table v-for="f in ff">
          <tr><td>时间</td><td>当年达成</td><td>去年同期</td><td>同比</td></tr>
          <tr v-for="m in f"><td>{{m.month}}</td><td>{{m.dndc}}</td><td>{{m.qntq}}</td><td>{{m.ratio}}</td></tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      tap: '盈利趋势',
      yf: '月份',
      lj: '累计',
      ff: '',
      fff: ''
    }
  },
  created: function () {
    this.$http.get('http://localhost:8000/project/data/ylqs.json'
      , {name: 'second'}).then(function (res) {
        this.ff = res.data.result[0]
        this.fff = res.data.result
      },
      function (res) {
        console.log(res)
      })
  },
  methods: {
    change2: function (type) {
      if (type === 1) {
        this.ff = this.fff[0]
      }
      if (type === 2) {
        this.ff = this.fff[1]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.qus{
  clear:both;
}
.tab1{
  clear:both;
}
.tab1 table{
  border-collapse: collapse;
  text-align:center;
  width:100%;
  height:auto;
}
.tab1 table tr td{
  border:1px solid #EEEEEE;
}
.tab1 table tr td{
  width:25%;
}
.qus{
  width:90%;
  height:auto;
  margin:0 auto;
}
.qs{
  float:left;
  width:40%;
  height:2rem;
  line-height:2rem;
  text-align:center;
  border:1px solid #979797;
  border-radius: 10%;
  background:#E6E6E6;
  margin-bottom:20px;
}
.qsr{
    float:right;
}
</style>
