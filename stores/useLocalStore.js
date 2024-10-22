import { defineStore } from 'pinia';

export const useLocalStore = defineStore('main', {
  state: () => ({
    token: "",
    isLoggedIn: false
  }),

  actions: {
    setToken(value) {
      this.token = value;

      this.isLoggedIn = true;
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
