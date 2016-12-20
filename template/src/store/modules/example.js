import * as types from '../mutation-types'

const state = {
  main: 0,
  msg: 'hello from store.state.example'
}

const mutations = {
  [types.DECREMENT_MAIN_COUNTER] (state) {
    state.main--
  },
  [types.INCREMENT_MAIN_COUNTER] (state) {
    state.main++
  }
}

export default {
  state,
  mutations
}
