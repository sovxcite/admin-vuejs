<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" v-if="navbar">
      <a class="navbar-brand" href="#">Admin-vuejs</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <router-link to="/users" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">Users</a>
          </router-link>
          <router-link to="/add-user" tag="li" class="nav-item" active-class="active">
            <a class="nav-link">Add user</a>
          </router-link>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-if="0">
          <div class="white">Hello, {{userName}} </div>
          <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="signOut">Sign out</button>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  computed: {
    navbar() {
      return this.$route.meta.navbar;
    },
    userName() {
      return AuthService.userName;
    },
    isAuthorized() {
      return AuthService.isAuthorized();
    }
  },
  methods: {
    signOut() {
      AuthService.signOut();
      this.$router.push({ name: "signin"})
    }
  }
}
</script>


<style>
.white {
  color: #eee;
  margin-right: 15px;
}
body {
  background-color: #eee !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 56px;
}
</style>
