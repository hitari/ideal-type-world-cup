import { createEl } from '@helper/domHelper';

const Home = ({ handleStartClick }) => {
  const el = createEl('section', { className: 'ideal-home' });
  const select = createEl('select');
  const opt1 = createEl('option', { value: 16, selected: 'selected' });
  const opt2 = createEl('option', { value: 8 });
  const opt3 = createEl('option', { value: 4 });
  opt1.text = '16강';
  opt2.text = '8강';
  opt3.text = '4강';
  select.add(opt1);
  select.add(opt2);
  select.add(opt3);

  const anchor = createEl('a', { href: '#' });
  anchor.textContent = '시작하기';
  anchor.addEventListener('click', (event) => handleStartClick(event, select));

  el.appendChild(select);
  el.appendChild(anchor);

  return el;
};

export default Home;
