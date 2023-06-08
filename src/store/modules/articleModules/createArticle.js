import articleApi from '@/api/article';

const state = {
    isSubmiting: false,
    validationErrors: null,
}

export const mutationTypes = {
    createArticleStart: '[createArticle] Create article start',
    createArticleSuccess: '[createArticle] Create article success',
    createArticleFailure: '[createArticle] Create article failure'
}

export const actionTypes = {
    createArticle: '[createArticle] Create article'
}

const mutations = {
    [mutationTypes.createArticleStart](state) {
        state.isSubmiting = true;
    },
    [mutationTypes.createArticleSuccess](state) {
        state.isSubmiting = false;
    },
    [mutationTypes.createArticleFailure](state, payload) {
        state.isSubmiting = false;
        state.validationErrors = payload;
    }
}

const actions = {
    [actionTypes.createArticle](context, {articleInput}) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.createArticleStart)
            articleApi.createArticle(articleInput)
            .then((article) => {
                context.commit(mutationTypes.createArticleSuccess, article)
                resolve(article)
            })
            .catch((result) => {
                context.commit(
                    mutationTypes.createArticleFailure,
                    result.response.data.errors
                )
                console.log(result);
            })
        })
    },
}

export default {
    state,
    mutations,
    actions,
}