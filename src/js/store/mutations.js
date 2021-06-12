export default {
  setTitle(state, payload) {
    state.title = payload;

    return state;
  },
  choiceIdleType(state, payload) {
    const { key } = payload;
    state.tournament[key].isWinner = true;
    state.winners.push(state.tournament[key]);
    state.current = state.current + 2;

    return state;
  },
  endOfRoundChoiceIdleType(state, payload) {
    console.log('mutations');
    const { key } = payload;
    state.tournament[key].isWinner = true;
    state.round = state.round / 2;

    const nextIdleTypes = [...state.winners, state.tournament[key]];
    nextIdleTypes.sort(() => Math.random() - Math.random());
    state.tournament = [...state.tournament, ...nextIdleTypes];
    state.winners = [];
    state.current = state.current + 2;

    return state;
  },
  finalRoundIdleType(state, payload) {
    const { key } = payload;
    state.tournament[key].isWinner = true;
    state.winners = [state.tournament[key]];
    state.round = state.round / 2;
    state.tournament.push(state.tournament[key]);
    state.status = 'end';

    return state;
  },
};
