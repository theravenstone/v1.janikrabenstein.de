import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import ImprintView from '../views/ImprintView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Startseite · Janik Rabenstein',
            metaTags: [{
                    property: 'og:title',
                    content: 'Startseite · Janik Rabenstein'
                },
                {
                    property: 'twitter:title',
                    content: 'Startseite · Janik Rabenstein'
                },
                {
                    name: 'description',
                    content: 'Hier findest du alles, was du wissen musst.'
                },
                {
                    property: 'og:description',
                    content: 'Hier findest du alles, was du wissen musst.'
                },
                {
                    property: 'twitter:description',
                    content: 'Hier findest du alles, was du wissen musst.'
                },
            ]
        }
    },
    {
        path: '/impressum',
        name: 'Impressum',
        component: ImprintView,
        meta: {
            title: 'Impressum · Janik Rabenstein',
            metaTags: [{
                    property: 'og:title',
                    content: 'Impressum · Janik Rabenstein'
                },
                {
                    property: 'twitter:title',
                    content: 'Impressum · Janik Rabenstein'
                },
                {
                    name: 'description',
                    content: 'Angaben gemäß § 5 TMG'
                },
                {
                    property: 'og:description',
                    content: 'Angaben gemäß § 5 TMG'
                },
                {
                    property: 'twitter:description',
                    content: 'Angaben gemäß § 5 TMG'
                },
            ]
        }
    },
    {
        path: '/imprint',
        redirect: '/impressum'
    },
    {
        path: '/datenschutz',
        name: 'Datenschutz',
        component: PrivacyView,
        meta: {
            title: 'Datenschutz · Janik Rabenstein',
            metaTags: [{
                    property: 'og:title',
                    content: 'Datenschutz · Janik Rabenstein'
                },
                {
                    property: 'twitter:title',
                    content: 'Datenschutz · Janik Rabenstein'
                },
                {
                    name: 'description',
                    content: 'Datenschutz'
                },
                {
                    property: 'og:description',
                    content: 'Datenschutz'
                },
                {
                    property: 'twitter:description',
                    content: 'Datenschutz'
                },
            ]
        }
    },
    {
        path: '/privacy',
        redirect: '/datenschutz'
    },
    {
        path: '/404',
        name: 'Error 404 Page Not Found',
        component: NotFound,
        meta: {
            title: '404 Seite Nicht Gefunden · Janik Rabenstein',
            metaTags: [{
                    property: 'og:title',
                    content: '404 Seite Nicht Gefunden · Janik Rabenstein'
                },
                {
                    property: 'twitter:title',
                    content: '404 Seite Nicht Gefunden · Janik Rabenstein'
                },
                {
                    name: 'description',
                    content: 'Leider wurde diese Seite nicht gefunden.'
                },
                {
                    property: 'og:description',
                    content: 'Leider wurde diese Seite nicht gefunden.'
                },
                {
                    property: 'twitter:description',
                    content: 'Leider wurde diese Seite nicht gefunden.'
                },
            ]
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '404 Seite Nicht Gefunden · Janik Rabenstein',
            metaTags: [{
                    property: 'og:title',
                    content: '404 Seite Nicht Gefunden · Janik Rabenstein'
                },
                {
                    property: 'twitter:title',
                    content: '404 Seite Nicht Gefunden · Janik Rabenstein'
                },
                {
                    name: 'description',
                    content: 'Leider wurde diese Seite nicht gefunden.'
                },
                {
                    property: 'og:description',
                    content: 'Leider wurde diese Seite nicht gefunden.'
                },
                {
                    property: 'twitter:description',
                    content: 'Leider wurde diese Seite nicht gefunden.'
                },
            ]
        }
    },
    {
        path: '/blog',
        name: 'Blog',
        component: BlogView,
        meta: {
            title: 'Blog · Janik Rabenstein',
            metaTags: [{
                    property: 'og:title',
                    content: 'Blog · Janik Rabenstein'
                },
                {
                    property: 'twitter:title',
                    content: 'Blog · Janik Rabenstein'
                },
                {
                    name: 'description',
                    content: 'Interessante Blog Beiträge von Janik Rabenstein'
                },
                {
                    property: 'og:description',
                    content: 'Interessante Blog Beiträge von Janik Rabenstein'
                },
                {
                    property: 'twitter:description',
                    content: 'Interessante Blog Beiträge von Janik Rabenstein'
                },
            ]
        }
    },
    {
        path: '/blog/post/:slug',
        name: 'Blog Post',
        component: BlogPostView
    },
    {
        path: '/blog/post',
        redirect: '/blog'
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router