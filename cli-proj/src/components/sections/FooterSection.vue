<template>
    <footer>
        <div class="footer__info">
            <div class="footer__site-logo">
                <img src="@/assets/img/header__logo.svg">
                <p>Interno</p>
            </div>
            <p>It is a long established fact that a reader will be distracted lookings.</p>
            <div class="footer__links">
                <img src="@/assets/img/footer__link-logo(1).svg" alt="bird logo">
                <img src="@/assets/img/footer__link-logo(2).svg" alt="in logo">
            </div>
        </div>

        <nav class="nav-pages">
            <h2>Pages</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav>

        <address>
            <p>Contacts</p>
            55 East Birchwood Ave. Brooklyn, New York 11201
            <a href="mailto:contact@interno.com">contact@interno.com</a>
            <a href="tel:+(123) 456 - 7890">(123) 456 - 7890</a>
        </address>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
    width: var(--content_width);
    margin: 0 auto;

    display: flex;
    padding-bottom: 134px;

    text-align: left;

    & * {
        margin-bottom: 0px;
        margin-top: 0px;
    }

    .footer {
        &__site-logo {
            display: flex;
            gap: 10px;
            margin-bottom: 18px;

            img {
                width: 2.0em;
            }
        }

        &__info {
            width: 32.72%;
            margin-right: 8.41%;

            &>p {
                margin-bottom: 31px;
            }
        }

        &__links {
            display: flex;
            gap: 54px;
        }
    }

    nav {
        margin-right: 26.81%;

        h2 {
            margin-bottom: 1em;
        }

        ul {
            list-style: none;
            display: grid;
            gap: 1em;
            padding: 0;

            a {
                text-decoration: none;
            }
        }
    }

    address {
        display: flex;
        flex-direction: column;
        gap: 1.5em;

        p {
            margin-bottom: -0.32em;
        }

        a {
            all: unset;
            cursor: pointer;
        }
    }
}

//decor
footer {
    .footer {
        &__info {
            .footer__site-logo {
                p {
                    font-family: 'DM Serif Display';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 40px;
                    line-height: 125%;
                    color: #292F36;
                }
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
}

footer {
    width: var(--content_width);
    margin: 0 auto;

    display: flex;

    .footer {
        &__site-logo {}

        &__info {}

        &__links {}
    }

    nav {
        h2 {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 125%;
            color: #292F36;
        }

        ul {
            a {
                font-family: 'Jost';
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                line-height: 300%;
                letter-spacing: 0.01em;
                color: #4D5053;
            }
        }
    }

    address {
        font-family: 'Jost';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: #4D5053;

        p {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 25px;
            line-height: 125%;
            color: #292F36;
        }
    }
}
</style>