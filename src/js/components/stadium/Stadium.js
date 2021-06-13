import { createEl } from '@helper/domHelper';
import IdealItem from './IdealItem';

const Stadium = ({ items, current, handleIdleTypeClick }) => {
  const [item1, item2] = items;
  const el = createEl('section', { className: 'ideal-stadium' });
  const div = createEl('div', { className: 'ideal-stadium-wrap' });
  const span = createEl('span', { className: 'ideal-stadium-versus', textContent: 'VS' });
  div.appendChild(span);

  el.appendChild(IdealItem({ item: item1, key: current, handleIdleTypeClick }));
  el.appendChild(div);
  el.appendChild(IdealItem({ item: item2, key: current + 1, handleIdleTypeClick }));

  return el;
};

export default Stadium;
