<template>
  <div>
    <div class="tap">{{tap}}</div>
    <div class="qus">
      <div class="qs" v-on:click="change1(1)"><div>{{jl}}</div></div>
      <div class="qs qsr" v-on:click="change1(2)"><div>{{ml}}</div></div>
      <div class="tab">
        <table v-for="e in ee">
          <tr><td>时间</td><td>目标</td><td>达成</td><td>完成率</td><td>同比</td></tr>
          <tr v-for="ss in e"><td>{{ss.date}}</td><td>{{ss.mb}}</td><td>{{ss.dc}}</td><td>{{ss.wcl}}</td><td>{{ss.ratio}}</td></tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      tap: '盈利概览',
      jl: '净利',
      ml: '毛利',
      ee: '',
      eee: ''
    }
  },
  created: function () {
    this.$http.get('http://localhost:8000/project/data/yll.json'
      , {name: 'second'}).then(function (res) {
        this.ee = res.data.result[0]
        this.eee = res.data.result
      },
      function (res) {
        console.log(res)
      })
  },
  methods: {
    change1: function (type) {
      if (type === 1) {
        this.ee = this.eee[0]
      }
      if (type === 2) {
        this.ee = this.eee[1]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tap{
  border-bottom:1px solid #eeeeee;
  border-top:1px solid #eeeeee;
  width:100%;
  height:2rem;
  padding-top:0.5rem;
}
.tab{
  clear:both;
}
.tab table{
  border-collapse: collapse;
  text-align:center;
  width:100%;
  height:auto;
}
.tab table tr td{
  border:1px solid #EEEEEE;
  width:20%;
}
.qus{
  clear:both;
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
