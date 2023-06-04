<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <div v-if="error">Something bad happed</div>
        <div v-if="feed">
            <div
                class="article-preview"
                v-for="(article, index) in feed.articles"
                :key="index"
            >
                <div class="article-meta">
                    <router-link :to="{name: 'userProfile', params: { slug: article.author.username }}">
                        <img :src="article.author.image" />
                    </router-link>
                    <div class="info">
                        <router-link :to="{ name: 'userProfile', params: { slug: article.author.username }}">
                            {{ article.author.username }}
                        </router-link>
                        <span class="date">{{ article.createdAt }}</span>
                    </div>
                    <div class="pull-xs-right">ADD TO FAVORITES</div>
                </div>
                <router-link :to="{ name: 'article', params: { slug: article.slug } }" class="preview-link">
                    <h1>{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <span>Read more...</span>
                    TAG LIST
                </router-link>
            </div>
            <Pagination 
                :total="total" 
                :limit="limit" 
                :currentPage="currentPage"
                :url="url"
            />
        </div>
    </div>
</template>

<script>
import { actionTypes } from "@/store/modules/feed";
import Pagination from "@/components/Pagination";

export default {
    components: { Pagination },
    data() {
        return {
            total: 500,
            limit: 10,
            currentPage: 5,
            url: '/tags/dragons'
        }
    },
    props: {
        apiUrl: {
            type: String,
            required: true,
        },
    },
    computed: {
        isLoading() {
            return this.$store.state.feed.isLoading;
        },
        feed() {
            return this.$store.state.feed.data;
        },
        error() {
            return this.$store.state.feed.error;
        },
    },
    mounted() {
        this.$store.dispatch(actionTypes.getFeed, { apiUrl: this.apiUrl });
    },
};
</script>
