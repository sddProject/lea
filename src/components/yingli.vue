<template>
  <div class="have">
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'have',
  data () {
    return {
      msg: 'You are Welcome1111'
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

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #000;
}
</style>
