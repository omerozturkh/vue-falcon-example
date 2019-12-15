import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    all: [],
  },
  mutations: {
    setAnalysis(state, value) {
      state.all = value;
    },
  },
  actions: {
    getAnalysis({ commit }) {
      axios.get('https://5df27b629b71960014bf6482.mockapi.io/api/v1/analysis')
        .then((result) => {
          console.log(result.data)
          const postArray = result.data;
          commit('setAnalysis', postArray);
        });
    },
  },
});
