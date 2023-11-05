<script setup lang="ts">
// import ClassicGame from './components/ClassicGame.vue';
// import Timer from './components/Timer.vue';
// import { ref } from 'vue';

// const stop = ref(true)
// const timeIsUp = ref(false)

// function timeUp(childrenMessage: boolean) {
//     timeIsUp.value = childrenMessage
// }

import { onBeforeMount } from 'vue';
import { setRem } from './utils/resize'
import { useRouter } from 'vue-router';
import { useSessionStorage } from '@vueuse/core';

const resize = () => setRem(656, 804)

resize()
window.addEventListener('resize', resize)

const router = useRouter()
const redirect = useSessionStorage('redirect', '')

onBeforeMount(async () => {
    if (redirect.value) {
        await router.push(redirect.value)
        redirect.value = ''
    }
})
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