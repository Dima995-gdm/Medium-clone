import {createRouter, createWebHistory} from 'vue-router';

import GlobalFeed from '@/pages/GlobalFeed';
import YourFeed from '@/pages/YourFeed';
import TagFeed from '@/pages/TagFeed';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Article from '@/pages/Article';
import CreateArticle from '@/pages/CreateArticle';

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
            component: YourFeed
        },
        {
            path: '/tags/:slug',
            name: 'tag',
            component: TagFeed
        },
        {
            path: '/articles/new',
            name: 'createArticle',
            component: CreateArticle
        },
        {
            path: '/articles/:slug',
            name: 'article',
            component: Article
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