export const state = () => ({
  name: null,
  email: null,
  password: null,
  moneyHave: 0,
  historyBuy: []
});
export const actions = {
  fetchUserInfo({ commit }, payload) {
    commit("addUserInfo", payload);
  },
  destroyUser({ commit }) {
    commit("destoryMe");
  },
  paymenytHistory({ commit }, payload) {
    commit("addPaymenytHistory", payload);
  },
  minusMoney({ commit }, payload) {
    commit("payForItems", payload);
  }
};
export const mutations = {
  addUserInfo(state, payload) {
    state.name = payload.name;
    state.email = payload.email;
    state.password = payload.password;
    state.moneyHave = payload.moneyHave;
    state.historyBuy = payload.historyBuy;
  },
  destoryMe(state) {
    state.name = null;
    state.email = null;
    state.password = null;
    state.moneyHave = 0;
    state.historyBuy = null;
  },
  payForItems(state, payload) {
    return (state.moneyHave -= payload);
  },
  addPaymenytHistory(state, payload) {
    state.historyBuy.push(payload);
  }
};
export const getters = {
  getUsername(state) {
    return state.name;
  },
  getMyMoney: state => state.moneyHave,
  getHistory: state => state.historyBuy
};
