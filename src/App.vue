<script>
import axios from "axios"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
export default {
  name: "App",
  data() {
    return {
  
    }
  },

  components: {
    AppHeader,
    AppMain,

  },

  methods: {

  },

  created() {
    setTimeout(this.fetchData, 2000)
  }

}
</script>

<template>

  <AppHeader></AppHeader>
  
  <AppMain></AppMain>
  
</template>

<style scoped></style>
