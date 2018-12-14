import axios from "axios";
import { Base64 } from "js-base64";

const BASE_URL = "http://localhost:5000";
const AuthService = {
  signIn(email, password) {
    return axios
      .post(`${BASE_URL}/auth/signin`, {
        email,
        password
      })
      .then(res => {
        const tokenObj = JSON.parse(
          Base64.decode(res.data.token.split(".")[1])
        );
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("token_expire", `${tokenObj.exp}`);
        localStorage.setItem("token_username", `${tokenObj.email}`);
        return res;
      });
  },
  signOut() {
    if (this.isAuthenticated()) {
      localStorage.removeItem("token");
      localStorage.removeItem("token_expire");
      localStorage.removeItem("token_username");
    }
  },
  get userName() {
    return this.isAuthenticated()
      ? localStorage.getItem("token_username")
      : null;
  },
  get token() {
    return localStorage.getItem("token");
  },
  isAuthenticated() {
    return localStorage.getItem("token") &&
      Number(localStorage.getItem("token_expire")) > new Date().getTime()
      ? true
      : false;
  }
};

axios.interceptors.request.use(
  function(config) {
    if (!config.url.includes("/auth")) {
      if (AuthService.isAuthenticated()) {
        config.headers.common["Authorization"] = `Bearer ${AuthService.token}`;
      }
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default AuthService;
