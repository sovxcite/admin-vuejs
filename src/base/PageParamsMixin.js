export default {
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    navigate(params) {
      return new Promise((resolve, reject) => {
        this.$router.push(params, resolve, reject);
      });
    }
  }
};
