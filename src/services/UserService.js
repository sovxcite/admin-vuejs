import axios from "axios";

const BASE_URL = "http://localhost:3001";

export default {
  getUsers() {
    return axios.get(`${BASE_URL}/users`);
  },
  getUser(id) {
    return axios.get(`${BASE_URL}/users/${id}`);
  },
  removeUser(id) {
    return axios.delete(`${BASE_URL}/users/${id}`);
  },
  editUser(id) {
    return axios.patch(`${BASE_URL}/users/${id}`);
  }
};
