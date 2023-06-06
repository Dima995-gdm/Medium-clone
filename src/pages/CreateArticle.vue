<template>
    <div>
        <ArticleForm 
            :initialValues="initialValues" 
            :errors="validationErrors"
            :isSubmitting="isSubmitting"
            @articleSubmit="onSubmit"
        />
    </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue'

export default {
    components: {
        ArticleForm
    },
    data() {
        return {
            initialValues: {
                title: '',
                descr: '',
                body: '',
                tagList: []
            },
            validationErrors: null,
            isSubmitting: false
        }
    },
    methods: {
        onSubmit(data) {
            console.log(data);
        }
    }
}
</script>