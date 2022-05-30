<template>
  <div class="bg-white text-slate-900 dark:bg-slate-900 dark:text-white transition duration-300">
    <Navbar />

    <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
    </router-view>

    <Footer />  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>