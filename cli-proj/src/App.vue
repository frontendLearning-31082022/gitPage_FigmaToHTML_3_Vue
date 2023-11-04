<template>
  <!-- <BlogDetailPage>
      <template #[index] v-for="(item, index) in articles" :key="index">
        <div v-html="item"></div>
      </template>
    </BlogDetailPage> -->

  <!-- <ProjectsPage></ProjectsPage> -->
  <!-- <ProjectsPage></ProjectsPage> -->
  <!-- <ProjectsDetails></ProjectsDetails> -->
  <!-- <NotFound></NotFound> -->
  <HomePage></HomePage>
</template>
<script>
// import BlogPage from './components/pages/BlogPage.vue'
// import BlogDetailPage from './components/pages/BlogDetailPage.vue'
// import ProjectsPage from './components/pages/ProjectsPage.vue'
// import ProjectsDetails from './components/pages/ProjectsDetails.vue'
// import NotFound from './components/pages/NotFound.vue'
import HomePage from './components/pages/HomePage.vue'

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
    // ProjectsPage,
    // ProjectsDetails
    // NotFound
    HomePage
  },
  mounted() {

    import('@/data/ProjectsDetails.html').then(m => {
      let articles = m.default.split('-separ-');

      this.$store.dispatch('ADD_ARTICLE', articles.join('\n'));
    });
  },
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
