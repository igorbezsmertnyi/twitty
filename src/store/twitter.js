import twitterInstance from '@/modules/twitterInstance'

export default {
  state: {
    twitts: {
      makeschool: {
        list: [],
        filters: {
          count: 30,
          sort: 'desc',
          dateTime: []
        }
      },
      newsycombinator: {
        list: [],
        filters: {
          count: 30,
          sort: 'desc',
          dateTime: []
        }
      },
      ycombinator: {
        list: [],
        filters: {
          count: 30,
          sort: 'desc',
          dateTime: []
        }
      },
    }
  },

  mutations: {
    SET_TWITTS(state, data) {
      state.twitts[data.key].list = data.twitts
    },

    CHANGE_FILTER(state, data) {
      state.twitts[data.key].filters[data.option] = data.value
    }
  },

  getters: {
    getTwitts: state => twittsFor => state.twitts[twittsFor].list,
    getFilters: state => filterFor => state.twitts[filterFor].filters
  },

  actions: {
    async loadTwitts({ commit, state }, twittsFor) {
      const screenName = twittsFor.toLowerCase()
      const countOfTwitts = state.twitts[screenName].filters.count

      try {
        let res = await twitterInstance.get('user_timeline.json', {
          params: {
            count: countOfTwitts,
            screen_name: screenName
          }
        })

        res = await res.data
        await commit('SET_TWITTS', { key: screenName, twitts: res })
      } catch (err) {
        console.error(err)
      }
    },

    changeFilter({ commit }, data) { commit('CHANGE_FILTER', data) },

    async applyFilters({ commit, state, dispatch }, data) {
      const filters = state.twitts[data].filters
      let list = state.twitts[data].list

      if (list.length !== 30) {
        await dispatch('loadTwitts', data)
        
        list = await state.twitts[data].list
      }

      list = await list.sort((a, b) => {
        let res

        if (filters.sort === 'asc') {
          res = new Date(a.created_at) - new Date(b.created_at)
        } else {
          res = new Date(b.created_at) - new Date(a.created_at)
        }

        return res
      })

      if (filters.dateTime && filters.dateTime.length) {
        list = await list.filter(twitt => (
          new Date(twitt.created_at) >= new Date(filters.dateTime[0]) && 
          new Date(twitt.created_at) <= new Date(filters.dateTime[1])
        ))

        console.log(list)
      }

      await commit('SET_TWITTS', { key: data, twitts: list })
    }
  }
}