<template>
<div>
    	<section class="flex items-center h-full p-16 dark:bg-slate-900 dark:text-slate-100">
		<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
			<div class="max-w-md text-center">
				<h1 class="mb-8 font-extrabold text-9xl dark:text-slate-500">
					<span class="sr-only">Error</span>404
				</h1>
				<p class="text-2xl font-semibold md:text-3xl">Seite Nicht Gefunden</p>
				<p class="mt-4 mb-8 dark:text-slate-500">Keine sorge, du kannst auf der Startseite neu beginnen.</p>
			</div>
		</div>
	</section>
	<section class="container mx-auto p-6 mb-6">
		<!-- Continue With -->
        <div class="flex flex-col">
            <div class="text-slate-500 font-bold uppercase">
                Versuche dein Glück hier
            </div>

            <div class="flex flex-col items-stretch mt-5">
                <!-- Nav Item #1 -->
                <router-link to="/" class="flex flex-row group px-4 py-8
                    border-t-2 border-slate-300 dark:border-slate-800 hover:cursor-pointer
                    transition duration-300">
                    <!-- Nav Icon -->
                    <div class="rounded-xl border-2 border-slate-300 dark:border-slate-800 px-3 py-2 md:py-4 transition duration-300">
						<i class="fa-solid fa-house-chimney mx-auto 
                            text-primary text-2xl md:text-3xl"></i>
                    </div>

                    <!-- Text -->
                    <div class="grow flex flex-col pl-5 pt-2">
                        <div class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                            Startseite
                        </div>

                        <div class="font-semibold text-sm md:text-md lg:text-lg
                            text-slate-500 dark:group-hover:text-slate-600 group-hover:text-slate-400
                            transition duration-300">
                            Alles beginnt hier
                        </div>
                    </div>

                    <!-- Chevron -->
                    <i class="fa-solid fa-chevron-right text-slate-500 my-auto pr-2
                        dark:group-hover:text-slate-600 group-hover:text-slate-400 transition duration-300 lg:group-hover:translate-x-2"></i>
                </router-link>

                <!-- Nav Item #2 -->
                <router-link to="/blog" class="flex flex-row group px-4 py-8
                    border-t-2 border-slate-300 dark:border-slate-800 hover:cursor-pointer
                    transition duration-300">

                    <!-- Nav Icon -->
                    <div class="rounded-xl border-2 border-slate-300 dark:border-slate-800 px-3 py-2 md:py-4 transition duration-300">
							<i class="fa-solid fa-book mx-auto 
                            text-primary text-2xl md:text-3xl"></i>
                    </div>

                    <!-- Text -->
                    <div class="grow flex flex-col pl-5 pt-2">
                        <div class="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                            Blog
                        </div>

                        <div class="font-semibold text-sm md:text-md lg:text-lg
                            text-slate-500 dark:group-hover:text-slate-600 group-hover:text-slate-400
                            transition duration-300">
                            Lese meine interessanten Beiträge
                        </div>
                    </div>

                    <!-- Chevron -->
						<i class="fa-solid fa-chevron-right text-slate-500 my-auto pr-2
                        dark:group-hover:text-slate-600 group-hover:text-slate-400 transition duration-300 lg:group-hover:translate-x-2"></i>
                </router-link>
            </div>
        </div>
	</section>
</div>
</template>