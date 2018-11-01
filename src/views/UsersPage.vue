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
import BasePageMixin from "@/base/BasePageMixin.js";

export default {
  name: "users",
  mixins: [BasePageMixin],
  components: {
    UserList,
    PageSpinner
  },
  mounted() {
      console.log(this.$data);
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
