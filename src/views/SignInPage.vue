<template>
  <form class="form-signin">
      <div class="text-center mb-4">
        <img class="mb-4" src="https://vuejs.org/images/logo.png" alt="" width="172" height="172">
        <h1 class="h3 mb-3 font-weight-normal">Admin-vuejs</h1>
      </div>

      <div class="form-label-group">
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address"
                            v-model="user.email" required="" autofocus="">
        <label for="inputEmail">Email address</label>
      </div>

      <div class="form-label-group">
        <input type="password" id="inputPassword" class="form-control" placeholder="Password"
                            v-model="user.password" required="">
        <label for="inputPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="button" @click="signIn">Sign in</button>
      <div class="alert alert-danger margin" role="alert" v-if="error">
        {{error}}
      </div>
      <p class="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
    </form>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "signin",
  methods: {
    signIn() {
      this.error = null;
      AuthService.signIn(this.user.email, this.user.password)
      .then(data => {
        this.$router.push({ name: "users"})
      }).catch(error => {
        this.error = error.response.data.error;
      });
    }
  },
  data: function () {
    return {
      user: {},
      error: null
    }
  }
}
</script>


<style scoped>
.margin {
  margin-top: 20px;
}

.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: 0 auto;
}

.form-control {
    height: initial;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: .75rem .75rem;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(.75rem + .75rem * (2 / 3));
  padding-bottom: calc(.75rem / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(.75rem / 3);
  padding-bottom: calc(.75rem / 3);
  font-size: 12px;
  color: #777;
}
</style>