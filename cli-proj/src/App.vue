<template>
  <BlogPage />
</template>
<script>
import BlogPage from './components/pages/BlogPage.vue'

export default {
  name: 'App',
  components: {
    BlogPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
