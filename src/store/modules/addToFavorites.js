import addToFavorites from '@/api/addToFavorites'

export const mutationTypes = {
    addToFavoriteStart: '[addToFavorites] Add to favorites start',
    addToFavoriteSuccess: '[addToFavorites] Add to favorites success',
    addToFavoriteFailure: '[addToFavorites] Add to favorites failure',
}

export const actionTypes = {
    addToFavorites: '[addToFavorites] Add to favorites'
}

const mutations = {
    [mutationTypes.addToFavoriteStart]() {},
    [mutationTypes.addToFavoriteSuccess]() {},
    [mutationTypes.addToFavoriteFailure]() {},
}

const actions = {
    [actionTypes.addToFavorites](context, {slug, isFavorited}) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.addToFavoriteStart)
            const promise = isFavorited 
            ? addToFavorites.removeFromFavorites(slug) 
            : addToFavorites.addToFavorites(slug)
            promise.then((article) => {
                context.commit(mutationTypes.addToFavoriteSuccess, article)
                resolve(article)
            }).catch(() => {
                context.commit(mutationTypes.addToFavoriteFailure)
            })
        })
    }
}

export default {
    mutations,
    actions
}