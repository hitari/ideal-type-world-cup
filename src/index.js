import RenderDOM from './js/lib/RenderDOM';
import App from './js/App';
import actions from '@store/actions';
import mutations from '@store/mutations';
import state from '@store/state';
import { createStore } from '@store/store';

createStore({
  actions,
  mutations,
  state,
});

RenderDOM.render(App, 'root');
