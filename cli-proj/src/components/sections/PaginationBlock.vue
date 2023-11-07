<template>
    <div :class="(this.class ? this.class+'__pagination-block':'') + ' pagination-block'">
        <a class="active" href="#">01</a>
        <a href="#">02</a>
        <a href="#">03</a>
        <a href="#" class="next">></a>
    </div>
</template>

<script>
export default {
    name: 'PaginationBlock',
    props: {
        class: {
            type: String,
            default: ''
        }
    }

}
</script>

<style lang="scss" scoped>
.pagination-block {
    display: flex;
    gap: 20px;

    a {
        text-decoration: none;

        border: 1px solid #CDA274;
        padding: 15px;
        border-radius: 50%;

        width: 1.3em;
        height: 1.3em;
    }
}

.pagination-block a {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-transform: capitalize;
    color: #292F36;
}
</style>