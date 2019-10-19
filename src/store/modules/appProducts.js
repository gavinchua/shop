import APIClient from '@/api/APIClient'

const state = {
  products: []
}

const getters = {
  getProducts: state => state.products
}

const mutations = {
  setProducts: (state, payload) => {
    state.products = payload
  }
}

const actions = {
  async fetchAppProducts({ commit }) {
    await APIClient.getProducts()
      .then(response => {
        commit('setProducts', response.data[0].products)
      })
      .catch(error => console.log(error))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
