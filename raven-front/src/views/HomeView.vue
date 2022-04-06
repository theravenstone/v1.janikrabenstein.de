<template>
  <div class="home">
    <Hero/>
    <AboutMe/>
    <Skills/>
    <BlogLatest/>
    <ThankYou/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import ThankYou from '@/components/ThankYou.vue'
import BlogLatest from '@/components/BlogLatest.vue'


export default {
  name: 'HomeView',
  components: {
    Hero,
    AboutMe,
    Skills,
    ThankYou,
    BlogLatest
  }
}
</script>
