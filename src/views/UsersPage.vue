<template>
  <div>
    <h1>Users :</h1>
    <user-list v-if="users" v-bind:users="users" @remove-user="removeUser"/>
    <PageSpinner v-if="isProcessing"/>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import PageSpinner from "@/components/PageSpinner.vue";
import UserService from "@/services/UserService.js";
import SpinnerMixin from "@/base/SpinnerMixin.js";

export default {
  name: "users",
  mixins: [SpinnerMixin],
  components: {
    UserList,
    PageSpinner
  },
  mounted() {
      this.loadUsers();
  },
  methods: {
      loadUsers() {
          this.users = null;
          this.invoke(UserService.getUsers())
          .then(response => this.users = response.data)
          .catch(error => console.error(error));
      },
      removeUser(id) {
          this.users = null;
          this.invoke(UserService.removeUser(id))
          .then(() => this.loadUsers())
          .catch(error => console.error(error));
      }
  },
    data: function() {
        return {
            users: null
        }
    }
};
</script>
