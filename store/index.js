import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {}
    },
    mutations: {
      update(state, user) {
        state.user = user
      }
    }
  })
}

export default createStore
