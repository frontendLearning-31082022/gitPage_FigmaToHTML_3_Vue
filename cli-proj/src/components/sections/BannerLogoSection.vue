<template>
    <div>
        <div class="banner" style="margin-bottom: 200px;">

            <div class="banner__logo"
                :style="{ 'background-image': 'url(' +this.img_path + ')' }">
            </div>

            <div class="banner__text">
                <div class="banner__text-main">
                    <slot name="text-main"></slot>
                </div>
                <div class="banner__text-addition">
                    <slot name="text-addition"></slot>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    functional: true,
    props: ["img_path"]
}
</script>

<style lang="scss" scoped>
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