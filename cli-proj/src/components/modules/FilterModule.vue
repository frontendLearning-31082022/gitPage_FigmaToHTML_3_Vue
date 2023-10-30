<template>
    <div class="buttons-filter" ref="buttns">
        <slot name="buttons"></slot>
    </div>
</template>

<script>
export default {
    name: 'FilterModule',
    props: ["modelValue", "valuesByIndex"],
    data() {
        return {
            choosed: new Set()
        }
    },
    methods: {
        clickCategory(evt) {
            let state_switch = !(evt.target.getAttribute('pressed') === 'true');
            evt.target.setAttribute('pressed', state_switch);

            if (state_switch) this.choosed.add(evt.target.textContent);
            if (!state_switch) this.choosed.delete(evt.target.textContent);


            let tempBools = [];
            this.valuesByIndex.forEach((x, i) => {
                tempBools[i] = !this.choosed.has(x);
            });
            if (this.choosed.size == 0) tempBools = tempBools.map(x => false);

            this.$emit('update:modelValue', tempBools);
        }
    },

    mounted() {
        let btns = this.$refs.buttns.children;
        for (let btn of btns) {
            btn.addEventListener('click', this.clickCategory);
            btn.setAttribute('pressed', false)
        }
    },
}
</script>

<style lang="scss" scoped></style>