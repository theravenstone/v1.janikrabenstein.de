<template>
    <section class="container mx-auto p-6 mt-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="col-span-2">
                <h1 class="font-bold text-5xl mb-6">{{ post.title }}</h1>
                <p class="text-slate-500 mb-5">Veröffentlicht {{ fromNow(Date.parse(post.date)) }} von Janik Rabenstein</p>
                <!-- TODO Tags -->
                <div v-if="post.tags" class="mb-6">
                    <span v-for="tag in post.tags" :key="tag.id"
                        class="tracking-widest text-xs title-font font-medium bg-primary px-3 py-1 mr-2 rounded-md">{{
                                tag.name
                        }}</span>
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
                    <span v-for="tag in tags" :key="tag.id"
                        class="tracking-widest text-xs title-font font-medium bg-primary px-3 py-1 mr-2 rounded-md">{{
                                tag.name
                        }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['slug'],
    data() {
        return {
            post: {},
            tags: []
        }
    },
    created() {
        fetch('/api/get_blog_post.php?slug=' + this.$route.params.slug)
            .then(res => res.json())
            .then(data => this.post = data)
            .catch(error => console.log(error.message))

        fetch('/api/get_tags.php')
            .then(res => res.json())
            .then(data => this.tags = data)
            .catch(error => console.log(error.message))

        // TODO Redirect wenn beitrag nicht vorhanden
    },
    methods: {
        fromNow: function (date) {
            const SECOND = 1000;
            const MINUTE = 60 * SECOND;
            const HOUR = 60 * MINUTE;
            const DAY = 24 * HOUR;
            const WEEK = 7 * DAY;
            const MONTH = 30 * DAY;
            const YEAR = 365 * DAY;
            const units = [
                // { max: 30 * SECOND, divisor: 1, past1: 'gerade jetzt', pastN: 'gerade jetzt', future1: 'gerade jetzt', futureN: 'gerade jetzt' },
                // { max: MINUTE, divisor: SECOND, past1: 'vor einer Sekunde', pastN: 'vor # Sekunden', future1: 'in einer Sekunde', futureN: 'in # Sekunden' },
                // { max: HOUR, divisor: MINUTE, past1: 'vor einer Minute', pastN: 'vor # Minuten', future1: 'in einer Minute', futureN: 'in # Minuten' },
                // { max: DAY, divisor: HOUR, past1: 'vor einer Stunde', pastN: 'vor # Stunden', future1: 'in einer Stunde', futureN: 'in # Stunden' },
                { max: WEEK, divisor: DAY, past1: 'Gestern', pastN: 'vor # Tagen', future1: 'Morgen', futureN: 'in # Tagen' },
                { max: 4 * WEEK, divisor: WEEK, past1: 'letzte Woche', pastN: 'vor # Wochen', future1: 'nächste Woche', futureN: 'in # Wochen' },
                { max: YEAR, divisor: MONTH, past1: 'letzten Monat', pastN: 'vor # Monaten', future1: 'nächsten Monat', futureN: 'in # Monaten' },
                { max: 100 * YEAR, divisor: YEAR, past1: 'letztes Jahr', pastN: 'vor # Jahren', future1: 'nächstes Jahr', futureN: 'in # Jahren' },
                { max: 1000 * YEAR, divisor: 100 * YEAR, past1: 'letztes Jahrhundert', pastN: 'vor # Jahrhunderten', future1: 'in einem Jahrhundert', futureN: 'in # Jahrhunderten' },
                { max: Infinity, divisor: 1000 * YEAR, past1: 'letztes Jahrtausend', pastN: 'vor # Jahrtausenden', future1: 'in einem Jahrtausend', futureN: 'in # Jahrtausenden' },
            ];
            const diff = Date.now() - (typeof date === 'object' ? date : new Date(date)).getTime();
            const diffAbs = Math.abs(diff);
            for (const unit of units) {
                if (diffAbs < unit.max) {
                    const isFuture = diff < 0;
                    const x = Math.round(Math.abs(diff) / unit.divisor);
                    if (x <= 1) return isFuture ? unit.future1 : unit.past1;
                    return (isFuture ? unit.futureN : unit.pastN).replace('#', x);
                }
            }
        }
    },
}
</script>

<style>
</style>