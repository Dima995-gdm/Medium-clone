<template>
    <div class="settings-page" v-if="currentUser">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Settings</h1>
                    <ValidationErrors
                        v-if="validationErrors"
                        :validationErrors="validationErrors"
                    />
                    <form @submit.prevent="onSubmit">
                        <fieldset>
                            <fieldset class="form-group">
                                <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    v-model="form.image"
                                    placeholder="URL of profile image"
                                />
                            </fieldset>

                            <fieldset class="form-group">
                                <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    v-model="form.username"
                                    placeholder="Username"
                                />
                            </fieldset>

                            <fieldset class="form-group">
                                <textarea
                                    class="form-control form-control-lg"
                                    v-model="form.bio"
                                    placeholder="Short bio about you"
                                ></textarea>
                            </fieldset>

                            <fieldset class="form-group">
                                <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    v-model="form.email"
                                    placeholder="Email"
                                />
                            </fieldset>

                            <fieldset class="form-group">
                                <input
                                    type="password"
                                    class="form-control form-control-lg"
                                    v-model="form.password"
                                    placeholder="New password"
                                />
                            </fieldset>
                            <button
                                type="submit"
                                class="btn btn-lg btn-primary pull-xs-right"
                                :disabled="isSubmitting"
                            >
                                Update settings
                            </button>
                        </fieldset>
                    </form>
                    <hr />
                    <button
                        class="btn btn-outline-danger"
                        @click="logout"
                        type="text"
                    >
                        Or cick here to logout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors.vue';
import { getterTypes, actionTypes } from '@/store/modules/auth';

export default {
    components: {
        ValidationErrors
    },
    computed: {
        isSubmitting() {
            return this.$store.state.settings.isSubmitting;
        },
        validationErrors() {
            return this.$store.state.settings.validationErrors;
        },
        currentUser() {
            return this.$store.getters[getterTypes.currentUser]
        },
        form() {
            return {
                username: this.currentUser.username,
                bio: this.currentUser.bio,
                image: this.currentUser.image,
                email: this.currentUser.email,
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('onSubmit');
            this.$store.dispatch(actionTypes.updateCurrentUser, {currentUserInput: this.form})
        },
        logout() {
            this.$store.dispatch(actionTypes.logout).then(() => {
                this.$router.push({name: 'globalFeed'})
            })
        }
    }
};
</script>
