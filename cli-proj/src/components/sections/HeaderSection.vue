
<template>
    <header>
        <div class="header__logo">
            <img src="@/assets/img/header__logo.svg">
            <h1>Interno</h1>
        </div>

        <div class="header__menu">
            <div class="menu__item">Home</div>
            <div class="menu__item">Project</div>
            <div class="menu__item">Blog</div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'HeaderSection'
}
</script>



<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');


header {
    display: flex;
    justify-content: space-between;

    align-items: center;
    height: 14vh;

    width: var(--content_width);
    margin: 0 auto;

    .header {
        &__logo {
            display: flex;
            align-items: center;
            gap: 10px;

            h1 {
                margin: 0px;
            }

            img {
                width: 1.6em;
            }

        }

        &__menu {
            display: flex;
            gap: 44px;
            height: fit-content;
        }
    }

}

//decor
header {
    .header {
        &__logo {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 125%;
            color: #292F36;
        }

        &__menu {
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 125%;
            color: #292F36;
        }
    }
}
</style>
