import { shallowCopy } from '@helper/objectHelper';

export default {
  setTitle(state, payload) {
    state.title = payload;

    return state;
  },
  startWorldCup(state, payload) {
    const { title, round, tournament } = payload;
    state.tournament = tournament;
    state.title = title;
    state.round = round;
    state.currentRound = round;
    state.status = 'play';

    return state;
  },
  choiceIdleType(state, payload) {
    const { key } = payload;
    state.snapshot.push({
      title: state.title,
      current: state.current,
      currentRound: state.currentRound,
      tournament: shallowCopy(state.tournament),
      winners: shallowCopy(state.winners),
    });
    state.tournament[key].isWinner = true;
    state.winners.push(state.tournament[key]);
    state.current = state.current + 2;

    return state;
  },
  endOfRoundChoiceIdleType(state, payload) {
    const { key, title, tournament } = payload;
    state.snapshot.push({
      title: state.title,
      current: state.current,
      currentRound: state.currentRound,
      tournament: shallowCopy(state.tournament),
      winners: shallowCopy(state.winners),
    });
    state.tournament[key].isWinner = true;
    state.currentRound = state.currentRound / 2;
    state.tournament = tournament;
    state.winners = [];
    state.title = title;
    state.current = state.current + 2;

    return state;
  },
  finalRoundIdleType(state, payload) {
    const { key, title } = payload;
    state.tournament[key].isWinner = true;
    state.winners = [state.tournament[key]];
    state.currentRound = state.currentRound / 2;
    state.tournament.push(state.tournament[key]);
    state.title = title;
    state.status = 'end';

    return state;
  },
  historyBack(state, payload) {
    const history = state.snapshot.pop();
    state.title = history.title;
    state.current = history.current;
    state.currentRound = history.currentRound;
    state.tournament = history.tournament;
    state.winners = history.winners;
  },
};
