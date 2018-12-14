import axios from "axios";

const BASE_URL = "http://localhost:5000";

export default {
  getUsers() {
    return axios.get(`${BASE_URL}/users`);
  },
  getUsersPage(pageNumber, limit = 20) {
    return axios.get(`${BASE_URL}/users?_page=${pageNumber}&_limit=${limit}`);
  },
  getUser(id) {
    return axios.get(`${BASE_URL}/users/${id}`);
  },
  removeUser(id) {
    return axios.delete(`${BASE_URL}/users/${id}`);
  },
  addUser(user) {
    return axios.post(`${BASE_URL}/users`, user);
  },
  editUser(id, user) {
    return axios.patch(`${BASE_URL}/users/${id}`, user);
  }
};
