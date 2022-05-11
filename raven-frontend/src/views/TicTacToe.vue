<template>
    <section class="pt-32 text-center">
        <h1 class="mb-12 text-3xl font-bold uppercase">Tic Tac Toe</h1>

        <span class="text-xl mb-3">Spieler {{ player }} ist dran!</span>

        <div class="flex flex-col items-center mb-12">
            <div v-for="(row, x) in board" :key="x" class="flex">
                <div v-for="(cell, y) in row" :key="y" @click="MakeMove(x, y)"
                    :class="`border border-slate-900 dark:border-white w-24 h-24 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center text-4xl cursor-pointer ${cell === 'X' ? 'text-pink-500' : 'text-blue-400'}`">
                    {{ cell === 'X' ? 'X' : cell === 'O' ? 'O' : '' }}
                    
                </div>
            </div>
        </div>

        <div class="text-center mb-6">
            <span v-if="winner" class="text-6xl font-bold mb-8">Spieler '{{ winner }}' gewinnt!</span>
            <button @click="ResetGame"
                class="px-4 py-2 bg-primary rounded uppercase font-bold hover:bg-primary-hover duration-300">Zurücksetzen</button>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const player = ref('X')
const board = ref([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
])

const CalculateWinner = (board) => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]
        }
    }

    return null
}

const winner = computed(() => CalculateWinner(board.value.flat()))

const MakeMove = (x, y) => {
    if (winner.value) return

    if (board.value[x][y]) return

    board.value[x][y] = player.value

    player.value = player.value === 'X' ? 'O' : 'X'
}

const ResetGame = () => {
    board.value = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
    player.value = 'X'
}

</script>

<style>
body {
    @apply bg-slate-800 text-white;
}
</style>