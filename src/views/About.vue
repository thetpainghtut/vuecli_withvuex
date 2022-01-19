<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getData">Get Data</button>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    getData(){
      this.$store.dispatch('getData')
    }
  }
}
</script>
