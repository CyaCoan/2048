<script setup lang="ts">
const props = defineProps<{
    color: string | null
}>()
</script>

<template>
    <div class="container-mask">
        <div class="mask" :style="{
            'background-color': props.color ? props.color : 'white'
        }"></div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.mask {
    width: 37rem;
    height: 37rem;
    border-radius: 0.5rem;
    position: absolute;
    opacity: 0.5;
}

.container-mask {
    width: 37rem;
    height: 37rem;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>