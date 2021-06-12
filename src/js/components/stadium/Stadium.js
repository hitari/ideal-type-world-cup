import { createEl } from '@helper/domHelper';
import IdealItem from './IdealItem';

const Stadium = ({ tournament }) => {
  const el = createEl('section', { className: 'ideal-stadium' });
  const div = createEl('div');
  const span = createEl('span');
  span.textContent = 'VS';
  div.appendChild(span);

  el.addEventListener('click', () => {
    console.log('click');
  });

  return (() => {
    el.appendChild(IdealItem(tournament[0]));
    el.appendChild(div);
    el.appendChild(IdealItem(tournament[1]));
    return el;
  })();
};

export default Stadium;
