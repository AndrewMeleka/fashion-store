export const state = () => ({
  alerts: []
});
export const actions = {
  deleteAlert({ commit }, payload) {
    commit("deleteAlert", payload);
  },
  alertAdd({ commit }, payload) {
    commit("alertAdd", payload);
    setTimeout(() => {
      commit("deleteAlertByBody", payload.body);
    }, 10000);
  }
};

export const mutations = {
  deleteAlert(state, payload) {
    for (var i = 0; i < state.alerts.length; i++) {
      if (i == payload.index) {
        state.alerts.splice(i, 1);
      }
    }
    state.alerts;
  },
  deleteAlertByBody(state, payload) {
    for (var i = 0; i < state.alerts.length; i++) {
      if (state.alerts[i].body == payload) {
        state.alerts.splice(i, 1);
      }
    }
    state.alerts;
  },
  alertAdd(state, payload) {
    state.alerts.push(payload);
  }
};

export const getters = {
  allAlerts(state) {
    return state.alerts;
  }
};
