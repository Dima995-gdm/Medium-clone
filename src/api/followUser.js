import axios from 'axios';

const followUser = (user) => {
    return axios.post(`/profiles/${user}/follow`)
}

const unFollowUser = (user) => {
    return axios.delete(`/profiles/${user}/follow`)
}

export default {
    followUser,
    unFollowUser
}