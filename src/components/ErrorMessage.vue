<template>
    <div>{{ message }}</div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: false,
            default: 'Something bad happed'
        }
    }
}
</script>