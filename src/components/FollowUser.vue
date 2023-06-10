<template>
    <button 
    @click="handleUserFollow"
    class="btn btn-sm action-btn"
    :class="{
        'btn-secondary': isFollowedUserOptimistic,
        'btn-outline-secondary': !isFollowedUserOptimistic,
    }"
    >
        <i class="ion-plus-round"></i>
        <span>&nbsp; {{ textButton }}&nbsp; {{ userToFollow.username }}</span>
    </button>
</template>

<script>
import {actionTypes} from '@/store/modules/followUser'

export default {
    props: {
        userToFollow: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isFollowedUserOptimistic: this.userToFollow.following,
            favoritesCountOptimistic: this.favoritesCount,
        }
    },
    computed: {
        textButton() {
            return this.isFollowedUserOptimistic ? 'Unfollow' : 'Fallow'
        },
    },
    methods: {
        handleUserFollow() {
            this.$store.dispatch(actionTypes.followUser, {
                userName: this.userToFollow.username, 
                isFollowed: this.isFollowedUserOptimistic
            })
            this.isFollowedUserOptimistic = !this.isFollowedUserOptimistic
        }
    },
}
</script>