<template>
  <table class="table">
    <thead class="thead-dark">
        <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">E-mail</th>
        <th scope="col">Active</th>
        <th scope="col">Phone</th>
        <th scope="col">Balance</th>
        <th scope="col">Age</th>
        <th scope="col">Avatar</th>
        <th scope="col"></th>
        <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="user in users" v-bind:key="user.id">
        <th scope="row"><router-link :to="'/edit-user/' + user.id"># {{ user.id }}</router-link></th>
        <td>{{user.firstName}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.email}}</td>
        <td>{{user.isActive}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.balance}}</td>
        <td>{{user.age}}</td>
        <td><img v-bind:src="user.picture"></td>
        <td><router-link :to="'/edit-user/' + user.id"><font-awesome-icon class="edit-btn" icon="user-edit"/></router-link></td>
        <td><font-awesome-icon class="remove-btn" icon="times" @click="$emit('remove-user', user.id)"/></td>
        </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "user-list",
  props: ["users"]
};
</script>

<style scoped>
table.table {
  background-color: #fff;
  max-width: 1200px;
  margin: 10px auto 0 auto;
}
.table th,
.table td {
  vertical-align: middle;
}
img {
  border-radius: 30px;
  width: 48px;
  height: 48px;
}
.remove-btn {
  cursor: pointer;
  color: red;
}
.remove-btn:hover {
  color: rgba(255, 0, 0, 0.7);
}
.edit-btn {
  cursor: pointer;
  color: blue;
}
.edit-btn:hover {
  color: rgba(0, 0, 255, 0.7);
}
</style>
