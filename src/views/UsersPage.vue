<template>
  <div>
    <h1>Users :</h1>
    <user-list v-bind:users="users" @remove-user="removeUser"></user-list>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import axios from "axios";

export default {
  name: "users",
  components: {
    UserList
  },
  mounted() {
      this.loadUsers();
  },
  methods: {
      loadUsers() {
          axios.get('http://localhost:3001/users')
          .then(response => this.users = response.data)
          .catch(error => console.error(error));
      },
      removeUser(id) {
          axios.delete(`http://localhost:3001/users/${id}`)
          .then(() => this.loadUsers())
          .catch(error => console.error(error));
      }
  },
    data: function() {
        return {
            users: []
        }
    }
};
</script>
