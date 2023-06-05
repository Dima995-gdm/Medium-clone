<template>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">Something bad happed</div>
    <div v-if="popularTags">
        <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
                    <router-link 
                        v-for="tag in popularTags" 
                        :key="tag" 
                        :to="{name: 'tag', params: {slug: tag}}"
                        class="tag-default tag-pill"
                    >
                        {{ tag }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { actionTypes } from "@/store/modules/popularTags";

export default {
    computed: {
        isLoading() {
            return this.$store.state.popularTags.isLoading;
        },
        error() {
            return this.$store.state.popularTags.error;
        },
        popularTags() {
            return this.$store.state.popularTags.data;
        },
    },
    mounted() {
        this.$store.dispatch(actionTypes.getPopularTags);
    },
};
</script>
