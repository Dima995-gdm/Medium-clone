<template>
    <div class="article-page">
        <div class="banner">
            <div class="container" v-if="article">
                <h1>{{ article.title }}</h1>
                <ArticlePanel :article="article"/>
            </div>
        </div>
        <div class="container page">
            <Login v-if="isLoading" />
            <ErrorMessage v-if="isLoading" :message="error" />
            <div class="row article-content" v-if="article">
                <div class="col-xs-12">
                    <div>
                        <p>{{ article.body }}</p>
                    </div>
                    <TagList :tags="article.tagList"/>
                </div>
            </div>
            <hr>
            <div class="article-actions" v-if="article">
                <ArticlePanel :article="article"/>
            </div>
            <Comment/>
        </div>
    </div>
</template>

<script>
import { actionTypes } from "@/store/modules/articleModules/article";
import Login from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import TagList from '@/components/TagList';
import ArticlePanel from '@/components/ArticlePanel';
import Comment from '@/components/Comment';

export default {
    components: {
        Login,
        ErrorMessage,
        TagList,
        ArticlePanel,
        Comment
    },
    computed: {
        isLoading() {
            return this.$store.state.article.isLoading;
        },
        article() {
            return this.$store.state.article.data;
        },
        error() {
            return this.$store.state.article.error;
        }
    },
    mounted() {
        this.$store.dispatch(actionTypes.getArticle, {slug: this.$route.params.slug});
    }
};
</script>
