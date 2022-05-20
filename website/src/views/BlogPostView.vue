<template>
    <section class="container mx-auto p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="col-span-2">
                <h1 class="font-bold text-5xl mb-6">{{ post.title }}</h1>
                <p class="text-slate-500 mb-5">Veröffentlicht am {{ post.date }} von Janik Rabenstein</p>
                <!-- TODO Tags -->
                <div v-if="post.tags" class="mb-6">
                    <span v-for="tag in post.tags" :key="tag.id" class="tracking-widest text-xs title-font font-medium bg-primary px-3 py-1 mr-2 rounded-md">{{ tag.name }}</span>
                </div>
                <p class="text-xl mb-3">
                    <b>{{ post.teaser }}</b>
                </p>
                <p class="text-xl mb-3">
                    {{ post.content }}
                </p>
            </div>
            <div class="h-min border-2 border-slate-300 dark:border-slate-800 rounded-md p-6 transition duration-300">
                <h6 class="font-bold text-2xl mb-6">Alle Tags.</h6>
                <div v-if="tags">
                    <span v-for="tag in tags" :key="tag.id" class="tracking-widest text-xs title-font font-medium bg-primary px-3 py-1 mr-2 rounded-md">{{ tag.name }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['slug'],
    data(){
        return{
            post: {},
            tags: []
        }
    },
    created() {
        fetch('https://janikrabenstein.de/api/get_blog_post.php?slug=' + this.$route.params.slug )
        .then(res => res.json())
        .then(data => this.post = data)
        .catch(error => console.log(error.message))

        fetch('https://janikrabenstein.de/api/get_tags.php')
        .then(res => res.json())
        .then(data => this.tags = data)
        .catch(error => console.log(error.message))

        // TODO Redirect wenn beitrag nicht vorhanden
    }
}
</script>

<style>

</style>