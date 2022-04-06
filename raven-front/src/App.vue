<template>
  <div class="bg-white text-slate-900 dark:bg-slate-900 dark:text-white transition duration-300">
    <Navbar/>
  
  <router-view/>

    <Footer/>
  </div>
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

