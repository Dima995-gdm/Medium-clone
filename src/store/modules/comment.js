import commentApi from '@/api/comment';

const state = {
    data: null,
    isLoading: false,
    error: null
}

export const mutationTypes = {
    getCommentStart: '[comment] Get comment start',
    getCommentSuccess: '[comment] Get comment success',
    getCommentFailure: '[comment] Get comment failure',

    createCommentStart: '[comment] Create comment start',
    createCommentSuccess: '[comment] Create comment success',
    createCommentFailure: '[comment] Create comment failure',

    deleteCommentStart: '[comment] Delete comment start',
    deleteCommentSuccess: '[comment] Delete comment success',
    deleteCommentFailure: '[comment] Delete comment failure',
}

export const actionTypes = {
    getComment: '[comment] Get comment',
    createComment: '[comment] Create comment',
    deleteComment: '[comment] Delete comment',
}

const mutations = {
    [mutationTypes.getCommentStart](state) {
        state.isLoading = true;
        state.data = null;
    },
    [mutationTypes.getCommentSuccess](state, payload) {
        state.isLoading = false;
        state.data = payload;
    },
    [mutationTypes.getCommentFailure](state) {
        state.isLoading = false;
    },

    [mutationTypes.createCommentStart]() {},
    [mutationTypes.createCommentSuccess]() {},
    [mutationTypes.createCommentFailure]() {},

    [mutationTypes.deleteCommentStart]() {},
    [mutationTypes.deleteCommentSuccess]() {},
    [mutationTypes.deleteCommentFailure]() {},
}

const actions = {
    [actionTypes.getComment](context, {slug}) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.getCommentStart)
            commentApi.getComments(slug)
            .then((comments) => {
                context.commit(mutationTypes.getCommentSuccess, comments)
                resolve(comments)
            })
            .catch(() => {
                context.commit(mutationTypes.getCommentFailure)
            })
        })
    },
    [actionTypes.createComment](context, {slug, commentText}) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.createCommentStart)
            commentApi.createComment(slug, commentText)
            .then((comment) => {
                context.commit(mutationTypes.createCommentSuccess)
                resolve(comment)
            })
            .catch(() => {
                context.commit(mutationTypes.createCommentFailure)
            })
        })
    },
    [actionTypes.deleteComment](context, {slug, commentID}) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.deleteCommentStart)
            commentApi.deleteComment(slug, commentID)
            .then(() => {
                context.commit(mutationTypes.deleteCommentSuccess)
                resolve()
            })
            .catch(() => {
                context.commit(mutationTypes.deleteCommentFailure)
            })
        })
    },
}

export default {
    state,
    mutations,
    actions,
}