<template>
    <div class="home-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <Feed :apiUrl="apiUrl"/>
                </div>
                <div class="col-md-3">

                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Feed from '@/components/Feed.vue'

export default {
    components: { Feed },
    data() {
        return {
            apiUrl: '/articles'
        }
    }
}
</script>