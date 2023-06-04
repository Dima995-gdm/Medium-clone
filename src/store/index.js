import {createStore} from 'vuex';

import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'

const store = createStore({
    modules: {
        auth,
        feed
    }
});

export default store;