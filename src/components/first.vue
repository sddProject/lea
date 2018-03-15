<template id="first1">
  <div style="height:100%;width:100%;background-color: #b5d592">
      <router-link :style="nav1" to="/firstOne"><div>一次</div></router-link>
      <router-link :style="nav1" to="/firstTwo"><div>检验</div></router-link>
      <router-link :style="nav1" to="/firstOne"><div>报废</div></router-link>
      <router-link :style="nav1" to="/firstOne"><div>总装小</div></router-link>
      <router-link :style="nav1" to="/firstOne"><div>总装总</div></router-link>
      <router-link :style="nav1" to="/firstOne"><div>客户</div></router-link>
      <router-view></router-view>
  </div>
</template>
<script>
import {http} from '../config'
export default {
  name: 'first1',
  data () {
    return {
      http: http,
      datas: '',
      nav1: {
        color: '#000',
        width: '',
        height: '50px',
        float: 'left',
        textAlign: 'center',
        textDecoration: 'none'
      }
    }
  },
  created: function () {
    this.$http.get(http + '/nav.json'
      , {name: 'first1'}).then(function (res) {
        this.nav1.width = 100 / 6 + '%'
        console.log(4321, this.nav1.width)
        this.datas = res.data
      },
      function (res) {
        console.log(res)
      })
  },
  mounted: function () {
    console.log(324123, this.datas)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  margin-bottom:1px;
}
</style>
