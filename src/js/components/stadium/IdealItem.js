import { createEl } from '@helper/domHelper';

const IdealItem = ({ item, key, handleIdleTypeClick }) => {
  const el = createEl('div', { className: 'ideal-zone' });
  const button = createEl('button');
  const img = createEl('img', { src: item.url });

  button.appendChild(img);
  button.addEventListener('click', (event) => handleIdleTypeClick(event, key, item));

  el.appendChild(button);

  return el;
};

export default IdealItem;
