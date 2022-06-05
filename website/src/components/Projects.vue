<template>
  <section class="container mx-auto p-6 mb-6 mt-24">
    <h1 class="font-bold text-5xl mb-12">Projekte.</h1>
    <div v-if="projects[0]" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div v-for="project in projects" :key="project.id">
        
      </div>
    </div>
    <div v-else>
      <p><i class="fa-solid fa-triangle-exclamation mr-3 text-rose-500"></i>Es sind noch keine Projekte vorhanden.
      </p>
    </div>
    </section>
</template>

<script>
export default {
  props: ["slug"],
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("/api/get_projects.php")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style>
</style>