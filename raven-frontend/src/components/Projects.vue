<template>
    <section class="container mx-auto p-6">
        <div class="flex flex-col sm:text-center w-full mb-6 sm:mb-12">
            <span class="text-xs text-primary tracking-widest font-medium mb-1">Cool Stuff</span>
            <h2 class="font-bold text-4xl mb-5">Meine Projekte</h2>
            <p class="text-md">Was ich bisher so gemacht habe</p>
        </div>
        <div v-for="project in projects" :key="project.id">
            
                <div class="px-5 py-24 flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" class="object-cover object-center h-full w-full"
                            src="https://dummyimage.com/460x200">
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="flex-grow">
                                <h2 class="text-primary text-2xl title-font font-medium mb-3">{{ project.name }}</h2>
                                <p class="leading-relaxed text-base mb-3">
                                    {{ project.description }}
                                </p>
                                
                                <div class="mb-3">
                                    <span class="tracking-widest text-xs title-font font-medium bg-primary px-3 py-1 mr-2 rounded-md">
                                       React
                                    </span>
                                    <span class="tracking-widest text-xs title-font font-medium bg-primary px-3 py-1 mr-2 rounded-md">
                                       Bootstrap
                                    </span>

                                </div>
                                <a v-if="project.url" href="{{ project.url }}" class="mb-3"><i class="fa-solid fa-link mr-3"></i>{{ project.url }}</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
        </section>
</template>

<script>
export default {
data() {
    return {
      projects: [
  {
    "id": 1,
    "name": "Social Media Event App (SMEA)",
    "description": "Eine Social Media App mit der unsere Benutzer Events anlegen und beitreten können um nichts zu verpassen!",
    "url": "https://smea.janikrabenstein.de"
  }
]
    }
  },
  mounted() {
    fetch('http://api.localhost:81/get_projects.php')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(error => console.log(error.message))
  }
}
</script>

<style>
</style>