<template>
  <div class="text"
  :class="{'down':(state===0),'up':(state==1),refresh:(state===2),touch:touching}"
  @touchstart="touchStart($event)"
  @touchmove="touchMove($event)"
  @touchend="touchEnd($event)"
  @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined">
    <h1>{{ msg }}</h1>
    <ul v-for="(item, $index) in items">
      <li class="click" @click="changeClick(item, $index)" :class="{'active':item.active,'unactive':!item.active}">{{item.select}}
      <span class="aa" v-show="item.active">中国你好</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    offset: {
      type: Number,
      default: 40
    },
    loadingText: {
      type: String,
      default: '加载中...'
    },
    enableInfinite: {
      type: Boolean,
      default: true
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
    }
  },
  name: 'text',
  data () {
    return {
      active: false,
      msg: 'Welcome to Your',
      taps: '',
      top: 0,
      state: 0,

      startY: 0,
      touching: false,
      infiniteLoading: false,
      items: [
        {select: '第一行'},
        {select: '第二行'},
        {select: '第三行'},
        {select: '第四行'}
      ]
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
        this.items.forEach(function (item) {
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
}
.click {
  display: inline-block;
  margin-bottom: 0;
  width:100%;
}
.click span {
  float:right;
}
</style>
