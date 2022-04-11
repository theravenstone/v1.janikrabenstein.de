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
                    name: 'description',
                    content: 'Hier findest du alles, was du wissen musst.'
                },
                {
                    property: 'og:description',
                    content: 'Hier findest du alles, was du wissen musst.'
                }
            ]
        }
    },
    {
        path: '/impressum',
        name: 'Impressum',
        component: ImprintView,
        meta: {
            title: 'Impressum · Janik Rabenstein'
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
            title: 'Datenschutz · Janik Rabenstein'
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
                    name: 'description',
                    content: '404 Seite Nicht Gefunden'
                },
                {
                    property: 'og:description',
                    content: 'L404 Seite Nicht Gefunden'
                }
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
                    name: 'description',
                    content: '404 Seite Nicht Gefunden'
                },
                {
                    property: 'og:description',
                    content: 'L404 Seite Nicht Gefunden'
                }
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
                    name: 'description',
                    content: 'Lies Blog Beiträge von Janik Rabenstein'
                },
                {
                    property: 'og:description',
                    content: 'Lies Blog Beiträge von Janik Rabenstein'
                }
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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router