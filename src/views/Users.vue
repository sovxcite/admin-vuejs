<template>
  <div>
    <user-list v-bind:users="users"></user-list>
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from "@/components/UserList.vue";

export default {
  name: "users",
  components: {
    UserList
  },
    data: function() {
        return {
            users: [{
                first_name: 'Вадим',
                last_name: 'Галкин',
                avatar_url: 'https://ui-avatars.com/api/?name=Вадим+Галкин'
            },
            {
                first_name: 'Василий',
                last_name: 'Танасийчук',
                avatar_url: 'https://ui-avatars.com/api/?name=Вадим+Танасийчук'
            },
            {
                first_name: 'Федор',
                last_name: 'Емельяненко',
                avatar_url: 'https://ui-avatars.com/api/?name=Ф+Е'
            },
            {
                first_name: 'Чейл',
                last_name: 'Соннен',
                avatar_url: 'https://ui-avatars.com/api/?name=Ч+С'
            },
            {
                first_name: 'Конор',
                last_name: 'МакГрегор',
                avatar_url: 'https://ui-avatars.com/api/?name=Конор+МакГрегор'
            }]
        };
    }
};
</script>
