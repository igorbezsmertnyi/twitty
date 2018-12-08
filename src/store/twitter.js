import twitterInstance from '@/modules/twitterInstance'
import { getObject, setObject } from '@/modules/localStorage'
import { LOCAL_STORAGE_KEY } from '@/constants'
import filtersTwitts from '@/modules/filtersTwitts'

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

      setObject(LOCAL_STORAGE_KEY, state)
    },

    CHANGE_FILTER(state, data) {
      state.twitts[data.key].filters[data.option] = data.value

      setObject(LOCAL_STORAGE_KEY, state)
    },

    SET_DATA(state, data) {
      state.twitts = data.twitts
    }
  },

  getters: {
    getTwitts: state => twittsFor => state.twitts[twittsFor].list,
    getFilters: state => filterFor => state.twitts[filterFor].filters
  },

  actions: {
    loadLocalData({ commit }) {
      const data = getObject(LOCAL_STORAGE_KEY)
      if (typeof data === 'object') commit('SET_DATA', data)
    },

    async loadTwitts({ commit, state }, twittsFor) {
      const screenName = twittsFor.toLowerCase()
      const filters = state.twitts[screenName].filters

      try {
        let res = await twitterInstance.get('user_timeline.json', {
          params: {
            count: filters.count,
            screen_name: screenName
          }
        })

        res = await filtersTwitts(res.data, filters)
        await commit('SET_TWITTS', { key: screenName, twitts: res })
      } catch (err) {
        console.error(err)
      }
    },

    async applyFilters({ commit, state, dispatch }, data) {
      const filters = state.twitts[data].filters
      let list = state.twitts[data].list

      if (list.length !== 30 || filters.count !== 30) {
        await dispatch('loadTwitts', data)
        
        list = await state.twitts[data].list
      }

      list = await filtersTwitts(list, filters)

      await commit('SET_TWITTS', { key: data, twitts: list })
    },
  
    changeFilter({ commit }, data) { commit('CHANGE_FILTER', data) }
  }
}