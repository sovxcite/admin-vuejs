<template>
  <div class="container">
    <form name="user">
      <div class="row">
        <div class="col-md-4 form-group">
          <label>First name</label>
          <input type="text" class="form-control" v-model="localUser.firstName">
        </div>
        <div class="col-md-4 form-group">
          <label>Last name</label>
          <input type="text" class="form-control" v-model="localUser.lastName">
        </div>
        <div class="col-md-4 form-group">
          <label>Is active</label>
          <checkbox v-model="localUser.isActive">{{localUser.isActive ? 'active' : 'inactive'}}</checkbox>
        </div>
        <div class="col-md-8 form-group">
          <label>Address</label>
          <input type="text" class="form-control" v-model="localUser.address">
        </div>
        <div class="col-md-4 form-group">
          <label>Phone</label>
          <input type="text" class="form-control" v-model="localUser.phone">
        </div>
        <div class="col-md-4 form-group">
          <label>Access level</label>
          <select
            class="form-control"
            v-model="localUser.accessLevel">
            <option
              v-for="item in accessList"
              :key="item">
              {{ item }}
            </option>
          </select>
        </div>
        <div class="col-md-4 form-group">
          <label>E-mail</label>
          <input type="email" class="form-control" v-model="localUser.email">
        </div>
        <div class="col-md-4 form-group">
          <label>Balance</label>
          <input type="text" class="form-control" v-model="localUser.balance">
        </div>
        <div class="col-md-4 form-group">
          <label>Company</label>
          <input type="text" class="form-control" v-model="localUser.company">
        </div>
        <div class="col-md-4 form-group">
          <label>Age</label>
          <input type="number" class="form-control" v-model="localUser.age">
        </div>
        <div class="col-md-4 form-group">
          <label>Registration date</label>
          <datepicker v-model="localUser.registered"/>
        </div>
        <div class="col-md-12 form-group">
          <label>About</label>
          <rich-editor v-model="localUser.about" />
        </div>
        <div class="col-md-12 form-group">
          <label>Picture URL</label>
          <avatar-uploader v-model="localUser.picture" />
        </div>
      </div>
      <slot/>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'UserForm',
    components: {
      Datepicker: () => import('@/components/DatePicker.vue'),
      AvatarUploader: () => import('@/components/AvatarUploader.vue'),
      RichEditor: () => import('@/components/RichEditor.vue'),
      Checkbox: () => import('@/components/Checkbox.vue')
    },
    props: {
      // Объект с данными пользователя
      user: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      // Локальный изменяемый объект пользователя
      localUser: null,
      accessList: ['guest', 'user', 'admin']
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