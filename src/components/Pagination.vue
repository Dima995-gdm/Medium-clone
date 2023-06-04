<template>
    <ul class="pagination">
        <li v-for="page in pages" :key="page" class="page-item" :class="{active: currentPage === page}">
            <router-link :to="{path: url, query: {page}}" class="page-link">{{ page }}</router-link>
        </li>
    </ul>
</template>


<script>
import { range } from '@/helpers/utils';

export default {
    props: {
        total: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    computed: {
        pages() {
            return range(1, Math.ceil(this.total / this.limit));
        }
    }
    
}
</script>