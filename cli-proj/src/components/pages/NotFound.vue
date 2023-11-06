<template>
    <div>
        <HeaderSection style="margin-bottom: 45px;" />

        <div class="page-not-found">
            <div class="page-not-found__content">
                <div class="error-code">404</div>
                <div class="error-message" style="margin-bottom: 23px;">We are sorry, but the page you requested was not
                    found</div>
                <!-- <button class="page-not-found__back-button">Back To Home <img src="@/assets/img/arrow_right.svg"> </button> -->
                <router-link to="/" class="page-not-found__back-button">Back To Home <img src="@/assets/img/arrow_right.svg"></router-link>
            </div>
            <img src="@/assets/img/page-not-found__logo.svg" alt="page not found">
        </div>
    </div>
</template>

<script>

import HeaderSection from '../sections/HeaderSection.vue'

export default {
    name: 'NotFound',
    components: { HeaderSection },
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost&display=swap');

.page-not-found {
    display: flex;
    flex-direction: row;

    img {
        width: 47.55%;
        border-radius: 0px 0px 0px 38.66%;
    }

    .page-not-found__content {
        width: 52.45%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        margin-left: calc((100vw - var(--content_width))/2 + 9px);
        text-align: left;

        .error-code {}

        .error-message {
            width: 86.34%;
        }

        a {
            all: unset;
            display: flex;
            padding: 26px 54px 26px 54px;
            cursor: pointer;

            width: fit-content;
            height: fit-content;

            img {
                padding-left: 9px;

            }
        }

    }
}

//decor
.page-not-found {
    .page-not-found__content {
        .error-code {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 250px;
            line-height: 125%;
            color: #CDA274;
        }

        .error-message {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 35px;
            line-height: 150%;
            letter-spacing: 0.01em;
            color: #292F36;

        }

        a {

            white-space: nowrap;

            background: #292F36;
            border-radius: 18px;

            font-family: 'Jost';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 125%;
            letter-spacing: 0.02em;
            color: #FFFFFF;
        }
    }
}
</style>