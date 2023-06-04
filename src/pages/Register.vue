<template>
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Sign up</h1>
                <p class="text-xs-center">
                    <router-link :to="{ name: 'login' }">
                        Need an account?
                    </router-link>
                </p>
                <validation-errors 
                    v-if="validationErrors" 
                    :validation-errors="validationErrors"
                />
                <form @submit.prevent="onSubmit">
                    <fieldset class="form-group">
                        <input
                            class="form-control form-control-lg"
                            type="text"
                            placeholder="Username"
                            v-model="username"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                            class="form-control form-control-lg"
                            type="text"
                            placeholder="Email"
                            v-model="email"
                        />
                    </fieldset>
                    <fieldset class="form-group">
                        <input
                            class="form-control form-control-lg"
                            type="password"
                            placeholder="Password"
                            v-model="password"
                        />
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    </div> 
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors.vue';
import { actionTypes } from '@/store/modules/auth';

export default {
    components: {
        ValidationErrors
    },
    data() {
        return {
            email: '',
            password: '',
            username: ''
        }
    },
    methods: {
        onSubmit() {
            this.$store
            .dispatch(actionTypes.register, {
                email: this.email,
                password: this.password,
                username: this.username
            })
            .then(() => {
                this.$router.push({name: 'globalFeed'})
            })
        }
    },
    computed: {
        isSubmitting() {
            return this.$store.state.auth.isSubmitting;
        },
        validationErrors() {
            return this.$store.state.auth.validationErrors;
        }
    }
};
</script>
