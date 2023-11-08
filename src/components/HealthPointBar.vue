<script setup lang="ts">
const props = defineProps<{
    hp: number,
    max: number,
    side: 'left' | 'right',
}>()
</script>

<template>
    <div class="container-hp" :style="{'justify-content': `${props.side}`}">
        <div :style="{
            'background-color': `${(hp / max) > 0.2 ? '#2add9c' : '#dc3023'}`,
            'width': `${(hp < max ? (hp / max) : 1) * 36.25}rem`,
            'height': '2rem',
            'margin': '0 0.375rem'
        }"></div>

        <div class="border"></div>
    </div>
</template>

<style lang="scss" scoped>
.container-hp {
    width: 37rem;
    height: 2.75rem;
    margin: 0.5rem auto;
    position: relative;
    display: flex;
    align-items: center;
}

.border {
    width: 36.25rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: 0.375rem solid black;
    position: absolute;
}
</style>