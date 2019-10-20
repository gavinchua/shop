import APIClient from '@/api/APIClient'

const state = {
  user: [],
  userLogin: false
}

const getters = {
  getUser: state => state.user,
  getUserLogin: state => state.userLogin
}

const mutations = {
  setUser: (state, payload) => {
    state.user = payload
  },
  setUserLogin: (state, payload) => {
    state.userLogin = payload
  }
}

const actions = {
  async fetchAppUser({ commit }, userid) {
    await APIClient.getUser(userid)
      .then(response => {
        commit('setUser', response.data[0].user)
      })
      .catch(error => console.log(error)) // eslint-disable-line no-console
  },
  commitUserLogin({ commit }, payload) {
    commit('setUserLogin', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
