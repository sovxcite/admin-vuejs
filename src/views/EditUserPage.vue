<template>
  <div>
      <h1>Edit user #{{id}} :</h1>
      <UserForm :user="user"></UserForm>
  </div>
</template>

<script>
import axios from "axios";
import UserForm from "@/components/UserForm.vue";

export default {
  name: "edit-user",
  components: {
      UserForm
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
    data: function() {
        return {
            user: null
        }
    }
};
</script>

