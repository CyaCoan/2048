<script setup lang="ts">
const props = defineProps<{
    hp: number,
    max: number,
    side: 'left' | 'right',
}>()
</script>

<template>
    <div class="container-hp">
        <div :style="{
            'background-color': `${(hp / max) > 0.2 ? '#2add9c' : '#dc3023'}`,
            'width': `${(hp < max ? (hp / max) : 1) * 35}rem`,
            'height': '2rem',
            'float': `${props.side}`,
        }"></div>

        <div class="border"></div>
    </div>
</template>

<style lang="scss" scoped>
.container-hp {
    width: 35rem;
    height: 2rem;
    position: relative;
    margin: 1rem;
}

.border {
    width: 35rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: 0.375rem solid black;
    position: absolute;
    top: -0.375rem;
    left: -0.375rem;
}
</style>