import {createRouter, createWebHistory} from 'vue-router';

import HomePage from '@/pages/HomePage';
import Register from '@/pages/Register';
import Login from '@/pages/Login';

const routers = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
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
    ]
});

export default routers;