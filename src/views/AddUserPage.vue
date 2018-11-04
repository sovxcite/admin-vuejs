<template>
  <div>
        <div class="container" v-if="user">
            <h1>Add user:</h1>
            <UserForm :user="user" @input="updateUser">
                <div class="row justify-content-end">
                    <div class="col-12 col-sm-6 col-md-4 form-group">
                        <button type="button" class="btn btn-success" @click="saveUser" :disabled="false">Add</button>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 form-group">
                        <button type="button" class="btn btn-secondary" @click="navigate('/users')">Cancel</button>
                    </div>
                </div>
            </UserForm>
        </div>
        <PageSpinner v-if="isProcessing" />
    </div>
</template>

<script>
    import UserForm from "@/components/UserForm.vue";
    import PageSpinner from "@/components/PageSpinner.vue";
    import UserService from "@/services/UserService.js";
    import SpinnerMixin from "@/base/SpinnerMixin.js";
    import PageParamsMixin from "@/base/PageParamsMixin.js";

    export default {
        name: "add-user",
        mixins: [SpinnerMixin, PageParamsMixin],
        components: {
            UserForm,
            PageSpinner
        },
        methods: {
            saveUser() {
                this.invoke(UserService.addUser(this.addedUser))
                    .finally(() => this.navigate("/users"))
            },
            updateUser(userData) {
                this.addedUser = userData;
            }
        },
        data: function () {
            return {
                user: { picture: "http://placehold.it/128x128" },
                addedUser: null
            }
        }
    };
</script>

<style scoped>
.btn {
    width: 100%;
}
</style>

