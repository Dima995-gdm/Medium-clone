<template>
    <div class="feed-toggle">
        <ul class="nav nav-pills outline-active">
            <li class="nav-item">
                <router-link :to="{name: 'globalFeed'}" class="nav-link" :class="{active: routeName ==='globalFeed'}">
                    Global Feed
                </router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <router-link :to="{name: 'yourFeed'}" class="nav-link" :class="{active: routeName ==='yourFeed'}">
                    Your Feed
                </router-link>
            </li>
            <li class="nav-item" v-if="tagName">
                <router-link :to="{name: 'tag'}" class="nav-link" :class="{active: routeName ==='tag'}">
                    <i class="ion-pound"></i>
                    {{ tagName }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { getterTypes } from '@/store/modules/auth';

export default {
    props: {
        tagName: {
            type: String,
            required: false
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.getters[getterTypes.isLoggedIn]
        },
        routeName() {
            return this.$route.name
        }
    }
}
</script>