import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => ({
    loggedInUser: {}
  }),

  getters: {
    isLoggedIn: (state) => Object.keys(state.loggedInUser).length > 0
  },

  actions: {
    assignLoggedInUser (payload:object) {
      this.loggedInUser = payload
    }
  }
})
