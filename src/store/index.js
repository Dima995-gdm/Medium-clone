import {createStore} from 'vuex';

import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'
import popularTags from '@/store/modules/popularTags'

const store = createStore({
    modules: {
        auth,
        feed,
        popularTags
    }
});

export default store;