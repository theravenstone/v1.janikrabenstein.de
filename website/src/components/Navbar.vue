<template>
  <header class="w-full p-6 fixed top-0 bg-white dark:bg-slate-900 shadow transition duration-300 z-50">
    <div class="flex flex-wrap flex-row items-center">
      <router-link to="/" class="flex title-font font-medium items-center md:mb-0">
        <img src="@/assets/logo.png" alt="Janik Rabenstein Logo" class="inline-block mr-3 w-12 h-12">
        <span class="font-bold ml-3 text-2xl">Janik Rabenstein</span>
      </router-link>



      <nav id="menu"
        class="hidden md:ml-4 md:py-1 md:pl-4 md:border-l-2 md:border-slate-300 md:dark:border-slate-800 md:flex flex-wrap items-center text-base justify-center">
        <router-link to="/" class="mr-5 hover:text-slate-900 dark:hover:text-white text-slate-600 dark:text-slate-400">
          Startseite
        </router-link>
        <router-link to="/blog"
          class="mr-5 hover:text-slate-900 dark:hover:text-white text-slate-600 dark:text-slate-400">
          Blog
        </router-link>
        <router-link to="/projects"
          class="mr-5 hover:text-slate-900 dark:hover:text-white text-slate-600 dark:text-slate-400">
          Projekte
        </router-link>
      </nav>

      <button aria-label="Menü öffnen" @click="drawer" class="ml-auto">
        <i class="fa-solid fa-bars-staggered w-6 h-6"></i>
      </button>

      <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

      <aside
        class="transform top-0 left-0 w-80 max-w-full bg-white dark:bg-slate-900 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <span @click="isOpen = false" class="flex w-full items-center p-6">
          <router-link to="/" class="flex title-font font-medium items-center">
            <img src="@/assets/logo.png" alt="Janik Rabenstein Logo" width="50" height="50" class="inline-block mr-3">
            <span class="font-bold ml-2 text-2xl">Janik Rabenstein</span>
          </router-link>
        </span>

        <span
          class="flex w-full items-center px-4 border-b-2 border-slate-300 dark:border-slate-800 font-mono mt-6 text-primary">Seiten</span>
        <router-link to="/" @click="isOpen = false" class="flex items-center p-4 hover:bg-primary hover:text-white">
          <i class="fa-solid fa-house-chimney mr-2"></i>
          <span>Startseite</span>
        </router-link>
        <router-link to="/blog" @click="isOpen = false" class="flex items-center p-4 hover:bg-primary hover:text-white">
          <i class="fa-solid fa-books mr-2"></i>
          <span>Blog</span>
        </router-link>
        <router-link to="/projects" @click="isOpen = false"
          class="flex items-center p-4 hover:bg-primary hover:text-white">
          <i class="fa-solid fa-circle-nodes mr-2"></i>
          <span>Projekte</span>
        </router-link>

        <span
          class="flex w-full items-center px-4 border-b-2 border-slate-300 dark:border-slate-800 font-mono mt-6 text-primary">Theme</span>
        <DarkmodeSwitch />

        <span
          class="flex w-full items-center px-4 border-b-2 border-slate-300 dark:border-slate-800 font-mono mt-6 text-primary">Spiele</span>
        <router-link to="/games/tictactoe" @click="isOpen = false"
          class="flex items-center p-4 hover:bg-primary hover:text-white ">
          <i class="fa-solid fa-scale-balanced mr-2"></i>
          <span>Tic Tac Toe</span>
        </router-link>

        <span
          class="flex w-full items-center px-4 border-b-2 border-slate-300 dark:border-slate-800 font-mono mt-6 text-primary">Rechtliches</span>
        <router-link to="/impressum" @click="isOpen = false"
          class="flex items-center p-4 hover:bg-primary hover:text-white ">
          <i class="fa-solid fa-scale-balanced mr-2"></i>
          <span>Impressum</span>
        </router-link>


        <div class="fixed bottom-0 w-full flex justify-around p-4 text-xl">
          <a rel="noopener noreferrer" href="mailto:janik.rabenstein@gmail.com" title="Email"
            class="flex items-center justify-center w-10 h-10 rounded-full hover:text-primary dark:text-white text-slate-900 transition duration-300">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/theravenstone" title="GitHub"
            class="flex items-center justify-center w-10 h-10 rounded-full hover:text-primary dark:text-white text-slate-900 transition duration-300">
            <i class="fa-brands fa-github"></i>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://discord.com/users/594922360553865216"
            title="Discord"
            class="flex items-center justify-center w-10 h-10 rounded-full hover:text-primary dark:text-white text-slate-900 transition duration-300">
            <i class="fa-brands fa-discord"></i>
          </a>

        </div>
      </aside>
    </div>
  </header>
</template>

<script>
import DarkmodeSwitch from '@/components/DarkModeSwitch.vue'

export default {
  name: 'HomeView',
  components: {
    DarkmodeSwitch
  },

  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
};
</script>
