<template>
    <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
            <form class="card comment-form ng-valid ng-dirty ng-submitted" @submit.prevent="createArticle">
                <div class="card-block">
                    <textarea
                        class="form-control ng-valid ng-dirty ng-touched ng-empty"
                        placeholder="Write a comment..."
                        rows="3"
                        v-model="commentText"
                    >
                    </textarea>
                </div>
                <div class="card-footer">
                    <img
                        class="comment-author-img"
                        src="https://api.realworld.io/images/smiley-cyrus.jpeg"
                    />
                    <button class="btn btn-sm btn-primary" type="submit">
                        Post Comment
                    </button>
                </div>
            </form>
            <Login v-if="isLoading" />
            <ErrorMessage v-if="isLoading" :message="error" />
            <div v-if="comments">
                <div class="card" v-for="comment in comments" :key="comment.id">
                    <div class="card-block">
                        <p class="card-text ng-binding">
                            {{ comment.body }}
                        </p>
                    </div>
                    <div class="card-footer">
                        <a class="comment-author" href="#/@dimadimasik">
                            <img
                                class="comment-author-img"
                                :src="comment.author.image"
                            />
                        </a>
                        &nbsp;
                        <a class="comment-author ng-binding" href="#/@dimadimasik">
                            {{ comment.author.username }}
                        </a>
                        <span class="date-posted ng-binding">
                            {{ comment.createdAt }}
                        </span>
                        <span class="mod-options">
                            <i class="ion-trash-a" @click="deleteComment(comment.id)"></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {actionTypes} from '@/store/modules/comment'
import Login from "@/components/Loading"
import ErrorMessage from "@/components/ErrorMessage"

export default {
    components: {
        Login,
        ErrorMessage
    },
    data() {
        return {
            commentText: '',
            comments: []
        };
    },
    computed: {
        isLoading() {
            return this.$store.state.comment.isLoading;
        },
        // comments() {
        //     return this.$store.state.comment.data;
        // },
        error() {
            return this.$store.state.comment.error;
        },
        getSlug() {
            return this.$route.params.slug
        }
    },
    methods: {
        fetchComments() {
            this.$store.dispatch(actionTypes.getComment, {slug: this.getSlug})
        },
        createArticle() {
            this.$store.dispatch(actionTypes.createComment, {
                slug: this.$route.params.slug,
                commentText: {body: this.commentText}
            })
            .then((newComment) => {
                this.comments.unshift(newComment);
                this.commentText = ''
            })
        },
        deleteComment(commentID) {
            this.$store.dispatch(actionTypes.deleteComment, {
                slug: this.getSlug, 
                commentID: commentID
            })
            .then(() => {
                this.comments = this.comments.filter((comment) => comment.id !== commentID)
            })
        }
    },
    mounted() {
        this.$store.dispatch(actionTypes.getComment, {slug: this.getSlug})
        .then((resolve) => {this.comments = resolve})
    }
};
</script>
