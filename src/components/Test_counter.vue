<template>
  <div>
    <button @click="increament">+</button>
    <button @click="decreament">-</button>
    <h1>{{num}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'counter',
    props: ["num"],
    data () {
      return {
        // num: 0
      }
    },
    methods: {
      increament() {
        this.$emit("incre",'increament');
      },
      decreament() {
        this.$emit("incre",'decreament');
      }
    },
    mounted () {
    }
  }
</script>

<style lang='css' scoped>
</style>