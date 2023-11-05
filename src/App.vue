<script setup lang="ts">
// import Timer from './components/Timer.vue';
// import { ref } from 'vue';

// const stop = ref(true)
// const timeIsUp = ref(false)

// function timeUp(childrenMessage: boolean) {
//     timeIsUp.value = childrenMessage
// }

import { setRem } from './utils/resize'
const resize = () => setRem(656, 804)

resize()
window.addEventListener('resize', resize)
</script>

<template>
    <!-- <Timer :seconds="5" :stop="stop" @time-up="timeUp"></Timer>
    <button @click="stop = !stop" style="margin: 16px;">
        {{ stop ? 'start' : 'stop' }}
    </button>
    <div v-if="timeIsUp">Time is up!</div> -->
    <RouterView></RouterView>

    <!-- <DuelGame></DuelGame> -->

    <!-- <ClassicGame></ClassicGame> -->
</template>

<style lang="scss" scoped>

</style>