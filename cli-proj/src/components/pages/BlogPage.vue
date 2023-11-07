
import HeaderSection from '../sections/HeaderSection.vue';

<template>
  <HeaderSection style="margin-bottom: 45px;" />

  <BannerLogoSection img_path="banner__logo.svg">
    <template v-slot:text-main>Articles & News</template>
    <template v-slot:text-addition>Home / Blog</template>
  </BannerLogoSection>

  <LatestPostSection style="margin-bottom: 150px;" />
  <ArticlesSection :articles="articles" style="margin-bottom: 200px;" />
  <FooterSection />
</template>

<script>
import HeaderSection from '../sections/HeaderSection.vue'
import BannerLogoSection from '../sections/BannerLogoSection.vue'
import ArticlesSection from '../sections/ArticlesSection.vue'
import FooterSection from '../sections/FooterSection.vue'
import LatestPostSection from '../sections/LatestPostSection.vue'

export default {
  name: 'BlogPage',
  components: {
    HeaderSection, ArticlesSection, FooterSection, LatestPostSection, BannerLogoSection
  },
  data() {
    return {
      articles: [
        {
          btn_tag: 'Kitchan Design',
          h2: 'Let’s Get Solution For Building Construction Work',
          time: '26 December,2022'
        },
        {
          btn_tag: 'Living Design',
          h2: 'Low Cost Latest Invented Interior Designing Ideas.',
          time: '22 December,2022'
        },
        {
          btn_tag: 'Interior Design',
          h2: 'Best For Any Office & Business Interior',
          time: '25 December,2022'
        },
        {
          btn_tag: 'Kitchan Design',
          h2: 'Let’s Get Solution For Building Construction Work',
          time: '26 December,2022 '
        },
        {
          btn_tag: 'Living Design',
          h2: 'Low Cost Latest Invented Interior Designing Ideas.',
          time: '22 December,2022'
        },
        {
          btn_tag: 'Interior Design',
          h2: 'Best For Any Office & Business Interior',
          time: '25 December,2022'
        }
      ]
    }
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

.blog {
  align-items: start !important;
}

.blog > p {
  display: none;
}

.banner__text-main {
  font-size: 13cqw;
}

</style>