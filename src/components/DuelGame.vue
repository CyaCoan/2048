<script setup lang="ts">
import Board from './Board.vue';
import HealthPointBar from './HealthPointBar.vue';
// import { blur } from '../utils/button';
import { Status, use2048Duel } from '../utils/2048duel';
import { setRem } from '../utils/resize';
import { ref, watch, computed } from 'vue';
import { useTransition, onKeyStroke } from '@vueuse/core';

const resize = () => setRem(656, 804)
resize()
window.addEventListener('resize', resize)

const emit = defineEmits<{
    (e: 'up'): void
    (e: 'down'): void
    (e: 'left'): void
    (e: 'right'): void
    (e: 'update:seed'): string
}>()

const game = use2048Duel()
game.initialize()

const hp = ref(1024)
const max = hp.value
const cur_hp = useTransition(computed(() => hp.value), { duration: 100 })

const canMove = computed(() => {
    if (game.isStuck.value) {
        return false
    }

    if (willTriggerProp.value) {
        return false
    }

    return true
})

const willTriggerProp = computed(() => {
    if (game.trigger_pos.value[0] !== -1 && game.trigger_pos.value[1] !== -1) {
        return true
    }

    return false
})

watch(willTriggerProp, () => {
    if (willTriggerProp.value === true) {
        setTimeout(() => {
            game.triggerTileProp(game.trigger_pos.value)
            game.trigger_pos.value = [-1, -1]
        }, 300)
    }
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

onKeyStroke('Enter', () => {
    const num = game.biggestTile.value[0]
    const i = game.biggestTile.value[1]
    const j = game.biggestTile.value[2]

    if (num < 64 || num > hp.value) {
        return
    }

    game.deleteTile(i, j)
    hp.value -= num

    if (game.isStuck.value === true) {
        game.isStuck.value = false
    }
})

onKeyStroke(' ', () => {
    const num = game.biggestTile.value[0]
    const i = game.biggestTile.value[1]
    const j = game.biggestTile.value[2]

    if (num < 64) {
        return
    }

    let status = 'normal'
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            status = 'row'
            break
        case 1:
            status = 'column'
            break
        case 2:
            status = 'bomb'
            break
        case 3:
            status = 'heal'
            break
    }

    game.setTileProp(i, j, status as Status)
})

onKeyStroke('f', () => {
    game.board.value = game.setRandomTile(game.board.value, 'frozen')
})
</script>

<template>
    <div class="container-game">
        <div class="container-header">
            <div style="width: 35%; height: 3.5rem;">
                <div class="hp-text">生命值</div>
            </div>
            <span style="flex: 1 1 0%;"></span>
            <div style="width: 35%; height: 3.5rem;">
                <div class="hp-value">{{ cur_hp.toFixed(0) }}/{{ max }}</div>
            </div>
        </div>

        <HealthPointBar :hp="cur_hp" :max="max" :side="'left'"></HealthPointBar>
        <Board :board="game.board.value" style="bottom: 0rem;"></Board>
        <!-- <button @click="game.initialize(); hp = 1024; blur(`new_game`)" class="new-game" id="new_game">重玩一局</button> -->
        <!-- <p style="position: absolute; top: 220px; right: 240px; font-family: 'consolas'; font-size: 40px;">{{ cur_hp.toFixed(0) }} / {{ max }}</p> -->
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
    margin-bottom: 0.5rem;
    position: relative;
    display: flex;
}

.new-game {
    width: 144px;
    height: 50px;
    border-radius: 25px;
    font-family: 'Microsoft Yahei';
    font-size: 20px;
    font-weight: bold;
    padding: 4px;
    background-color: white;
    color: black;
    border-color: black;
    position: absolute;
    top: 180px;
    right: 280px;
}

.hp-text {
    font-family: 'Microsoft YaHei';
    font-size: 2.25rem;
    font-weight: bold;
    text-align: left;
}

.hp-value {
    font-family: 'consolas';
    font-size: 2.5rem;
    font-weight: bold;
    text-align: right;
}
</style>