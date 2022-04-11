<template>

  <header class="w-full p-6 md:fixed top-0 bg-white dark:bg-slate-900 shadow transition duration-300 z-50">
    <div class="container mx-auto">
      <div class="flex flex-wrap flex-col md:flex-row items-center">
        <router-link to="/" class="flex title-font font-medium items-center mb-4 md:mb-0">
          <img src="@/assets/logo.png" alt="" width="50" height="50" class="inline-block mr-3">
          <span class="font-bold ml-3 text-2xl">Janik Rabenstein</span>
        </router-link>
        <nav id="menu"
          class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l-2 md: border-slate-300 md:dark:border-slate-800 flex flex-wrap items-center text-base justify-center transition duration-300">
          <router-link to="/"
            class="mr-5 hover:text-slate-900 dark:hover:text-white text-slate-600 dark:text-slate-400 transition duration-300">
            Startseite</router-link>
          <router-link to="/blog"
            class="mr-5 hover:text-slate-900 dark:hover:text-white text-slate-600 dark:text-slate-400 transition duration-300">
            Blog</router-link>
        </nav>
        <div class="inline-flex items-center">
          <DarkmodeSwitch />
        </div>
      </div>
    </div>
    </header>
</template>

<script>
import DarkmodeSwitch from '@/components/DarkModeSwitch.vue'

export default {
  name: 'HomeView',
  components: {
    DarkmodeSwitch
  }
}
</script>