
import HeaderSection from '../sections/HeaderSection.vue';

<template>
  <HeaderSection style="margin-bottom: 45px;" />
  <div class="banner" style="margin-bottom: 200px;">
    <div class="banner__logo" :style="{ 'background-image': 'url(' + require('@/assets/img/banner__logo.svg') + ')' }">
    </div>

    <div class="banner__text">
      <div class="banner__text-main">
        Articles & News
      </div>
      <div class="banner__text-addition">
        Home / Blog
      </div>
    </div>
  </div>

  <LatestPostSection style="margin-bottom: 150px;" />
  <ArticlesSection :articles="articles" style="margin-bottom: 200px;" />
  <FooterSection />
</template>

<script>
import HeaderSection from '../sections/HeaderSection.vue'
import ArticlesSection from '../sections/ArticlesSection.vue'
import FooterSection from '../sections/FooterSection.vue'
import LatestPostSection from '../sections/LatestPostSection.vue'

export default {
  name: 'BlogPage',
  components: {
    HeaderSection, ArticlesSection, FooterSection, LatestPostSection
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

.banner {
  position: relative;
  display: flex;
  justify-content: center;

  &__logo {
    width: 100vw;
    height: 32.96vh;
    background-position: center;

  }

  &__text {
    position: absolute;
    bottom: 0px;

    height: 16.48vh;

    background: white;

    padding: 41px 78px 74px 78px;
    box-sizing: border-box;

    border-radius: 37px 37px 0px 0px;

    &-main {}

  }
}

//decor
.banner {
  &__logo {}

  &__text {

    &-main {
      font-family: 'DM Serif Display';
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 125%;
      color: #292F36;
    }

    &-addition {
      font-family: 'Jost';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 150%;
      letter-spacing: 0.01em;
      color: #4D5053;

    }

  }
}
</style>