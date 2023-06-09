<template>
    <div>
        <Loading v-if="isLoading"/>
        <ErrorMessage v-if="error"/>
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
                    <div class="pull-xs-right">
                        <AddToFavorites 
                            :isFavorited="article.favorited"
                            :articleSlug="article.slug"
                            :favoritesCount="article.favoritesCount"
                        />
                    </div>
                </div>
                <router-link :to="{ name: 'article', params: { slug: article.slug } }" class="preview-link">
                    <h1>{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <span>Read more...</span>
                    <TagList :tags="article.tagList"/>
                </router-link>
            </div>
            <Pagination 
                :total="feed.articlesCount" 
                :limit="limit" 
                :currentPage="currentPage"
                :url="baseUrl"
            />
        </div>
    </div>
</template>

<script>
import { actionTypes } from "@/store/modules/feed";
import Pagination from "@/components/Pagination";
import { limit } from "@/helpers/variables";
import queryString  from 'query-string';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';
import TagList from '@/components/TagList';
import AddToFavorites from '@/components/AddToFavorites';

export default {
    components: { 
        Pagination,
        Loading,
        ErrorMessage,
        TagList,
        AddToFavorites
    },
    data() {
        return {
            limit,
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
        currentPage() {
            return +this.$route.query.page || 1;
        },
        baseUrl() {
            return this.$route.path;
        },
        offset() {
            return this.currentPage * limit - limit;
        }
    },
    watch: {
        currentPage() {
            this.fetchFeed();
        }
    },
    methods: {
        fetchFeed() {
            const parsedUrl = queryString.parseUrl(this.apiUrl);
            const stringifiedParams = queryString.stringify({
                limit,
                offset: this.offset,
                ...parsedUrl.query
            });
            const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
            this.$store.dispatch(actionTypes.getFeed, { apiUrl: apiUrlWithParams });
        }
    },
    mounted() {
        this.fetchFeed();
    },
};
</script>
