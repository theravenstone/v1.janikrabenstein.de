<template>
<section class="container mx-auto p-6 mb-12">
    <div class="text-center py-24">
      <h1 class="font-bold text-5xl mb-6">Heyy, ich bin<br/>
	  	<span class="text-primary">Janik Rabenstein</span>
	  </h1>
    
      <p class="font-mono text-lg mb-6">Webentwickler aus dem Landkreis Bayreuth <span class="animate-wiggle mb-6 inline-block">👋</span></p>
      
      <div class="flex justify-center">
        <Button text="Test text hier " />
      </div>
    </div>
 
</section>
</template>
<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'

export default {
  components: {
    Button
  }
}
</script>

<style>

</style>