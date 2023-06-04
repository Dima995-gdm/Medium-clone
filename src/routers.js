import {createRouter, createWebHistory} from 'vue-router';

import GlobalFeed from '@/pages/GlobalFeed';
import Register from '@/pages/Register';
import Login from '@/pages/Login';

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'globalFeed',
            component: GlobalFeed
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/feed',
            name: 'yourFeed',
            component: GlobalFeed
        },
        {
            path: '/tags/:slug',
            name: 'tag',
            component: GlobalFeed
        },
        {
            path: '/articles/new',
            name: 'createArticle',
            component: GlobalFeed
        },
        {
            path: '/articles/:slug',
            name: 'article',
            component: GlobalFeed
        },
        {
            path: '/articles/:slug/edit',
            name: 'editArticle',
            component: GlobalFeed
        },
        {
            path: '/settings',
            name: 'settings',
            component: GlobalFeed
        },
        {
            path: '/profiles/:slug',
            name: 'userProfile',
            component: GlobalFeed
        },
        {
            path: '/profiles/:slug/favorites',
            name: 'userProfileFavorites',
            component: GlobalFeed
        },
    ]
});

export default routers;