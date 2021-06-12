import { useDispatch, useSelector } from 'hook';
import { createEl } from '@helper/domHelper';

const Title = ({ title }) => {
  const el = createEl('h1', { className: 'ideal-title' });
  const state = useSelector();
  el.textContent = title + state.round + '강';

  el.addEventListener('click', () => {
    console.log('state', state);
  });

  return el;
};

export default Title;
