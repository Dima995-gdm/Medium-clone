<template>
    <nav class="navbar navbar-light">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                conduit
            </router-link>

            <ul class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <router-link class="nav-link" to="/" active-class="active">
                        Home
                    </router-link>
                </li>
                <template v-if="isLoggedIn">
                    <li class="nav-item">
                        <router-link class="nav-link" to="createArticle" active-class="active">
                            <i class="ion-compose"></i>&nbsp;New Article
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="settings" active-class="active">
                            <i class="ion-gear-a"></i>&nbsp;Settings
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'userProfile', params: {slug: currentUser.username}}">
                            <img class="user-pic" :src="currentUser.image" />
                            {{ currentUser.username }}
                        </router-link>
                    </li>
                </template>

                <template v-if="!isLoggedIn">
                    <li class="nav-item">
                        <router-link class="nav-link" to="login" active-class="active">
                            Sign in
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="register" active-class="active">
                            Sign up
                        </router-link>
                    </li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        currentUser() {
            return this.$store.state.auth.currentUser;
        },
        isLoggedIn() {
            return this.$store.state.auth.isLoggedIn;
        },
    },
};
</script>
