<template>
    <button v-if="darkMode" type="button" class="text-sm flex hover:bg-slate-100 dark:hover:bg-slate-800 p-3 rounded-md transition duration-300" @click="setLightMode">
        <i class="fa-solid fa-sun"></i>
    </button>
    <button v-else type="button" class="flex text-sm hover:bg-slate-100 dark:hover:bg-slate-800 p-3 rounded-md transition duration-300" @click="setDarkMode">
        <i class="fa-solid fa-moon"></i>
    </button>   
</template>

<script>

export default {
data(){
    return{
        darkMode: null
    }
},
methods: {
    toggleDarkMode(){
      if(this.darkMode){
          this.setDarkMode()
      } else{
          this.setLightMode()
      } 
    },
    setDarkMode(){
        this.darkMode = true;
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
    },
    setLightMode(){
        this.darkMode = false;
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark')
    }
},
mounted(){
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  
  this.darkMode = true;
} else {
  document.documentElement.classList.remove('dark');
  this.darkMode = false;
}
}
}
</script>