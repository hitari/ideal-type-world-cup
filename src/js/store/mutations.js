import { shuffleArray } from '../helper/filterHelper';
import { shallowCopy } from '../helper/objectHelper';
import { pipe } from '../helper/functionHelper';

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
    state.status = 'play';

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
    const { key, title } = payload;
    state.tournament[key].isWinner = true;
    state.round = state.round / 2;

    const nextIdleTypes = pipe(
      (ideleTypes) => shuffleArray(ideleTypes),
      (ideleTypes) => shallowCopy(ideleTypes),
      (ideleTypes) =>
        ideleTypes.map((idele) => {
          idele.isWinner = false;
          return idele;
        }),
      (ideleTypes) => [...state.tournament, ...ideleTypes]
    );

    state.tournament = nextIdleTypes([...state.winners, state.tournament[key]]);
    state.winners = [];
    state.title = title;
    state.current = state.current + 2;

    return state;
  },
  finalRoundIdleType(state, payload) {
    const { key, title } = payload;
    state.tournament[key].isWinner = true;
    state.winners = [state.tournament[key]];
    state.round = state.round / 2;
    state.tournament.push(state.tournament[key]);
    state.title = title;
    state.status = 'end';

    return state;
  },
};
