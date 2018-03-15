<template>
  <div id="app">
     <router-view></router-view>
     <div style="width:100%;height:50px;position:fixed;bottom:0;background:#b5d592">
      <router-link :style="style" to="firstOne"><div class="item"><img class="icon" src="../img/hk.png"><div class="hover1">{{taps[0].zonglan}}</div></div></router-link>
      <router-link :style="style" to="Earning"><div class="item"><img class="icon" src="../img/hk.png"><div class="hover1">{{taps[4].yingli}}</div></div></router-link>
      <router-link :style="style" to="hello" ><div class="item"><img class="icon" src="../img/hk.png"><div class="hover1">{{taps[2].hangye}}</div></div></router-link>
      <router-link :style="style" to="have"><div class="item"><img class="icon" src="../img/hk.png"><div class="hover1">{{taps[3].fengxian}}</div></div></router-link>
      <router-link :style="style" to="sale"><div class="item"><img class="icon" src="../img/hk.png"><div class="hover1">{{taps[1].xiaoshou}}</div></div></router-link>
      <router-link :style="style" to="text"><div class="item"><img class="icon" src="../img/hk.png"><div class="hover1">{{taps[5].test}}</div></div></router-link>
      </div>
  </div>
</template>
<script>
import { curWidthPercent, http } from './config'
export default {
  name: 'app',
  data: function () {
    return {
      taps: '',
      style: {
        color: '#EEE',
        width: '',
        height: '50px',
        float: 'left',
        textAlign: 'center',
        textDecoration: 'none',
        paddingTop: '2px'
      }
    }
  },
  created: function () {
    console.log(342, curWidthPercent)
    this.$http.get(http + '/tap.json'
      ).then(function (res) {
        this.style.width = 100 / res.data.data.length + '%'
        this.taps = res.data.data
      },
      function (res) {
        console.log(res)
      })
  }
}
</script>
<style>
.head{
  width: 100%;
  height: 30px;
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   width: 100%;
   height: 100%;
   color: #2c3e50;
}
.item-nav{
  color: #EEE;
  height:60px;
  text-align: center;
  display: inline-block;
}
.hover1:hover{
  color:blue;
}
.hover1:active{
  color:blue;
}
.item{
 color: #000;
  height:50px;
  z-index:1000;
}
.icon{
  display: inline-block;
  height:20px;
}
</style>

