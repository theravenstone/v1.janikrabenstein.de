<template>
  <div
    class="px-5 py-2 mr-3 mb-3 font-semibold rounded-full dark:bg-primary dark:text-slate-800 inline-block text-1xl dark:hover:bg-primary-hover transition duration-300">
    {{ text }}
  </div>
</template>
<script>
export default {
  props: {
    text: String
  }
}
</script>