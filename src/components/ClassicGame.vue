<script setup lang="ts">
import Board from './Board.vue';
import Mask from './Mask.vue';
import { blur } from '../utils/button';
import { use2048 } from '../utils/2048';
import { ref, computed, watch } from 'vue';
import { onKeyStroke, useSwipe, useTransition } from '@vueuse/core';

const emit = defineEmits<{
    (e: 'up'): void
    (e: 'down'): void
    (e: 'left'): void
    (e: 'right'): void
    // (e: 'update:seed'): string
}>()

const game = use2048()
game.initialize()
// game.test()

const score = useTransition(computed(() => game.score.value), { duration: 100 })
const highScore = useTransition(computed(() => game.highScore.value), { duration: 100 })

const board = ref<HTMLElement>()

const { direction } = useSwipe(board, {
    threshold: 10
})

watch(direction, () => {
    if (direction.value == 'up') {
        game.up()
    }

    if (direction.value == 'down') {
        game.down()
    }

    if (direction.value == 'left') {
        game.left()
    }

    if (direction.value == 'right') {
        game.right()
    }
})

const canMove = computed(() => {
    if (game.hasWon.value && game.firstWon.value) {
        return false
    }

    if (game.isGameOver.value) {
        return false
    }

    if (game.reachedLimit.value) {
        return false
    }

    return true
})

onKeyStroke(['ArrowUp', 'w'], () => {
    if (!canMove.value) {
        return
    }

    game.up()
    emit('up')
})

onKeyStroke(['ArrowDown', 's'], () => {
    if (!canMove.value) {
        return
    }

    game.down()
    emit('down')
})

onKeyStroke(['ArrowLeft', 'a'], () => {
    if (!canMove.value) {
        return
    }

    game.left()
    emit('left')
})

onKeyStroke(['ArrowRight', 'd'], () => {
    if (!canMove.value) {
        return
    }

    game.right()
    emit('right')
})
</script>

<template>
    <div class="container-game">
        <div class="container-header">
            <div style="width: 20%; height: 100px;">
                <div class="text1">成绩</div>
                <div class="score1">{{ score.toFixed(0) }}</div>
            </div>
            <span style="flex: 1 1 0%;"></span>
            <div style="width: 20%; height: 100px;">
                <div class="text2">最高成绩</div>
                <div class="score2">{{ highScore.toFixed(0) }}</div>
            </div>
            <button primary @click="game.initialize(); blur(`new_game`);" class="button new-game" id="new_game">重玩一局</button>
        </div>

        <transition>
            <Mask v-if="game.isGameOver.value" :color="'white'" style="position: absolute; bottom: 0rem;">
                <p v-if="game.firstWon.value" class="mask-text" style="position: relative; top: 11.25rem;">你输了</p>
                <p v-else class="mask-text" style="position: relative; top: 11.25rem;">你输了，但你曾经赢过</p>
            </Mask>
        </transition>

        <transition>
            <Mask v-if="game.hasWon.value && game.firstWon.value" :color="'gold'" style="position: absolute; bottom: 0rem;">
                <p class="mask-text" style="position: relative; top: 8.75rem;">你赢了</p>
                <button primary @click="game.hasWon.value=false; game.firstWon.value=false" class="button continue">继续</button>
            </Mask>
        </transition>

        <transition>
            <Mask v-if="game.reachedLimit.value" :color="'white'" style="position: absolute; bottom: 0rem;">
                <p class="mask-text" style="position: relative; top: 11.25rem;">你来到了游戏的尽头</p>
            </Mask>
        </transition>

        <Board :board="game.board.value" :score="game.score.value" class="container-board" style="bottom: 0rem;"></Board>
    </div>
</template>

<style lang="scss" scoped>
.container-game {
    width: 37rem;
    min-height: 44.25rem;
    margin: 1rem auto;
    position: relative;
}

.container-header {
    width: 100%;
    max-width: 37rem;
    margin-bottom: 1rem;
    position: relative;
    display: flex;
}

.container-board {
    width: 37rem;
    position: relative;
}

.score1 {
    font-family: 'consolas';
    font-size: 80px;
    font-weight: bold;
    text-align: left;
    position: absolute;
    bottom: -32px;
    left: 0rem;
    user-select: none;
}

.score2 {
    font-family: 'consolas';
    font-size: 24px;
    font-weight: bold;
    text-align: right;
    position: absolute;
    bottom: 50px;
    right: 0rem;
    user-select: none;
}

.text1 {
    font-family: 'Microsoft YaHei';
    font-size: 32px;
    font-weight: bold;
    text-align: left;
    position: absolute;
    top: -8px;
    left: 0rem;
    user-select: none;
}

.text2 {
    font-family: 'Microsoft YaHei';
    font-size: 16px;
    font-weight: bold;
    text-align: right;
    position: absolute;
    top: -2px;
    right: 0rem;
    user-select: none;
}

.button {
    width: 144px;
    height: 48px;
    border-radius: 24px;
    font-family: 'Microsoft Yahei';
    font-size: 20px;
    font-weight: bold;
    padding: 0.25rem;
    background-color: white;
    color: black;
    border-color: black;
}

.new-game {
    position: absolute;
    bottom: 0rem;
    right: 0rem;
}

.continue {
    position: relative;
    top: 6.625rem;
}

.mask-text {
    font-family: 'Microsoft Yahei';
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    user-select: none;
}

@media screen and (max-width: 500px){
    .score1 {
        font-size: 50px;
        bottom: -1.2rem;
    }

    .score2 {
        bottom: 42px;
    }

    .text1 {
        top: 0px;
    }

    .text2 {
        top: 6px;
    }

    .button {
        width: 9rem;
        height: 3rem;
        border-radius: 1.5rem;
        font-size: 1.5rem;
    }

    .new-game {
        bottom: 1rem;
    }
}

.v-enter-from {
    opacity: 0;
}

.v-enter-active {
    transition: opacity 1s ease-out;
}

.v-enter-to {
    opacity: 1;
}

.v-leave-from {
    opacity: 1;
}

.v-leave-active {
    transition: opacity 0.1s ease-out;
}

.v-leave-to {
    opacity: 0;
}
</style>