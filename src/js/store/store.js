import PubSub from '@lib/PubSub';
import RenderDOM from '@lib/RenderDOM';

let actions = {};
let mutations = {};
let state = {};
let status = 'resting';

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

      status = 'resting';

      return true;
    },
  });

  PubSub.subscribe('stateChange', () => {
    console.log('stateChange-update');
    RenderDOM.update();
  });
};

const dispatch = (actionKey, payload) => {
  if (typeof actions[actionKey] !== 'function') {
    return false;
  }

  status = 'action';
  actions[actionKey](commit, payload);

  console.groupEnd();

  return true;
};

const commit = (mutationKey, payload) => {
  status = 'mutation';

  let newState = mutations[mutationKey](state, payload);

  state = Object.assign(state, newState);

  return true;
};

export { createStore, dispatch, commit, state };
