<template>
    <button
        @click="handleLike"
        :class="{
            btn: true,
            'btn-sm': true,
            'btn-primary': isFavoritedOptimistic,
            'btn-outline-primary': !isFavoritedOptimistic,
        }"
    >
        <i class="ion-heart" />
        <span v-if="isFullFavoriteInfo">&nbsp; {{ textButton }}&nbsp; ({{ favoritesCountOptimistic }})</span>
        <span v-else>&nbsp; {{ favoritesCountOptimistic }}</span>
    </button>
</template>

<script>
import { actionTypes } from '@/store/modules/addToFavorites';
export default {
    props: {
        isFavorited: {
            type: Boolean,
            required: true,
        },
        articleSlug: {
            type: String,
            required: true,
        },
        favoritesCount: {
            type: Number,
            required: true,
        },
        isFullFavoriteInfo: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            isFavoritedOptimistic: this.isFavorited,
            favoritesCountOptimistic: this.favoritesCount,
        }
    },
    methods: {
        handleLike() {
            this.$store.dispatch(actionTypes.addToFavorites, {
                slug: this.articleSlug, 
                isFavorited: this.isFavoritedOptimistic
            })

            if(this.isFavoritedOptimistic) {
                this.favoritesCountOptimistic--
            }
            else {
                this.favoritesCountOptimistic++
            }
            this.isFavoritedOptimistic = !this.isFavoritedOptimistic
        }
    },
    computed: {
        textButton() {
            return this.isFavoritedOptimistic ? 'Unfavorite Article' : 'Favorite Article'
        }
    }
};
</script>
