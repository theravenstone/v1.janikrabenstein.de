<template>
    <a href="{{ href }}" class="bg-primary text-white px-3 py-2 rounded-md text-1xl font-medium hover:bg-secondary transition duration-300">{{ text }}</a>
</template>
<script>
export default {
  props: {
    text: String,
    href: String
  }
}
</script>