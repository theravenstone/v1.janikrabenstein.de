<template>
    <section v-if="projects[0]" class="container mx-auto p-6">
        <div class="flex flex-col sm:text-center w-full mb-6 sm:mb-12">
            <span class="text-xs text-primary tracking-widest font-medium mb-1">Cool Stuff</span>
            <h2 class="font-bold text-4xl mb-5">Meine Projekte</h2>
            <p class="text-md">Was ich bisher entwickelt habe</p>
        </div>
        <div class="mb-6" v-for="project in projects" :key="project.id">

            <div class="grid md:grid-cols-2 gap-4">
                <div class="mb-10 lg:mb-0 rounded-lg overflow-hidden" :class="isEven(project.id) ? 'md:order-last' : ''">
                    <img :alt="project.name" class="object-cover object-center h-full w-full" :src="project.image">
                </div>
                <div class="p-6 flex">
                    <div class=" self-center">
                        <h3 class="text-primary text-2xl title-font font-medium mb-3">{{ project.name }}</h3>
                        <p class="leading-relaxed text-base mb-3">
                            {{ project.description }}
                        </p>

                        <div class="mb-3" v-if="project.tags">
                            <span v-for="tag in project.tags" :key="tag.id"
                                class="tracking-widest text-xs title-font font-medium bg-primary px-3 py-1 mr-2 rounded-md">
                                {{ tag.name }}
                            </span>
                        </div>
                        <a v-if="project.url" :href="project.url" rel="noopener noreferrer" target="_blank"
                            class="mb-3"><i class="fa-solid fa-link mr-3"></i>{{ project.url }}</a>
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
            projects: []
        }
    },
    mounted() {
        fetch('/api/get_projects.php')
            .then(res => res.json())
            .then(data => this.projects = data)
            .catch(error => console.log(error.message))

        console.log(this.projects)
    },
    methods: {
        isEven(n) {
            return n % 2 == 0;
        }
    }
}
</script>

<style>
</style>