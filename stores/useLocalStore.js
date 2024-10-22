
export const useLocalStore = defineStore('main', {
  state: () => ({
    token: "",
    isLoggedIn: false
  }),

  actions: {
    setToken(value) {
      this.token = value;
    },
    setLoginStatus() {
      this.isLoggedIn = !this.isLoggedIn;
    },
    resetStore() {
      this.$reset()
    },
    logout() {
      this.resetStore()
    }
  },

  persist: true,
});
