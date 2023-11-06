<template>
    <section class="blog">
        <h1>Articles & News</h1>
        <p>It is a long established fact that a reader will be distracted by the of readable content of a page when
            lookings at its layouts the points of using.</p>

        <div class="blog__list">

            <article class="blog__article" v-for="(artic, index) in articles" :key="index" style="margin-bottom: 61px;">
                <div class="article__img-container">
                    <img :src="require('@/assets/img/blog__article-img(' + (index + 1) + ').svg')" alt="blog article image">
                    <button class="tag" onclick="#">{{ artic.btn_tag }}</button>
                </div>
                <h2> {{ artic.h2 }}</h2>
                <time> {{ artic.time }}</time>
                <button
                    :style="'background: url( ' + require('@/assets/img/projects__project_button_.svg') + ');'"></button>
            </article>
            
            <PaginationBlock class="articles" ></PaginationBlock>
        
            <!-- <div class="blog__list__pagination" v-if="this.paginator">
                <a class="active" href="#">01</a>
                <a href="#">02</a>
                <a href="#">03</a>
                <a href="#" class="next">></a>
            </div> -->
        </div>
    </section>
</template>

<script>
// import PaginationBlock from '../sections/PaginationBlock.vue'
import PaginationBlock from '@/components/sections/PaginationBlock.vue'

export default {
    name: 'ArticlesSection',
    props: {
        articles: [],
        paginator: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    components: {PaginationBlock}
}
</script>

<style lang="scss" scoped>
.blog {
    width: var(--content_width);
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    margin-bottom: calc(96px - 20px);

    h1 {
        margin-bottom: 12px;
        margin-top: 0px;
    }

    p {
        width: 67.53%;
        margin-bottom: 52px;
    }

    &__list {
        display: flex;
        gap: 27px;
        flex: 1;
        flex-wrap: wrap;
        justify-content: center;
    }


    &__article {
        width: calc(33.33% - 21px);
        padding: 21px;
        box-sizing: border-box;

        text-align: left;

        position: relative;

        display: flex; //todo
        flex-direction: column;
        justify-content: space-between;

        h2 {
            margin-bottom: 39.5px;
        }

        .article__img-container {
            position: relative;
        }

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
            cursor: pointer;
        }

        .tag {

            width: 129px;
            height: 41px;
            left: 5.88%;
            bottom: 5.88%;
            text-align: center;
            cursor: pointer;
        }

        &:last-of-type {
            // margin-bottom: 51px;
        }
    }
}

//decor
.blog {

    h1 {
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

    &__article {

        h2 {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
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
            align-items: center;
            letter-spacing: 0.01em;
            text-transform: capitalize;
            color: #4D5053;
        }

        .tag {
            background: #FFFFFF;
            border-radius: 8px 8px 8px 0px;

            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            letter-spacing: 0.01em;
            text-transform: capitalize;
            color: #4D5053;
        }
    }
}
</style>