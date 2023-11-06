<template>
    <HeaderSection style="margin-bottom: 45px;" />

    <div class="img-logo" :style="{ 'background-image': 'url(' + require('@/assets/img/blog-detail__logo.svg') + ')' }"
        style="margin-bottom: 200px;"></div>


    <section class="blog-detail" style="margin-bottom: 96px;">
        <div class="blog-detail__articles-list">
            <template v-for="(name, index) of Object.keys($slots)" :key="index">
                <article v-if="!tagControl.tagsHided['article_' + name]" :id="'article_' + name">



                    <div :v-html="articless[index]"></div>

                    <slot :name="name"></slot>
                    <div class="quotes">
                        <div class="quotes__symbol">
                            &rdquo;
                        </div>
                        <div class="quotes__quote">
                            The details are not the details. <br>
                            They make the design.
                        </div>
                    </div>

                </article>

            </template>


            <template v-if="Object.keys($slots).length == 0">
                <template v-for="(item, index) in articless" :key="index">
                    <article v-if="!tagControl.tagsHided['article_' + index]" :id="'article_' + index">

                        <div v-html="item"></div>

                        <div class="quotes">
                            <div class="quotes__symbol">
                                &rdquo;
                            </div>
                            <div class="quotes__quote">
                                The details are not the details. <br>
                                They make the design.
                            </div>
                        </div>
                    </article>
                </template>
            </template>




        </div>
        <div class="blog-detail__control-tags">
            <div class="control-tags__title">Tags</div>
            <div class="control-tags__buttons">
                <button v-for="(item, index) in this.tagControl.allTags" :key="index" @click="tagBtnClick(item)"
                    :checked="tagControl.tagsChoosed[item]">
                    {{ item }}
                </button>
            </div>
        </div>
    </section>

    <FooterSection />
</template>

<script>
import HeaderSection from '../sections/HeaderSection.vue'
import FooterSection from '../sections/FooterSection.vue'

import { mapGetters } from 'vuex';

import { reactive } from 'vue'

export default {
    name: 'BlogDetailPage',

    beforeCreate() {


        this.tagControl = reactive(Object.create({
            allTags: new Set(),
            tagsById: new Map(),
            tagsChoosed: [],
            tagsHided: [],

            countHided: 0,
            collectData() {
                let articles = [...document.querySelectorAll('article')];

                articles.forEach(x => {
                    let tag = x.querySelectorAll("[class='tag']")[0].getAttribute('value');
                    this.tagsById.set(x.id, tag);
                });
                [...document.getElementsByClassName('tag')].forEach(x => { this.allTags.add(x.getAttribute('value')) });
            },
            collectData_store(articls) {
                articls = articls.map(x => {
                    let div = document.createElement('div');
                    div.innerHTML = x.trim();
                    return div;
                });
                articls.forEach((x, i) => {
                    let tag = x.querySelectorAll("[class='tag']")[0].getAttribute('value');
                    this.tagsById.set('article_' + i, tag);
                });
                articls.forEach(x => {
                    let tagEl = x.getElementsByClassName('tag')[0];
                    this.allTags.add(tagEl.getAttribute('value'))
                })
                articls.forEach((x, i) => { this.tagsHided['article_' + i] = false; });
            },
            isHided(id) {
                console.log(`id ${id} this.tagsHided ${this.tagsHided == true}`)
                return 'display: ' + (this.tagsHided == true ? 'none;' : 'initial');
            },
            selectTag(tag) {
                debugger;
                this.tagsChoosed[tag] = true;
                this.filterArticles();
            },
            unSelectTag(tag) {
                this.tagsChoosed[tag] = false;
                this.filterArticles();
            },
            filterArticles() {
                let notChoosed = [...this.allTags].filter(x => { return !this.tagsChoosed[x]; });
                notChoosed = (notChoosed.length == this.allTags.size) ? [] : notChoosed;
                let idsHide = [...this.tagsById.entries()].filter(([key, value]) => notChoosed.includes(value) && key != null).map(x => x[0]);
                this.countHided = idsHide.length;

                idsHide.forEach(x => { this.tagsHided[x] = true; })

                let idsShow = [...this.tagsById.entries()].map(x => x[0]).filter((val) => !idsHide.includes(val));
                idsShow.forEach(x => { this.tagsHided[x] = false; })
            }
        }));
    },

    mounted() {
        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                // debugger;

                this.articlesCount = Object.values(this.$slots).length;
                if (this.articlesCount != 0) {
                    this.tagControl.collectData();
                } else {
                    this.tagControl.collectData_store(this.$store.getters.articles_Blog_details);

                }
            }
        }
    },
    components: {
        HeaderSection, FooterSection
    },
    methods: {
        tagBtnClick(id) {
            let tag = id;
            let state = this.tagControl.tagsChoosed[id] == true ? true : false;

            debugger;

            if (!state) this.tagControl.selectTag(tag);
            if (state) this.tagControl.unSelectTag(tag);
        }
    },

    computed: {
        ...mapGetters({ articless: 'articles_Blog_details' }) // all geters for each module merged
    }
}
</script>

