import {createRouter, createWebHistory} from 'vue-router';

import GlobalFeed from '@/pages/GlobalFeed';
import YourFeed from '@/pages/YourFeed';
import TagFeed from '@/pages/TagFeed';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Article from '@/pages/articlePages/Article';
import CreateArticle from '@/pages/articlePages/CreateArticle';
import EditArticle from '@/pages/articlePages/EditArticle';
import Settings from '@/pages/Settings';
import UserProfile from '@/pages/UserProfile';

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
            component: EditArticle
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings
        },
        {
            path: '/profiles/:slug',
            name: 'userProfile',
            component: UserProfile
        },
        {
            path: '/profiles/:slug/favorites',
            name: 'userProfileFavorites',
            component: UserProfile
        },
    ]
});

export default routers;