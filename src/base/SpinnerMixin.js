export default {
  data() {
    return {
      SpinnerMixin: {
        $semaphore: 0
      }
    };
  },
  computed: {
    isProcessing() {
      return this.$data.SpinnerMixin.$semaphore > 0;
    }
  },
  methods: {
    invoke(promise) {
      this.$getSpinner();
      promise.finally(() => this.$releaseSpinner());
      return promise;
    },
    $getSpinner() {
      this.$data.SpinnerMixin.$semaphore++;
    },
    $releaseSpinner() {
      this.$data.SpinnerMixin.$semaphore--;
      if (this.$data.SpinnerMixin.$semaphore < 0) {
        throw new Error("Spinner semaphore: illegal operation");
      }
    }
  }
};