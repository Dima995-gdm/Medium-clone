<template>
    <div>
        <Loading v-if="isLoading"/>
        <ArticleForm 
            v-if="initialValues"
            :initialValues="initialValues" 
            :errors="validationErrors"
            :isSubmitting="isSubmitting"
            @articleSubmit="onSubmit"
        />
    </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm';
import Loading from '@/components/Loading';
import { actionTypes } from '@/store/modules/articleModules/editArticle';

export default {
    components: {
        ArticleForm,
        Loading
    },
    computed: {
        isSubmitting() {
            return this.$store.state.editArticle.isSubmiting;
        },
        validationErrors() {
            return this.$store.state.editArticle.validationErrors;
        },
        isLoading() {
            return this.$store.state.editArticle.isLoading;
        },
        article() {
            return this.$store.state.editArticle.article;
        },
        initialValues() {
            if(!this.article) {
                return null
            }

            return {
                title: this.article.title,
                description: this.article.description,
                body: this.article.body,
                tagList: this.article.tagList
            }
        }
    },
    mounted() {
        this.$store.dispatch(actionTypes.getArticle, {slug: this.$route.params.slug})
    },
    methods: {
        onSubmit(articleInput) {
            const slug = this.$route.params.slug;
            this.$store.dispatch(actionTypes.updateArticle, {slug: slug, articleInput}).then((article) => {
                this.$router.push({name: 'article', params: {slug: article.slug}})
            })
        }
    }
}
</script>