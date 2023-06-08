import {createStore} from 'vuex';

import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'
import popularTags from '@/store/modules/popularTags'
import article from '@/store/modules/articleModules/article'
import createArticle from '@/store/modules/articleModules/createArticle'
import editArticle from '@/store/modules/articleModules/editArticle'
import settings from '@/store/modules/settings'

const store = createStore({
    modules: {
        auth,
        feed,
        popularTags,
        article,
        createArticle,
        editArticle,
        settings
    }
});

export default store;