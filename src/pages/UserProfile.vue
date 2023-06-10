<template>
    <div class="profile-page" v-if="userProfile">
        <div class="user-info">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-10 offset-md-1">
                        <img class="user-img" :src="userProfile.image" />
                        <h4>{{ userProfile.username }}</h4>
                        <p>{{ userProfile.bio }}</p>
                        <div>
                            FOLLOW USER BUTTON
                            <router-link
                                v-if="isCurrentUserProfile"
                                class="btn btn-sm btn-outline-secondary action-btn"
                                :to="{ name: 'settings' }"
                            >
                                Edit Profile Settings
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-10 offset-md-1">
                    <div class="article-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item">
                                <router-link
                                    :to="{
                                        name: 'userProfile',
                                        params: { slug: userProfile.username },
                                    }"
                                    class="nav-link"
                                    :class="{active: routeName === 'userProfile'}"
                                >
                                    My Posts
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    :to="{
                                        name: 'userProfileFavorites',
                                        params: { slug: userProfile.username },
                                    }"
                                    class="nav-link"
                                    :class="{active:routeName === 'userProfileFavorites'}"
                                >
                                    Favorites Posts
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <Feed :api-url="apiUrl"></Feed>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Feed from '@/components/Feed';
import {actionTypes} from '@/store/modules/userProfile';
import {getterTypes} from '@/store/modules/auth';

export default {
    components: {
        Feed
    },
    computed: {
        isLoading() {
            return this.$store.state.userProfile.isLoading;
        },
        error() {
            return this.$store.state.userProfile.error;
        },
        userProfile() {
            return this.$store.state.userProfile.data;
        },
        currentUser() {
            return this.$store.getters[getterTypes.currentUser]
        },
        isCurrentUserProfile() {
            if(!this.currentUser || !this.userProfile) {
                return false
            }
            return this.currentUser.username === this.userProfile.username
        },
        apiUrl() {
            const isFavorites = this.$route.path.includes('favorites')
            return isFavorites 
            ? `/articles?favorited=${this.userProfileSlug}` 
            : `/articles?author=${this.userProfileSlug}`
        },
        userProfileSlug() {
            return this.$route.params.slug
        },
        routeName() {
            return this.$route.name
        }
    },
    watch: {
        userProfileSlug() {
            this.getUserProfile()
        }
    },
    mounted() {
        this.getUserProfile()
    },
    methods: {
        getUserProfile() {
            this.$store.dispatch(actionTypes.getUserProfile, {slug: this.userProfileSlug})
        }
    }
};
</script>
