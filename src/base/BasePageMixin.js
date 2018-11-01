export default {
  data() {
    return {
      BasePage: {
        $semaphore: 0
      }
    };
  },
  computed: {
    isProcessing() {
      return this.$data.BasePage.$semaphore > 0;
    }
  },
  methods: {
    invoke(promise) {
      this.$getSpinner();
      promise.finally(() => this.$releaseSpinner());
      return promise;
    },
    $getSpinner() {
      this.$data.BasePage.$semaphore++;
    },
    $releaseSpinner() {
      this.$data.BasePage.$semaphore--;
      if (this.$data.BasePage.$semaphore < 0) {
        throw new Error("Spinner semaphore: illegal operation");
      }
    }
  }
};