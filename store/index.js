export const state = () => ({
  clothes: []
});
export const actions = {
  // start get request from server to load all products [clothes]
  nuxtServerInit({ commit }) {
    return new Promise(resolve => {
      this.$axios
        .$get(
          "https://projects.developers99.com/fashionstore/data/clothes.json"
        )
        .then(result => {
          commit("setData", result);
          resolve(true);
        })
        .catch(error => {
          resolve(false);
        });
    });
  },
  fetchAndDeleteSelected({ commit }, payload) {
    commit("changeInCart", payload);
  }
};
export const mutations = {
  setData(state, payload) {
    state.clothes = payload;
  },
  changeInCart(state, payload) {
    state.clothes.forEach((element, index) => {
      if (element.title == payload.title) {
        state.clothes[index].inCart = payload.changeIn;
      }
    });
  }
};
export const getters = {
  allCostedInCart(state) {
    let allCost = 0;
    state.clothes.forEach(el => {
      if (el.inCart) {
        allCost += el.cost;
      }
    });
    return allCost;
  }
};
