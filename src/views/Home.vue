<template>
  <div class="home">
    <h2 v-if="this.$store.state.loadingStatus">No Read</h2>
    <h2 v-else>Get All Data</h2>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      
    }
  }
}
</script>
