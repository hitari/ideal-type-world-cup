export default {
  setTitle(commit, payload) {
    commit('setTitle', payload);
  },
  startWorldCup(commit, payload) {
    commit('startWorldCup', payload);
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
  historyBack(commit, payload) {
    commit('historyBack', payload);
  },
};
