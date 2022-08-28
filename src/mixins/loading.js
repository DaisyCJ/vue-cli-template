export default {
  data() {
    return {
      loading: false
    }
  },

  watch: {
    loading(val) {
      if (this.isPromise(val)) {
        Promise.resolve(val).finally(() => {
          this.loading = false
        })
      }
    }
  },

  methods: {
    isPromise(obj) {
      return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
    }
  }
}
