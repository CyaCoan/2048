<script setup lang="ts">
import { Status } from '../utils/2048duel';

const props = defineProps<{
    status: Status
}>()
</script>

<template>
    <div v-if="props.status === 'row'" class="arrow-left" style="top: 3.375rem; left: 0.5rem;"></div>
    <div v-if="props.status === 'row'" class="arrow-right" style="top: 3.375rem; right: 0.5rem;"></div>

    <div v-if="props.status === 'column'" class="arrow-up" style="top: 0.5rem; left: 3.375rem;"></div>
    <div v-if="props.status === 'column'" class="arrow-down" style="bottom: 0.5rem; left: 3.375rem;"></div>

    <div v-if="props.status === 'bomb'" class="container-prop">
        <img src="../assets/bomb-white.svg" class="bomb" style="top: 0rem; left: 1rem;"/>
    </div>

    <div v-if="props.status === 'frozen'" class="container-prop">
        <img src="../assets/ice-cube-white.svg" class="ice-cube" style="top: 0.5rem; left: 0.5rem; transform: rotate(-2deg);"/>
    </div>

    <div v-if="props.status === 'heal'" class="container-prop">
        <img src="../assets/health-white.svg" class="health" style="top: 2px; left: -1px;"/>
    </div>
</template>

<style lang="scss" scoped>
.arrow-left {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-top: 0.25rem solid white;
    border-left: 0.25rem solid white;
    transform: rotate(-45deg);
    animation: arrow-move-left 0.75s infinite;
}

@keyframes arrow-move-left {
    0% {
        opacity: 0;
        transform: rotate(-45deg) translate(0.5rem, 0.5rem);
    }
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(-45deg) translate(-0.5rem, -0.5rem);
    }
}

.arrow-right {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-top: 0.25rem solid white;
    border-left: 0.25rem solid white;
    transform: rotate(135deg);
    animation: arrow-move-right 0.75s infinite;
}

@keyframes arrow-move-right {
    0% {
        opacity: 0;
        transform: rotate(135deg) translate(0.5rem, 0.5rem);
    }
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(135deg) translate(-0.5rem, -0.5rem);
    }
}

.arrow-up {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-top: 0.25rem solid white;
    border-left: 0.25rem solid white;
    transform: rotate(45deg);
    animation: arrow-move-up 0.75s infinite;
}

@keyframes arrow-move-up {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(0.5rem, 0.5rem);
    }
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(45deg) translate(-0.5rem, -0.5rem);
    }
}

.arrow-down {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-top: 0.25rem solid white;
    border-left: 0.25rem solid white;
    transform: rotate(-135deg);
    animation: arrow-move-down 0.75s infinite;
}

@keyframes arrow-move-down {
    0% {
        opacity: 0;
        transform: rotate(-135deg) translate(0.5rem, 0.5rem);
    }
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(-135deg) translate(-0.5rem, -0.5rem);
    }
}

.container-prop {
    width: 8rem;
    height: 8rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bomb {
    position: absolute;
    height: 7rem;
    animation: flicker 1.5s infinite;
}

.ice-cube {
    position: absolute;
    height: 7rem;
}

.health {
    position: absolute;
    height: 8.125rem;
    animation: flicker 1.5s infinite;
}

@keyframes flicker {
    0% {
        opacity: 0.6;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0.6;
    }
}
</style>