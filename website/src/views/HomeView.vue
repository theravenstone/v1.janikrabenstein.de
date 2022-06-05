<template>
  <div class="home">
    <Hero/>
    <AboutMe/>
    <ProjectsFeatured/>
    <Skills/>
    <BlogLatest/>
    <ThankYou/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import AboutMe from '@/components/AboutMe.vue'
import ProjectsFeatured from '@/components/ProjectsFeatured.vue'
import Skills from '@/components/Skills.vue'
import BlogLatest from '@/components/BlogLatest.vue'
import ThankYou from '@/components/ThankYou.vue'



export default {
  name: 'HomeView',
  components: {
    Hero,
    AboutMe,
    ProjectsFeatured,
    Skills,
    BlogLatest,
    ThankYou,
  }
}
</script>
