<template>
  <div>
    <div class="tap">{{tap}}</div>
    <div class="bottom">
      <div class="fx" v-on:click="change(1)">区域分析</div>
      <div class="fx mr10" v-on:click="change(2)">产品分析</div>
      <div class="fx kh" v-on:click="change(3)">客户分析</div>
      <div style="clear:both;">
        <div class="qs" style="margin-top:20px;" v-on:click="change(4)"><div>本月</div></div>
        <div class="qs qsr"  style="margin-top:20px;" v-on:click="change(5)"><div>本年</div></div>
      </div>
      <div ref="bottom1" class="bottom-table" v-for="area in area">
        <table>
          <tr><td>区域</td><td>净利</td><td>同比</td><td>毛利</td><td>同比</td><td>目标</td><td>完成率</td></tr>
          <tr v-for="bu in area"><td>{{bu.area}}<div v-if="ck" v-on:click="toggle" style="width:5px;height:5px;border:1px solid #000;float:right;margin-top:.7rem;"><div></div></div></td><td>{{bu.jl}}</td><td>{{bu.jltb}}</td><td>{{bu.ml}}</td><td>{{bu.mltb}}</td><td>{{bu.mb}}</td><td>{{bu.wcl}}</td></tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      tap: '盈利分析',
      ck: true,
      area: '',
      areas: '',
      allData: '',
      click: ''
    }
  },
  created: function () {
    this.$http.get('http://localhost:8000/project/data/area.json'
      , {name: 'second'}).then(function (res) {
        this.allData = res.data
        this.area = this.allData.result[0]
        this.areas = this.allData.result
      },
      function (res) {
        console.log(res)
      })
  },
  methods: {
    change: function (type) {
      if (type === 1) {
        this.ck = true
        this.area = this.allData.result[0]
        this.areas = this.allData.result
      }
      if (type === 2) {
        this.ck = false
        this.area = this.allData.result1[0]
        this.areas = this.allData.result1
      }
      if (type === 3) {
        this.ck = false
        this.area = this.allData.result2[0]
        this.areas = this.allData.result2
      }
      if (type === 4) {
        this.click = 1
        this.area = this.areas[0]
      }
      if (type === 5) {
        this.click = 2
        this.area = this.areas[1]
      }
    },
    toggle: function () {
      this.area = this.allData.result[0]
      for (let i = 0; i < this.area.data.length; i++) {
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
  width:90%;
  height:auto;
  margin:0 auto;
  clear:both;
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
.bottom{
  width:90%;
  height:100%;
  margin:0 auto;
  color:#686868;
}
.fx{
  float:left;
  width:29%;
  height:2rem;
  line-height:2rem;
  text-align:center;
  border:1px solid #EEEEEE;
}
.mr10{
  margin-left:6%;
}
.kh{
  float:right;
}
.bottom-table{
  position:relative;
  clear:both;
  overflow-y: hidden;
  height:100%;
  width:100%;
}
.bottom-table table{
  width:100%;
  border-collapse: collapse;
  text-align:center;
  font-size:.8rem;
}
.bottom-table table tr td{
  border:1px solid #EEEEEE;
}
.bottom-table table tr td{
  width:13%;
  line-height:1.6rem;
}
.bottom-table table tr td:last-child{
   width:15%;
 }
 .bottom-table table tr td:nth-child(1){
   width:20%;
 }
</style>
