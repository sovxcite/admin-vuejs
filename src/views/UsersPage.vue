<template>
  <div class="page">
    <h1>Users :</h1>
    <user-list v-if="users" v-bind:users="users" @remove-user="removeUser">
        <TablePaginator :page="pageNum" :itemsAmount="itemsCount" :pageSize="pageSize" @updated="loadPage"/>
    </user-list>
    <PageSpinner v-if="isProcessing"/>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import TablePaginator from "@/components/table/TablePaginator.vue";
import PageSpinner from "@/components/PageSpinner.vue";
import UserService from "@/services/UserService.js";
import SpinnerMixin from "@/base/SpinnerMixin.js";

export default {
  name: "users",
  mixins: [SpinnerMixin],
  components: {
    UserList,
    PageSpinner,
    TablePaginator
  },
  mounted() {
      this.loadPage(this.pageNum, this.pageSize);
  },
  methods: {
      loadUsers() {
          this.users = null;
          this.invoke(UserService.getUsers())
          .then(response => this.users = response.data)
          .catch(error => console.error(error));
      },
      loadPage(page, pageSize) {
          this.users = null;
          this.pageNum = page;
          this.pageSize = pageSize;
          this.invoke(UserService.getUsers())
          .then(response => {
              this.itemsCount = response.data.length;
              return UserService.getUsersPage(page, pageSize);
          })
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
            users: null,
            pageNum: 1,
            pageSize: 10,
            itemsCount: 0
        }
    }
};
</script>

<style scoped>
.page {
    margin-bottom: 60px;
}
</style>

