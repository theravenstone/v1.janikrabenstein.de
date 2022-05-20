<template>
  <section class="container mx-auto p-6 mb-6 mt-24">
    <h1 class="font-bold text-5xl mb-12">Blog.</h1>
    <div v-if="posts[0]" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div v-for="post in posts" :key="post.id">
        <div
          class="h-full border-2 border-slate-100 dark:border-slate-800 rounded-md overflow-hidden lg:hover:-translate-y-4 transition duration-300">
          <router-link :to="'/blog/post/' + post.slug">
            <div class="p-6 relative h-full flex flex-col">
              <div class="mb-2 flex justify-between">
                <span class="text-sm text-slate-500">
                  <i class="fa-solid fa-calendar-days mr-2"></i>{{ post.date }}
                </span>
                <div>
                  <span v-for="tag in post.tags" :key="tag.id"
                    class="tracking-widest text-xs title-font font-medium bg-primary px-3 py-1 ml-2 rounded-md">
                    {{ tag.name }}
                  </span>
                </div>
              </div>
              <h1 class="title-font text-xl font-medium mb-3">
                {{ post.title }}
              </h1>
              <p class="leading-relaxed mb-3">{{ post.teaser }}</p>
              <div class="flex items-center flex-wrap mt-auto">
                <span
                  class="inline-flex hover:text-primary transition duration-300 dark:text-primary dark:hover:underline">
                  Weiterlesen<i class="fa-solid fa-arrow-right ml-2 self-center"></i>
                </span>
                <span
                  class="text-slate-500 mr-3 hidden sm:inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
                  Von Janik Rabenstein
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <p><i class="fa-solid fa-triangle-exclamation mr-3 text-rose-500"></i>Es sind noch keine Blog Beiträge vorhanden.
      </p>
    </div>
    </section>
</template>

<script>
export default {
  props: ["slug"],
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch("/api/get_blog_posts.php")
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style>
</style>