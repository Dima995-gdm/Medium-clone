import followUserApi from '@/api/followUser'

export const mutationTypes = {
    followUserStart: '[followUser] Follow user start',
    followUserSuccess: '[followUser] Follow user success',
    followUserFailure: '[followUser] Follow user failure',
}

export const actionTypes = {
    followUser: '[followUser] Follow user'
}

const mutations = {
    [mutationTypes.followUserStart]() {},
    [mutationTypes.followUserSuccess]() {},
    [mutationTypes.followUserFailure]() {},
}

const actions = {
    [actionTypes.followUser](context, {userName, isFollowed}) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.followUserStart)
            const promise = isFollowed 
            ? followUserApi.unFollowUser(userName) 
            : followUserApi.followUser(userName)
            promise.then(() => {
                context.commit(mutationTypes.followUserSuccess)
                resolve()
            }).catch(() => {
                context.commit(mutationTypes.followUserFailure)
            })
        })
    }
}

export default {
    mutations,
    actions
}