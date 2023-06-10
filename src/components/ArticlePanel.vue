<template>
    <div class="article-meta">
        <router-link :to="{name: 'userProfile', params: { slug: article.author.username }}">
            <img :src="article.author.image" />
        </router-link>
        <div class="info">
            <router-link :to="{name: 'userProfile', params: { slug: article.author.username }}">
                {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
        </div>
        <span v-if="isAuthor">
            <router-link class="btn btn-outline-secondary btn-sm" :to="{name: 'editArticle', params: { slug: article.slug }}">
                <i class="ion-edit" />
                Edit Article
            </router-link>
            <button class="btn btn-outline-danger btn-sm" @click="deleteArticle">
                <i class="ion-trash-a" />
                Delete Article
            </button>
        </span>
        <span v-else>
            <FollowUser :userToFollow="article.author"/>
            <AddToFavorites
                :isFavorited="article.favorited"
                :articleSlug="article.slug"
                :favoritesCount="article.favoritesCount"
                :isFullFavoriteInfo="true"
            />
        </span>
    </div>
</template>

<script>
import { actionTypes } from "@/store/modules/articleModules/article";
import { getterTypes } from "@/store/modules/auth";
import AddToFavorites from '@/components/AddToFavorites';
import FollowUser from '@/components/FollowUser';

export default {
    components: {
        AddToFavorites,
        FollowUser
    },
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    computed: {
        currentUser() {
            return this.$store.getters[getterTypes.currentUser]
        },
        isAuthor() {
            if(!this.currentUser || !this.article) {
                return false
            }
            return this.currentUser.username === this.article.author.username
        }
    },
    methods: {
        deleteArticle() {
            this.$store.dispatch(actionTypes.deleteArticle, {slug: this.$route.params.slug})
            .then(() => {
                this.$router.push({name: 'globalFeed'})
            })
        }
    }
}
</script>