<template>
	<Header/>
	<router-view/>
</template>


<script>
import Header from '@/components/Header';
import {actionTypes} from '@/store/modules/auth';

export default {
	components: {
		Header
	},
	mounted() {
		this.$store.dispatch(actionTypes.getCurrentUser)
	}
}
</script>