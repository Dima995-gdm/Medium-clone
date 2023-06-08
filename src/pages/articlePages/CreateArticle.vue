<template>
    <ArticleForm 
        :initialValues="initialValues" 
        :errors="validationErrors"
        :isSubmitting="isSubmitting"
        @articleSubmit="onSubmit"
    />
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue';
import { actionTypes } from '@/store/modules/articleModules/createArticle';

export default {
    components: {
        ArticleForm
    },
    data() {
        return {
            initialValues: {
                title: '',
                description: '',
                body: '',
                tagList: []
            },
        }
    },
    computed: {
        isSubmitting() {
            return this.$store.state.createArticle.isSubmiting;
        },
        validationErrors() {
            return this.$store.state.createArticle.validationErrors;
        }
    },
    methods: {
        onSubmit(articleInput) {
            this.$store.dispatch(actionTypes.createArticle, {articleInput}).then((article) => {
                this.$router.push({name: 'article', params: {slug: article.slug}})
            })
        }
    }
}
</script>