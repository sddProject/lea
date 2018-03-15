<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul v-for="(item, $index) in items">
      <li class="click" @click="changeClick(item, $index)" :class="{'active':item.active,'unactive':!item.active}">{{item.select}}
      <span class="aa" v-show="item.active">中国</span>
      <span class="aa" v-show="item.active">中国1</span>
      <span class="aa" v-show="item.active">中国2</span>
      <span class="aa" v-show="item.active">中国3</span>
      </li>
    </ul>

  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'hello',
  data () {
    return {
      active: false,
      msg: 'Welcome to Your',
      taps: '',
      items: [
        {select: '第一行'},
        {select: '第二行'},
        {select: '第三行'},
        {select: '第四行'}
      ],
      bb: ''
    }
  },
  created: function () {
    this.$http.get('http://localhost:8000/project/data/first.json'
      , {name: 'hello'}).then(function (res) {
        console.log(res.data)
      },
      function (res) {
        console.log(res)
      })
    this.$http.get('http://localhost:8000/project/data/nav1.json'
      , {name: 'hello'}).then(function (res) {
        this.taps = res.data.data
        console.log(1234545988, this.taps)
      },
      function (res) {
        console.log(res)
      })
  },
  methods: {
    changeClick (item, index) {
      console.log(7536, item.select)
      this.$nextTick(function () {
        this.items.forEach(function (item, index) {
          Vue.set(item, 'active', false)
        })
        Vue.set(item, 'active', true)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  float:left;
  width:25%;
}

li {
  display: inline-block;
}
.click span {
  display:block;
  position:absolute;
  width:100%;
  left:0px;
}
</style>
