import {createStore} from 'vuex';

import auth from '@/store/modules/auth'
import feed from '@/store/modules/articles/feed'
import popularTags from '@/store/modules/popularTags'
import article from '@/store/modules/articles/article'
import createArticle from '@/store/modules/articles/createArticle'

const store = createStore({
    modules: {
        auth,
        feed,
        popularTags,
        article,
        createArticle
    }
});

export default store;