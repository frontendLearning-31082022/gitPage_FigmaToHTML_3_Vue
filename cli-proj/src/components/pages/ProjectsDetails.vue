<template>
    <div>
        <HeaderSection style="margin-bottom: 45px;" />

        <BannerLogoSection :img_path="require('@/assets/img/banner__logo3.svg')">
        </BannerLogoSection>

        <article class="projects-details" style="margin-bottom: 161px;">

            <div class="projects-details__content" v-html="item" v-for="(item, index) in articles" :key="index"
                style="margin-bottom: 100px;">
            </div>

            <div class="projects-details__slider-image">
                <button class="slider-image__btn-zoom" style="border: 0; background: transparent"
                    @click="toggle_zoom()"><img src="@/assets/img/explore-icon.svg"></button>
                <swiper :pagination="{ dynamicBullets: true, paginationClickable: true, }" :modules="this.modules"
                    :zoom="true" class="mySwiper" :onSlideChange="(x) => { swaped_slider(x.activeIndex); }"
                    style="margin-bottom: 20px;" spaceBetween="70">
                    <swiper-slide v-for="(img_name, i) in this.slides_images" :key="i">{{ item }} <div
                            class="swiper-zoom-container"> <img :src="require('@/assets/img/' + img_name)+'#svgView(preserveAspectRatio(none))'"
                                alt="bedroom project image"></div></swiper-slide>
                </swiper>

                <div class="slider-image__controls">
                    <button v-for="(item, i) in markers_slider" :key="i" :class="{ 'active': markers_slider[i] }"
                        @click="this.swiper.slideTo(i)"></button>
                </div>

            </div>

        </article>

        <FooterSection />
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Zoom } from 'swiper/modules';
import { mapGetters } from 'vuex';

import HeaderSection from '../sections/HeaderSection.vue'
import BannerLogoSection from '../sections/BannerLogoSection.vue'
import FooterSection from '../sections/FooterSection.vue'

export default {
    name: 'ProjectsPage',
    components: { HeaderSection, BannerLogoSection, FooterSection, Swiper, SwiperSlide },

    setup() {
        return {
            modules: [Zoom, Pagination]
        };
    },

    methods: {
        swaped_slider(newPos) {
            this.markers_slider.fill(false);
            this.markers_slider[newPos] = true;
        },
        toggle_zoom() {
            this.swiper.zoom.enabled = true;
            this.swiper.zoom.toggle()
        }
    },

    data() {
        return {
            slides_images: ['projects_details_1.svg', 'projects__img5.svg', 'projects__img8.svg'],
            markers_slider: [true]
        }
    },

    mounted() {
        this.markers_slider.length = this.slides_images.length;
        this.swiper = document.querySelector('.swiper').swiper;

        [...document.getElementsByClassName('swiper-slide')].forEach(x => x.addEventListener("click",
            () => { if (this.swiper.zoom.scale == 1) this.swiper.zoom.enabled = false; }));  //enable scroll zoomed
    },
    computed: {
        ...mapGetters({ articles: 'articles_projects_details' }) // all geters for each module merged

        // ...mapState({
        //     articles: state => state.articles.projects_details
        // }),
    }
}
</script>

<style lang="scss" >
.projects-details {
    width: calc(var(--content_width));
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    &__content {
        width: 54.79%;

        h2 {
            text-align: left;
        }

        p {
            text-align: justify;
        }
    }

    &__slider-image {
        width: 100%;
        position: relative;

        .swiper-slide img {
            display: block;
            width: 100%;
            aspect-ratio: 1201 / 799;
            border-radius: 70px;
        }

        &:hover .slider-image__btn-zoom {
            visibility: initial;
        }

        .slider-image__btn-zoom {
            width: 132px;
            height: 132px;
            position: absolute;
            z-index: 10;
            cursor: pointer;

            visibility: hidden;

            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            top: calc(50% - 132px/2);

            img {
                width: inherit;
                height: inherit;

                border-radius: 70px;
            }
        }

        .slider-image__controls {
            display: flex;
            gap: 9px;
            justify-content: center;

            button {
                all: unset;
                border-radius: 50%;
                border: 2px solid black;
                width: 20px;
                height: 20px;
            }

            button.active {
                background: rgb(126, 126, 126);
            }
        }
    }
}


//decor
article {
    h2 {
        font-family: 'DM Serif Display';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 125%;
        letter-spacing: 0.02em;
        color: #292F36;
    }

    p {
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: #4D5053;
    }
}
</style>