<template>
    <div>

        <HeaderSection style="margin-bottom: 45px;" />

        <BannerLogoSection :img_path="require('@/assets/img/banner__logo3.svg')">
        </BannerLogoSection>

        <article class="projects-details" style="margin-bottom: 161px;">
            <div class="projects-details__content" style="margin-bottom: 100px;">
                <h2>Minimal Look Bedrooms</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus.
                    Aliquam
                    sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in
                    mi
                    fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.

                    In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc,
                    mattis
                    quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis
                    convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id
                    purus porttitor.</p>
            </div>
            <div class="projects-details__slider-image">

                <!-- <div class="swiper">

                </div> -->
                <swiper :pagination="{
                    dynamicBullets: true,
                    paginationClickable: true,
                }" :modules="modules" class="mySwiper" :onSlideChange="(x) => { swaped_slider(x.activeIndex); }"
                    style="margin-bottom: 20px;" ref="slider">
                    <swiper-slide v-for="(img_name, i) in this.slides_images" :key="i">{{ item }}<img
                            :src="require('@/assets/img/' + img_name)" alt="bedroom project image"></swiper-slide>
                </swiper>

                <div class="slider-image__controls">
                    <button v-for="(item, i) in markers_slider" :key="i" :class="{ 'active': markers_slider[i] }"></button>
                </div>



                <!-- <img src="@/assets/img/projects_details_1.svg" alt="bedroom project image" style="margin-bottom: 20px;"> -->

            </div>

        </article>

        <FooterSection />
    </div>
</template>



<!-- , FooterSection, BannerLogoSection, FilterModule, PaginationBlock -->
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// const swiper = new Swiper('.swiper', {
//             effect: 'coverflow',
//             coverflowEffect: {
//                 rotate: 30,
//                 slideShadows: false,
//             },
//         });


import HeaderSection from '../sections/HeaderSection.vue'
import BannerLogoSection from '../sections/BannerLogoSection.vue'
import FooterSection from '../sections/FooterSection.vue'

export default {  //
    name: 'ProjectsPage',
    components: { HeaderSection, BannerLogoSection,  FooterSection, Swiper, SwiperSlide,},

    methods: {
        swaped_slider(newPos) {
            this.markers_slider.fill(false);
            this.markers_slider[newPos] = true;
            debugger;
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


    },

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

        .swiper-slide img {
            display: block;
            width: 100%;
            aspect-ratio: 1201 / 799;
        }


        .swiper-pagination-bullet {
            width: 20px;
            height: 20px;
            background: white;
            border: 2px solid black;
            transform: scale(1);
            opacity: 100%;

            &-active {
                background: black;
            }
        }

        // .swiper {
        //     overflow: initial;
        //     &-slide-prev, &-slide-next {
        //         visibility: hidden;
        //     }
        // }




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
                background: black;
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