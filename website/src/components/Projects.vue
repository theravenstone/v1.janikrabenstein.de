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
                    <img v-if="project.image" :alt="project.name + ' Mockup'" class="object-cover object-center h-full w-full" :src="'/projects/' + project.image">
                    <img v-else :alt="project.name + ' Mockup'" class="object-cover object-center h-full w-full" src="https://dummyimage.com/600x450/000/fff">
                
                </div>
                <div class="p-6 flex">
                    <div class=" self-center">
                        <h2 class="text-primary text-2xl title-font font-medium mb-3">{{ project.name }}</h2>
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
            projects: [
                {
                    id: 1,
                    name: "Vulpo",
                    description: "Diese Website habe ich für einen guten Freund von mir gebaut der einen Discord Bot entwickelt. Der Bot sowie seine Funktionen sollen auf dieser Website präsentiert werden.",
                    url: "https://vulpo.netlify.app",
                    image: "vulpo.png",
                    tags: [
                        {
                            id: 1,
                            name: "Vue.js",
                        },
                        {
                            id: 2,
                            name: "Tailwindcss",
                        },
                    ]
                },
                {
                    id: 2,
                    name: "RAVEN'S REVENGE",
                    description: "Eine Website mit Anbindung an die Clash of Clans API. Die Website wird dazu verwendet Statistiken über den Clan und seine Spieler anzuzeigen.",
                    url: "https://ravensrevenge.netlify.app",
                    image: "ravensrevenge.png",
                    tags: [
                        {
                            id: 1,
                            name: "Vue.js",
                        },
                        {
                            id: 2,
                            name: "Tailwindcss",
                        },
                        {
                            id: 3,
                            name: "PHP",
                        },
                        {
                            id: 4,
                            name: "API",
                        },
                    ]
                },
                {
                    id: 3,
                    name: "RAVEN Discord Bot",
                    description: "RAVEN ist ein Discord Bot geschrieben in Python.",
                    url: "https://raven-bot.xyz",
                    tags: [
                        {
                            id: 1,
                            name: "Python",
                        },
                        {
                            id: 2,
                            name: "Flask",
                        },
                        {
                            id: 1,
                            name: "Bootstrap",
                        },
                    ]
                },
                {
                    id: 4,
                    name: "Opera",
                    description: "Luxuriöse Bademode by OPERA® in einzigartiger Qualität. An diesem Projekt habe ich während meiner Ausbildung gearbeitet.",
                    url: "https://myopera.info",
                    tags: [
                        {
                            id: 1,
                            name: "Bootstrap",
                        },
                    ]
                },
                {
                    id: 5,
                    name: "André Hagen",
                    description: "André Hagen – Der Optiker | Für mehr Spaß an der Brille! An diesem Projekt habe ich während meiner Ausbildung gearbeitet.",
                    url: "https://optiker-bayreuth.de",
                    tags: [
                        {
                            id: 1,
                            name: "WordPress",
                        },
                        {
                            id: 2,
                            name: "Bootstrap",
                        },
                    ]
                },
                {
                    id: 6,
                    name: "Colorworks Bayreuth",
                    description: "Lackdoktor & Smart-Repair Spezialist – Colorworks Bayreuth. An diesem Projekt habe ich während meiner Ausbildung gearbeitet.",
                    url: "https://www.colorworks-bayreuth.de",
                    tags: [
                        {
                            id: 1,
                            name: "Processwire",
                        },
                        {
                            id: 2,
                            name: "UIkit",
                        },
                    ]
                },
                {
                    id: 7,
                    name: "Fliesenhaus Christ",
                    description: "Fliesenhaus Christ | Ihr Spezialist für Fliesen und Natursteine. An diesem Projekt habe ich während meiner Ausbildung gearbeitet.",
                    url: "https://fliesenhaus-christ.de",
                    tags: [
                        {
                            id: 1,
                            name: "Processwire",
                        },
                        {
                            id: 2,
                            name: "UIkit",
                        },
                    ]
                },
                {
                    id: 8,
                    name: "Social Media Event App (SMEA)",
                    description: "Mit SMEA kannst du Events erstellen und daran teil nehmen. Siehe was deine Freunde machen oder verabrede dich spontan zum Pizzaessen.",
                    url: "",
                    tags: [
                        {
                            id: 1,
                            name: "React",
                        },
                        {
                            id: 2,
                            name: "Bootstrap",
                        },
                    ]
                },
            ]
        }
    },
    mounted() {
        fetch('http://api.localhost:81/get_projects.php')
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