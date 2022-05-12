import api from '../api/index'

export default {
  namespaced: 'team',
  state: {
    team: ''
  },
  mutations: {
    getTeams (state, getTeamDetail) {
      console.log(getTeamDetail)
      state.team = getTeamDetail
    }
  },
  actions: {
    fetchTeamData ({ state, commit }, props) {
      return new Promise((resolve) => {
        console.log('props1', props)
        api.getTeam(props)
          .then(data => {
            const getTeamDetail = data.detail
            commit('getTeams', getTeamDetail)
            console.log('store TEAM', data)
            state.team = data
            resolve(data)
          })
          .catch((err) => {
            console.log(err)
          })
      })
    }
  },
  getters: {}
}
