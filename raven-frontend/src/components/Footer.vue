<template>
    <footer class="border-t-2 border-slate-300 dark:border-slate-800 transition duration-300">
        <div class="container mx-auto p-6 space-y-6">
            <div class="pt-12 space-y-8 md:flex md:justify-between md:space-y-0">
                <div class="flex flex-col my-6 space-y-6 md:m-0">
                    <router-link to="/" class="flex justify-center space-x-3 md:justify-start">
                        <img src="@/assets/logo.png" alt="" width="50" height="50">
                        <span class="self-center text-2xl font-bold">Janik Rabenstein</span>
                    </router-link>
                    <p class="text-center md:max-w-sm md:text-left font-mono">Webentwickler aus dem Landkreis Bayreuth
                        <span class="animate-wiggle mb-6 inline-block">👋</span></p>
                </div>
                <div class="flex flex-wrap justify-center lg:space-x-8">
                    <div class="p-6 md:py-0">
                        <p class="pb-2 text-lg font-medium">Quick links</p>
                        <ul class="space-y-1 text-sm">
                            <li>
                                <router-link to="/" class="hover:text-primary transition duration-300">Startseite
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/blog" class="hover:text-primary transition duration-300">Blog
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/404" class="hover:text-primary transition duration-300">404 Seite
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="p-6 md:py-0 md:pr-0">
                        <p class="pb-2 text-lg font-medium">Rechtliches</p>
                        <ul class="space-y-1 text-sm">
                            <li>
                                <router-link to="/impressum" class="hover:text-primary transition duration-300">
                                    Impressum</router-link>
                            </li>
                            <li>
                                <router-link to="/datenschutz" class="hover:text-primary transition duration-300">
                                    Datenschutz</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex flex-col-reverse items-center justify-between py-5 text-center sm:flex-row">
                <p class="mt-3 text-sm sm:mt-0"> ©2022 All rights reserved </p>
                <div class="flex space-x-2">
                    <a rel="noopener noreferrer" href="mailto:janik.rabenstein@gmail.com" title="Email"
                        class="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary-hover text-white transition duration-300">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/theravenstone" title="GitHub"
                        class="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary-hover text-white transition duration-300">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a rel="noopener noreferrer" target="_blank" href="https://discord.com/users/594922360553865216"
                        title="Discord"
                        class="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary-hover text-white transition duration-300">
                        <i class="fa-brands fa-discord"></i>
                    </a>
                </div>
            </div>
        </div>
        </footer>
</template>

<script>
export default {

}
</script>

<style>
</style>