import {createStore} from 'vuex';

import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'
import popularTags from '@/store/modules/popularTags'
import article from '@/store/modules/articleModules/article'
import createArticle from '@/store/modules/articleModules/createArticle'
import editArticle from '@/store/modules/articleModules/editArticle'
import settings from '@/store/modules/settings'
import addToFavorites from '@/store/modules/addToFavorites'
import userProfile from '@/store/modules/userProfile'
import followUser from '@/store/modules/followUser'
import comment from '@/store/modules/comment'

const store = createStore({
    modules: {
        auth,
        feed,
        popularTags,
        article,
        createArticle,
        editArticle,
        settings,
        addToFavorites,
        userProfile,
        followUser,
        comment
    }
});

export default store;