<template>

    <BlogDetailPage>
      <template #[index] v-for="(item, index) in articles" :key="index">
        <div v-html="item"></div>
      </template>
    </BlogDetailPage>

</template>
<script>
// import BlogPage from './components/pages/BlogPage.vue'
import BlogDetailPage from './components/pages/BlogDetailPage.vue'

export default {
  name: 'App',
  data() {
    return {
      articles:[]
    }
  },
  beforeCreate() {
    import('@/data/DataBlogArticles.html').then(m => {
      this.articles = m.default.split('-separ-');
    });
  
  },
  components: {
    // BlogPage
    BlogDetailPage
  }

}
</script>

<style lang="scss">
@import '@/assets/scss/base/_vars.scss';
@import '@/assets/scss/base/_base.scss'; 

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style> 
