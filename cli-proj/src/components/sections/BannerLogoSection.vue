<template>
    <div>
        <!-- <img
                                :src="require('@/assets/img/banner__logo2.svg') + '#svgView(preserveAspectRatio(none))'"
                              class="tesst"  alt="bedroom project image"> -->
        <div class="banner" style="margin-bottom: 200px;">

            <!-- <div class="banner__logo" :style="{ 'background-image': 'url(' + this.img_path +')' }"></div> -->

            <img
                                :src="require('@/assets/img/'+this.img_path)+ '#svgView(preserveAspectRatio(none))'"
                              class="banner__logo"  alt="bedroom project image">

            <div class="banner__text" v-if="Object.keys( this.$slots  ).includes('text-main')" >
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

<style lang="scss">
.banner, .tesst {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: end;

    width: 100vw;
    height: 32.96vh;
    min-height: calc( 400px /2);

    &__logo {

        width: 100%;
        height: 100%;

        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        z-index: -1;

    }

    &__text {
        // position: absolute;
        // bottom: 0px;

        height: 16.48vh;
        min-height: 50%;
        width: 26.25vw;

        background: white;

        display: flex;
        flex-direction: column;
        justify-content: center;

        container-type: inline-size;
        // padding: 41px 78px 74px 78px;
        // box-sizing: border-box;

        border-radius: 37px 37px 0px 0px;

        &-main {
            font-size: 16cqw;
        }
        &-addition {
            font-size: 5cqw;
        }

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
            // font-size: 50px;
            // font-size: 333%; //TODO 16px*x
          
            line-height: 125%;
            color: #292F36;
        }

        &-addition {
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            // font-size: 22px;
            // font-size: 143%; 
            line-height: 150%; 
            letter-spacing: 0.01em;
            color: #4D5053;

        }

    }
}
</style>