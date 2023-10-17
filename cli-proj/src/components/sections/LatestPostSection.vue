<template>
    <section class="latest-post">
        <h2>Latest Post</h2>
        <div class="latest-post__content">
            <img src="@/assets/img/latest-post__logo_1.svg" />
            <div class="latest-post__content__text">
                <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
                <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary
                    to popular belief.
                    <br /><br />
                    Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                </p>
                <time>26 December,2022 </time>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LatestPostSection',
}
</script>

<style lang="scss" scoped>
.latest-post {
    width: calc(var(--content_width) - 44px);
    margin: 0 auto;

    text-align: left;

    &__content {
        display: flex;
        gap: 65px;

        &>* {
            max-width: 50%;
        }

        &__img {
            width: 100%;
            height: 100%;
        }
    }

}

//decor
.latest-post {

    h2 {
        font-family: 'DM Serif Display';
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        line-height: 125%;
        letter-spacing: 0.02em;
        color: #292F36;
    }

    &__content {

        &__text {

            h3 {
                font-family: 'DM Serif Display';
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
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
        }

        &>* {}
    }

}
</style>