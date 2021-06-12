export default {
  setTitle(commit, payload) {
    commit('setTitle', payload);
  },
  choiceIdleType(commit, payload) {
    commit('choiceIdleType', payload);
  },
  endOfRoundChoiceIdleType(commit, payload) {
    commit('endOfRoundChoiceIdleType', payload);
  },
  finalRoundIdleType(commit, payload) {
    commit('finalRoundIdleType', payload);
  },
};
