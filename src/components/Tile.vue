<script setup lang="ts">
import PropOnTile from './PropOnTile.vue';
import { computed } from 'vue';
import { Status } from '../utils/2048duel';

const props = defineProps<{
    value: number | null,
    status: Status,
    row: number,
    col: number,
}>()

const top = computed(() => {
    return `${1 + 9 * props.row}rem`
})

const left = computed(() => {
    return `${1 + 9 * props.col}rem`
})

const z_index = computed(() => {
    if (props.value) {
        return Math.log2(props.value)
    }
    return 0
})

const tile_color = computed(() => {
    if (props.status === 'frozen') {
        return '#70f3ff'
    }

    if (!props.value) {
        return 'transparent'
    }

    const tile_colors = {
        2: '#ffb035',
        4: '#ff8936',
        8: '#ff7000',
        16: '#ff4e20',
        32: '#db5a6b',
        64: '#cb3a56',
        128: '#dc3023',
        256: '#ba0400',
        512: '#b65f47',
        1024: '#a24d15',
        2048: '#8b3400',
        4096: '#6b1400',
        8192: '#677e44',
        16384: '#575e33',
        32768: '#473e22',
        65536: '#371e11',
    }

    if (props.value in tile_colors) {
        return (tile_colors as any)[props.value]
    }

    return 'transparent'
})

const tile_number_color = computed(() => {
    if (props.status === 'frozen' || props.status === 'bomb' || props.status === 'heal') {
        return 'black'
    }

    return 'white'
})

const tile_number_shadow_color = computed(() => {
    if (props.status === 'bomb' || props.status === 'heal') {
        return 'white'
    }

    return 'transparent'
})
</script>

<template>
    <div v-if="props.value"
        :style="{
            'background-color': tile_color,
            'color': tile_number_color,
            'box-shadow': `0 0 0.625rem 0rem ${tile_color}`,
            'top': top,
            'left': left,
            'z-index': z_index,
        }"
        class="tile"
    >
        <PropOnTile :status="props.status"></PropOnTile>
        <p class="tile-number"
            :style="{
                'text-shadow': `
                    0.0625rem 0.0625rem 0.25rem ${tile_number_shadow_color},
                    -0.0625rem 0.0625rem 0.25rem ${tile_number_shadow_color},
                    -0.0625rem -0.0625rem 0.25rem ${tile_number_shadow_color},
                    0.0625rem -0.0625rem 0.25rem ${tile_number_shadow_color}
                `
            }">
            <slot></slot>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.tile {
    width: 8rem;
    height: 8rem;
    border-radius: 0.5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    .tile-number {
        font-family: consolas;
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        z-index: 100;
        user-select: none;
    }
}
</style>