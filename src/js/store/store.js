import PubSub from '@lib/PubSub';
import RenderDOM from '@lib/RenderDOM';

let actions = {};
let mutations = {};
let state = {};

// 스토어 초기생성
const createStore = (params = {}) => {
  if (params.hasOwnProperty('actions')) {
    actions = params.actions;
  }

  if (params.hasOwnProperty('mutations')) {
    mutations = params.mutations;
  }

  state = new Proxy(params.state || {}, {
    set: function (state, key, value) {
      state[key] = value;
      PubSub.publish('stateChange', state);

      return true;
    },
  });

  PubSub.subscribe('stateChange', () => {
    RenderDOM.update();
  });
};

const dispatch = (actionKey, payload) => {
  if (typeof actions[actionKey] !== 'function') return;
  actions[actionKey](commit, payload);

  return true;
};

const commit = (mutationKey, payload) => {
  let newState = mutations[mutationKey](state, payload);

  state = Object.assign(state, newState);

  return true;
};

export { createStore, dispatch, commit, state };
