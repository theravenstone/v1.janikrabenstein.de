<template>
  <section class="p-6 mb-24 bg-slate-800">
    <div class="container mx-auto">
      <div class="flex flex-col sm:text-center w-full">
        <span class="text-xs text-primary tracking-widest font-medium mb-1">Real Life</span>
        <h2 class="font-bold text-4xl mb-5">Über Mich</h2>
        <p class="text-md">Infos und Fun Facts.</p>
      </div>
      <div class="  flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-slate-800 text-slate-600">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-lg">Janik Rabenstein</h2>
                <div class="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                <p class="text-base text-slate-600 dark:text-slate-400">{{ age }} Jahre jung.<br />Aufgewachsen im
                  Fichtelgebirge.<br /></p>
              </div>
            </div>
            <div
              class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l-2 border-slate-300 dark:border-slate-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left transition duration-300">
              <p class="leading-relaxed text-lg">Seit ich vor fast 5 Jahren mit dem Programmieren angefangen habe, habe
                ich mit vielen Freunden und Bekannten mehrere Projekte umgesetzt. Angefangen damals mit Chat-Bots für <a
                  class="text-primary hover:text-primary-hover transition duration-300" rel="noopener" target="_blank"
                  href="https://discord.com">Discord</a> habe ich später eine Richtung in die Web-Entwicklung
                eingeschlagen und bisher sehr viel Erfahrung sammeln können. Angetrieben von Kaffee bin ich immer daran
                interessiert neue und bessere technische Möglichkeiten kennenzulernen und damit zu arbeiten. </p>
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
      age: 0
    }
  },
  methods: {
    getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  },
  mounted() {
    this.age = this.getAge("2003-06-14");
  }
}
</script>

<style>
</style>