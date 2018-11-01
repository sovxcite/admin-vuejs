<template>
    <div>
        <h1>Edit user #{{id}} :</h1>
        <PageSpinner v-if="!user" />
        <UserForm v-else :user="user"></UserForm>
        <div>
            <button type="button" class="btn btn-success">Update</button>
            <button type="button" class="btn btn-secondary">Cancel</button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import UserForm from "@/components/UserForm.vue";
    import PageSpinner from "@/components/PageSpinner.vue";

    export default {
        name: "edit-user",
        components: {
            UserForm,
            PageSpinner
        },
        mounted() {
            this.loadUser(this.id);
        },
        computed: {
            id() {
                return this.$route.params.id
            }
        },
        methods: {
            loadUser(id) {
                axios.get('http://localhost:3001/users/' + id)
                    .then(response => this.user = response.data)
                    .catch(error => console.error(error));
            }
        },
        data: function () {
            return {
                user: null
            }
        }
    };
</script>