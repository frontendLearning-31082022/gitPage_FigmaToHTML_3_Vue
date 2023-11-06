<template>
    <HeaderSection style="margin-bottom: 45px;" />

    <div class="big-logo" :style="'background-image: url( ' + require('@/assets/img/big-logo.svg') + ');'">
        <div class="big-logo__content">
            <h1>Let Your Home Be Unique</h1>
            <p>There are many variations of the passages of
                lorem Ipsum fromavailable, majority.</p>
            <button>Get Started <img src="@/assets/img/arrow_right.svg"> </button>
        </div>
    </div>

    <div class="projects">
        <div class="projects__info">
            <h2>Follow Our Projects</h2>
            <p>It is a long established fact that a reader will be distracted by the of readable content of page
                lookings at its layouts points.</p>
        </div>

        <div class="projects__list">
            <article class="projects__item" v-for="(item, index) in this.projects__list" :key="index">
                <img :src="require('@/assets/img/' + item.img)" alt="project image">
                <h2>{{ item.h2 }}</h2>
                <a>{{ item.a }}</a>
                <button
                    :style="'background: url( ' + require('@/assets/img/projects__project_button_.svg') + ');'"></button>
            </article>
        </div>
    </div>

    <aside class="counter">
        <div class="counter__item" v-for="(item, index) in this.counter" :key="index">
            <div>{{ item.count }}</div>
            <p> {{  item.msg }}</p>
        </div>
    </aside>

    <ArticlesSection :articles="articles" style="margin-bottom: 200px;"  :paginator="false"/>

    <FooterSection></FooterSection>
</template>

<script>
import HeaderSection from '../sections/HeaderSection.vue'
import FooterSection from '../sections/FooterSection.vue'
import ArticlesSection from '../sections/ArticlesSection.vue'


export default {
    name: 'HomePage',
    components: { HeaderSection, FooterSection, ArticlesSection },

    data() {
        return {
            projects__list: [
                { img: 'project__img(1).svg', h2: 'Modern Kitchan', a: 'Decor / Artchitecture' },
                { img: 'project__img(2).svg', h2: 'Modern Kitchan', a: 'Decor / Artchitecture' },
                { img: 'project__img(3).svg', h2: 'Modern Kitchan', a: 'Decor / Artchitecture' },
                { img: 'project__img(4).svg', h2: 'Modern Kitchan', a: 'Decor / Artchitecture' }
            ],
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
                }
            ],
            counter: [
                { count: '12', msg: 'Years Of Experiance' },
                { count: '85', msg: 'Success Project' },
                { count: '15', msg: 'Active Project' },
                { count: '95', msg: 'Happy CUstomers' }
            ]
        }
    },
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost&display=swap');



body {
    min-width: 1270px;

    $one-0: calc((100% - var(--content_width))/2);
    $one-1: calc(((100% - var(--content_width))/2) + 1px);
    $two-0: calc(39.58%);
    $two-1: calc((39.58%) - 1px);
    $third-0: calc(60.41%);
    $third-1: calc((60.41%) - 1px);
    $fourth-0: calc(100% - (100% - var(--content_width))/2);
    $fourth-1: calc((100% - (100% - var(--content_width))/2) - 1px);

    $line-color: black;

    min-height: 100vh;
    background-image:
        linear-gradient(90deg, transparent, transparent $one-0, $line-color $one-1, transparent $one-1),
        linear-gradient(90deg, transparent, transparent $two-1, $line-color $two-0, transparent $two-0),
        linear-gradient(90deg, transparent, transparent $third-1, $line-color $third-0, transparent $third-0),
        linear-gradient(90deg, transparent, transparent $fourth-1, $line-color $fourth-0, transparent $fourth-0);
    transform: translate3d(0, 0, 0);
}

.big-logo {
    height: 70.19vh;
    width: var(--content_width);
    margin: 0 auto;

    border-radius: 70px;
    background-size: cover;
    background-positions: center;

    display: flex;
    align-items: center;

    &__content {
        margin: 2px 2px 2px 4.33vw;
        max-width: 36.14%;
    }
    button {
        cursor: pointer;
    }
}

.projects {
    width: var(--content_width);
    margin: 0 auto;

    display: flex;
    align-items: center;
    flex-direction: column;

    &__info {
        max-width: 38.39vw;
        text-align: center;

        p {
            margin-bottom: 93px;
        }
    }

    &__list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        gap: 56px 8.24%;

        margin-bottom: 96px;

        text-align: left;

        article {
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

        h2 {
            margin-bottom: 4px;
        }
    }
}

.counter {
    width: var(--content_width);
    margin: 0 auto;
    height: 42.31vh;

    display: flex;
    align-items: center;

    margin-bottom: 96px;

    &::before {
        background: #F4F0EC;
        left: 0px;
        position: absolute;
        width: 100%;
        height: inherit;
        content: "";
        display: inline-block;
        z-index: -1;
    }

    &__item {
        border-style: none solid none none;
        border-color: #CDA274;
        text-align: center;

        width: 25%;
        height: fit-content;

        div {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 85px;
            line-height: 125%;
            letter-spacing: 0.02em;
            color: #CDA274;
        }

        &:last-of-type {
            border: none;
        }
    }

}

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
    }

    &__article {
        width: 100%;
        padding: 21px;
        text-align: left;

        position: relative;

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
            cursor: pointer;

            position: absolute;
            right: 0px;
            bottom: 0px;
        }

        .tag {

            width: 129px;
            height: 41px;
            left: 5.88%;
            bottom: 5.88%;
            text-align: center;
            cursor: pointer;
        }
    }
}



//decor
.big-logo {

    &__content {
        h1 {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 65px;
            line-height: 125%;
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

        button {
            padding: 26px 49px 26px 48px;
            width: 220.14px;
            height: 75px;
            background: #292F36;
            box-shadow: 0px 10px 20px rgba(192, 192, 192, 0.35);
            border-radius: 18px;
            border: solid black;

            font-family: 'Jost';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 125%;
            color: #FFFFFF;

        }
    }
}

.projects {

    &__info {
        h2 {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 50px;
            line-height: 125%;
            letter-spacing: 0.02em;
            color: #292F36;
            opacity: 0.8;
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

    &__list {
        h2 {
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


.counter {
    &::before {}

    &__item {
        div {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 85px;
            line-height: 125%;
            letter-spacing: 0.02em;
            color: #CDA274;
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

}

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

    &__list {}

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

        img {}

        button {}

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