
<template>
    <header>
        <div class="header__logo">
            <img src="@/assets/img/header__logo.svg">
            <router-link to="/" class="menu__item">Interno</router-link>
        </div>

        <div class="header__menu">
            <router-link to="/" class="menu__item">Home</router-link>
            <router-link to="/ProjectsPage" class="menu__item">Project</router-link>
            <router-link to="/BlogPage" class="menu__item">Blog</router-link>
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

            a {
                margin: 0px;
                text-decoration: none;
                color: inherit;
            }

            img {
                width: 0.7em;
            }

        }

        &__menu {
            display: flex;
            gap: 44px;
            height: fit-content;

            .menu__item {
                all: unset;
                text-decoration: none;
                cursor: pointer;
            }
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

        &__menu,
        a {
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
