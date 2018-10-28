<template>
  <table class="table">
    <thead class="thead-dark">
        <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Avatar</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(user, index) in users" v-bind:key="user.first_name">
        <th scope="row">{{index}}</th>
        <td>{{user.first_name}}</td>
        <td>{{user.last_name}}</td>
        <td><img v-bind:src="user.avatar_url"></td>
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
