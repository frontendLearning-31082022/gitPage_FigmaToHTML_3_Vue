<template>
    <HeaderSection style="margin-bottom: 45px;" />

    <BannerLogoSection :img_path="require('@/assets/img/banner__logo2.svg')">
        <template v-slot:text-main>Our Project</template>
        <template v-slot:text-addition>Home / Project</template>
    </BannerLogoSection>


    <div class="projects" style="margin-bottom: 200px;">


            <FilterModule v-model="hideByCategory" :valuesByIndex="projects.map(x=>x.category)" class="projects__category-chooser" style="margin-bottom: 61px;" >
                <template #buttons>
                    <button>Bathroom</button>
                    <button>Bed Room</button>
                    <button>Kitchan</button>
                    <button>Living Area</button>
                </template>
            </FilterModule>


        <ul style="margin-bottom: 61px;">
            <li v-for="(item, index) in projects" :key="index" class="project" @click="item.favorite = !item.favorite">
                <div class="project__content" v-if="!hideByCategory[index]">
                    <img :src="require(`@/assets/img/${item.img}`)">
                    <h2>{{ item.h2 }}</h2>
                    <a>{{ item.a }}</a>
                    <!-- <button :style="'background: url(''@/assets/img/projects__project_button_.svg'')"></button> -->
                    <button
                        :style="'background: url(\'' + require('@/assets/img/projects__project_button_.svg') + '\')'"></button>
                    <img src="@/assets/img/star-icon.svg" class="favorite-project" v-if="item.favorite">
                </div>
            </li>
        </ul>
        <PaginationBlock />
    </div>



    <FooterSection />
</template>

<script>
import HeaderSection from '../sections/HeaderSection.vue'
import FooterSection from '../sections/FooterSection.vue'
import BannerLogoSection from '../sections/BannerLogoSection.vue'
import FilterModule from '../modules/FilterModule.vue'
import PaginationBlock from '../sections/PaginationBlock.vue'


import projectsData from '@/data/dataProjectsArticles.txt'

export default {
    name: 'ProjectsPage',
    components: { HeaderSection, FooterSection, BannerLogoSection, FilterModule, PaginationBlock },
    data() {
        return {
            projects: JSON.parse(projectsData),
            hideByCategory: []
        }
    },
}
</script>

<style lang="scss" scoped>
.projects {
    width: calc(var(--content_width));
    margin: 0 auto;

    ul {
        padding: 0;
        list-style-type: none;
        margin-top: -17.5px;

        column-count: 2;
        gap: 30px;

        .project {
            display: inline-block;
            width: 100%;
            margin: 17.5px 0;

            height: fit-content;

            text-align: left;
            position: relative;

            img {
                width: 100%;
            }


            button {
                all: unset;
                width: 70px;
                height: 70px;

                position: absolute;
                right: 0px;
                bottom: 0px;
                z-index: -1;
            }

            .favorite-project {
                width: 6.15%;
                height: 5.81%;

                min-width: 36px;
                min-height: 34px;

                position: absolute;
                top: 0px;
                right: 0px;
            }

        }

    }

    .pagination-block {
        margin: 0 auto;
        width: fit-content;
    }

    &__category-chooser {
        display: flex;
        margin: 0 auto;

        aspect-ratio: 880/75;
        width: 73.27%;
        // height: 75px;

        border: 1px solid #CDA274;
        border-radius: 18px;

        button {
            padding: 0;
            border: none;
            background: none;

            width: calc(100%/4);
        }
        button[pressed=true] {
            background: #CDA274;
            border-radius: 18px;
            color: white;
        }
    }
}
</style>