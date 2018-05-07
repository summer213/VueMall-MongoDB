<template>
  <div class="hello">
    <counter :num="num" @incre="increament"></counter>
    <h1>parent: {{num}}</h1>
  </div>
</template>

<script>
import counter from './counter';
export default {
  name: 'HelloWorld',
  data () {
    return {
      num: 10,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    counter
  },
  methods: {
    increament(data) {
      if(data == 'increament'){
        this.num++;
      }
      if(data == 'decreament'){
        this.num--;
      }
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
  color: #42b983;
}
</style>
