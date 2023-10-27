<template>

  <!-- <BlogDetailPage>
      <template #[index] v-for="(item, index) in articles" :key="index">
        <div v-html="item"></div>
      </template>
    </BlogDetailPage> -->


  <ProjectsPage></ProjectsPage>
</template>
<script>
// import BlogPage from './components/pages/BlogPage.vue'
// import BlogDetailPage from './components/pages/BlogDetailPage.vue'
import ProjectsPage from './components/pages/ProjectsPage.vue'

export default {
  name: 'App',
  data() {
    return {
      articles: []
    }
  },
  beforeCreate() {
    // import('@/data/DataBlogArticles.html').then(m => {
    //   this.articles = m.default.split('-separ-');
    // });

  },
  components: {
    // BlogPage
    // BlogDetailPage
    ProjectsPage
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
