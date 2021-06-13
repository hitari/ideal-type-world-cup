import { createEl } from '@helper/domHelper';

const Home = ({ handleStartClick }) => {
  const el = createEl('section', { className: 'ideal-home' });
  const select = createEl('select');
  const opt1 = createEl('option', { value: 16, text: '16강' });
  const opt2 = createEl('option', { value: 8, text: '8강' });
  const opt3 = createEl('option', { value: 4, text: '4강', selected: 'selected' });
  select.add(opt1);
  select.add(opt2);
  select.add(opt3);

  const anchor = createEl('a', { href: '#', className: 'ideal-anchor', textContent: '<시작하기>' });
  anchor.addEventListener('click', (event) => handleStartClick(event, select));

  el.appendChild(select);
  el.appendChild(anchor);

  return el;
};

export default Home;
