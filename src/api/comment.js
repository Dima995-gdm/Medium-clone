import axios from 'axios';

const getComments = (slug) => {
    return axios.get(`/articles/${slug}/comments`).then((response) => response.data.comments)
}

const createComment = (slug, commentText) => {
    return axios.post(`/articles/${slug}/comments`, {comment: commentText}).then((response) => response.data.comment)
}

const deleteComment = (slug, commentID) => {
    return axios.delete(`/articles/${slug}/comments/${commentID}`)
}

export default {
    getComments,
    createComment,
    deleteComment
}