<style lang="scss">
.img-logo {
    height: 32.5vh;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
}

.blog-detail {
    width: calc(var(--content_width) - 44px);
    margin: 0 auto;

    display: flex;

    &__articles-list {
        width: 66.94%;

        img {
            width: 100%;
            border-radius: 50px;
        }

        .metainfo {
            display: flex;
            justify-content: space-between;

            div:last-child {
                margin-right: 8.71%;
            }
        }

        ol {
            margin-right: 8.71%;
        }


        article:last-child {
            .quotes {
                display: none;
            }
        }

        article {
            h2 {
                margin-top: 0px;
            }
        }

        .quotes {
            height: 24.72vh;
            position: relative;

            &__symbol {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-53%, -50%);
                width: 90%;
            }

            &__quote {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -19%);
                width: 90%;
            }


        }
    }

    &__control-tags {
        width: 28.73%;
        
        .control-tags__title {
            width: fit-content;
            margin-bottom: 24px;
        }

        .control-tags__buttons {
            display: flex;
            gap: 10px;
            height: fit-content;
            flex-wrap: wrap;
        }


        button[checked=true] {
            background: #292F36;
            color: #FFFFFF;
        }
    }
}


//decor
.blog-detail {
    &__articles-list {

        // :slotted(h2) { !!!!
        h2 {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 50px;
            line-height: 125%;
            letter-spacing: 0.02em;
            color: #292F36;
        }

        time {
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            letter-spacing: 0.01em;
            text-transform: capitalize;
            color: #4D5053;
        }

        .path {
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            letter-spacing: 0.01em;
            text-transform: capitalize;
            color: #4D5053;
        }

        p,
        ol {
            text-align: justify;
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 150%;
            letter-spacing: 0.01em;
            color: #4D5053;
        }

        li::marker {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 125%;
            letter-spacing: 0.02em;
            color: #CDA274;
        }

        .quotes {
            height: 24.72vh;
            background: #F4F0EC;

            font-family: 'DM Serif Display';
            font-style: italic;
            font-weight: 400;
            font-size: 25px;
            line-height: 125%;
            letter-spacing: 0.02em;
            color: #CDA274;

            &__symbol {
                font-family: 'DM Serif Display';
                // transform: rotate(-180deg);
                font-style: italic;
                font-weight: 400;
                font-size: 200px;
                line-height: 125%;
                letter-spacing: -0.1em;
                color: #CDA274;
            }

        }
    }

    &__control-tags {
        button {
            all: unset;
            width: 28.73%;
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 125%;
            letter-spacing: 0.02em;
            color: #000000;
            background-color: #F4F0EC;
            padding: 9px 30px 9px 30px;
            cursor: pointer;
            border-radius: 10px;
        }

        .control-tags__title {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 125%;
            letter-spacing: 0.02em;
            color: #292F36;
        }
    }
}
</style>