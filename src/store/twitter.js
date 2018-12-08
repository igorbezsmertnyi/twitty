import twitterInstance from '@/modules/twitterInstance'

export default {
  state: {
    twitts: {
      makeschool: {},
      newsycombinator: {},
      ycombinator: {}
    }
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
      const screenName = twittsFor.toLowerCase()

      try {
        let res = await twitterInstance.get('user_timeline.json', {
          params: {
            count: 30,
            screen_name: screenName
          }
        })

        res = await res.data
        await commit('SET_TWITTS', { key: screenName, twitts: res })
      } catch (err) {
        console.error(err)
      }
    }
  }
}