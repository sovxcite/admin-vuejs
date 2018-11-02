<template>
    <div>
        <div class="container" v-if="user">
            <h1>Edit user #{{id}}:</h1>
            <UserForm :user="user" @input="updateUser">
                <div class="row justify-content-end">
                    <div class="col-12 col-sm-6 col-md-4 form-group">
                        <button type="button" class="btn btn-success" @click="saveUser" :disabled="false">Update</button>
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
        name: "edit-user",
        mixins: [SpinnerMixin, PageParamsMixin],
        components: {
            UserForm,
            PageSpinner
        },
        mounted() {
            this.loadData();
        },
        methods: {
            loadData() {
                this.user = null;
                this.editedUser = null;
                this.invoke(UserService.getUser(this.id))
                    .then(response => this.user = response.data)
                    .catch(error => console.error(error));
            },
            saveUser() {
                this.invoke(UserService.editUser(this.id, this.editedUser))
                    .finally(() => this.navigate("/users"))
            },
            updateUser(userData) {
                this.editedUser = userData;
            }
        },
        data: function () {
            return {
                user: null,
                editedUser: null
            }
        }
    };
</script>

<style scoped>
.btn {
    width: 100%;
}
</style>
