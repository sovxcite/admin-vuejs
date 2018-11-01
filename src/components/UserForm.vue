<template>
  <div class="container">
    <form name="user">
      <div class="row">
        <div class="col-sm-4 form-group">
          <label>First name</label>
          <input type="text" class="form-control" v-model="localUser.firstName">
        </div>
        <div class="col-sm-4 form-group">
          <label>Last name</label>
          <input type="text" class="form-control" v-model="localUser.lastName">
        </div>
        <div class="col-sm-8 form-group">
          <label>Address</label>
          <input type="text" class="form-control" v-model="localUser.address">
        </div>
        <div class="col-sm-4 form-group">
          <label>Phone</label>
          <input type="text" class="form-control" v-model="localUser.phone">
        </div>
        <div class="col-sm-4 form-group">
          <label>E-mail</label>
          <input type="email" class="form-control" v-model="localUser.email">
        </div>
        <div class="col-sm-4 form-group">
          <label>Balance</label>
          <input type="text" class="form-control" v-model="localUser.balance">
        </div>
        <div class="col-sm-4 form-group">
          <label>Company</label>
          <input type="text" class="form-control" v-model="localUser.company">
        </div>
        <div class="col-sm-4 form-group">
          <label>Age</label>
          <input type="number" class="form-control" v-model="localUser.age">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'UserForm',
    props: {
      // Объект с данными пользователя
      user: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      // Локальный изменяемый объект пользователя
      localUser: null
    }),
    watch: {
      // При изменении локального состояния
      // отправляем объект наверх
      localUser: {
        deep: true,
        handler() {
          this.$emit('input', this.localUser)
        }
      }
    },
    created() {
      // Копируем пользователя в локальное состояние
      this.localUser = Object.assign({}, this.user)
    }
  }
</script>