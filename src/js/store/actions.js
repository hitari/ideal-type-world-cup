export default {
  setTitle(commit, payload) {
    commit('setTitle', payload);
  },
  addItem(commit, payload) {
    commit('addItem', payload);
  },
  clearItem(commit, payload) {
    commit('clearItem', payload);
  },
};
