<template>
    <HeaderSection style="margin-bottom: 45px;" />


    <!-- (this.tagsHided['article_'  + name]?.hided==null ?'d':'s') -->

    <section class="blog-detail">
        <div class="blog-detail__articles-list">
            <template v-for="(name, index) of Object.keys($slots)" :key="index">
                <article :id="'article_' + name" :style="tagsHided['article_' + name]">
                    <slot :name="name"></slot>
                    <!-- :style="'display: '+" -->
                    <div class="quotes" v-if="index != Object.keys($slots).length - 1">
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
        </div>
        <div class="blog-detail__control-tags">
            <button v-for="(item, index) in this.tags " :key="index" @click="tagApply($event.target.textContent)">
                {{ item }}
            </button>
        </div>

    </section>

    <FooterSection />
</template>

<script>
import HeaderSection from '../sections/HeaderSection.vue'
import FooterSection from '../sections/FooterSection.vue'


export default {

    mounted() {

        setTimeout(() => {

            // this.tagControl = Object.create({
            //     type: "Invertebrates", // Default value of properties
            //     displayType() {
            //         // Method which will display type of Animal
            //         console.log(`suka`);
            //     },
            // });

            this.tagsById = new Map();
            let articles = [...document.querySelectorAll('article')];
            console.log(articles);
            articles.forEach(x => {
                let tag = x.querySelectorAll("[class='tag']")[0].getAttribute('value');
                console.log(x.id);
                this.tagsById.set(x.id, tag);
            });
        }, 2000)
    },

    updated() {
        [...document.getElementsByClassName('tag')].forEach(x => { this.tags.add(x.getAttribute('value')) });


        // console.log(articles);
        // this.tagsHideState= this.$scopedSlots;
    },

    name: 'BlogDetailPage',
    data() {
        return {
            tags: new Set(),
            tagsChoosed: new Set(),
            // tagsById:new Map(),
            tagsHided: []
        }
    },


    components: {
        HeaderSection, FooterSection
    },
    methods: {
        tagApply(tag) {
            this.tagsChoosed.add(tag);

            this.animal1.displayType();
            // console.log(this.Animal);

            this.tagsUpdate();
        },
        tagsUpdate() {


            [...this.tagsById.keys()].forEach(x => {
                this.tagsHided[x] = "display: none;";
            })

            let arrIDs = [...this.tagsById.entries()].filter(([key, value]) => this.tagsChoosed.has(value) && key != null);

            arrIDs.forEach((value, i) => {
                let id = value[0];
                this.tagsHided[id] = "display: initial;";
                console.log(`iубрать это -- ${i}`);
            });


            console.log(arrIDs);

            // [...document.querySelectorAll('article')].forEach(x => { x.style = "display: none;" });

            // this.tagsChoosed.forEach(tagCur => {
            //     let need = [...document.querySelectorAll('article')].filter(x => { return x.querySelectorAll("[class='tag']")[0].getAttribute('value') == tagCur; });
            //     need.forEach(x => x.style = "display: initial;");
            // })

        }
    },

}

import { onMounted } from 'vue'

onMounted(() => {
    console.log(`the component is now mounted.`)
})
</script>

<style lang="scss">
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
        display: flex;
        gap: 10px;
        height: fit-content;
        flex-wrap: wrap;
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
        }
    }
}
</style>