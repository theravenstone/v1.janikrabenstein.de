<template>
  <div class="home">
    <Hero/>
    <AboutMe/>
    <Projects/>
    <Skills/>
    <BlogLatest/>
    <ThankYou/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import AboutMe from '@/components/AboutMe.vue'
import Projects from '@/components/Projects.vue'
import Skills from '@/components/Skills.vue'
import BlogLatest from '@/components/BlogLatest.vue'
import ThankYou from '@/components/ThankYou.vue'



export default {
  name: 'HomeView',
  components: {
    Hero,
    AboutMe,
    Projects,
    Skills,
    BlogLatest,
    ThankYou,
  }
}
</script>
