export default {
  state: {
    twitts: {}
  },

  mutations: {
    SET_TWITTS(state, data) {
      state.twitts[data.key] = data.twitts
    }
  },

  getters: {
    getTwitts: state => twittsFor => state.twitts[twittsFor]
  },

  actions: {
    async loadTwitts({ commit }, twittsFor) {
      try {

      } catch (err) {

      }
    }
  }
}