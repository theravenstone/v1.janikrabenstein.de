import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TicTacToe from '../views/TicTacToe.vue'
import NotFound from '../views/NotFound.vue'
import ImprintView from '../views/ImprintView.vue'

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
    {
        path: '/projects',
        name: 'Projekte',
        component: ProjectsView,
        meta: {
            title: 'Projekte · Janik Rabenstein',
            metaTags: [{
                    property: 'og:title',
                    content: 'Projekte · Janik Rabenstein'
                },
                {
                    property: 'twitter:title',
                    content: 'Projekte · Janik Rabenstein'
                },
                {
                    name: 'description',
                    content: 'Projekte von Janik Rabenstein'
                },
                {
                    property: 'og:description',
                    content: 'Projekte von Janik Rabenstein'
                },
                {
                    property: 'twitter:description',
                    content: 'Projekte von Janik Rabenstein'
                },
            ]
        }
    },
    {
        path: '/games/tictactoe',
        name: 'Tic Tac Toe',
        component: TicTacToe,
        meta: {
            title: 'Tic Tac Toe · Janik Rabenstein',
            metaTags: [{
                    property: 'og:title',
                    content: 'Tic Tac Toe · Janik Rabenstein'
                },
                {
                    property: 'twitter:title',
                    content: 'Tic Tac Toe · Janik Rabenstein'
                },
                {
                    name: 'description',
                    content: 'Spiele Tic Tac Toe'
                },
                {
                    property: 'og:description',
                    content: 'Spiele Tic Tac Toe'
                },
                {
                    property: 'twitter:description',
                    content: 'Spiele Tic Tac Toe'
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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router