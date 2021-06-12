import { createEl } from '@helper/domHelper';

const IdealItem = (item) => {
  const el = createEl('section', { className: 'ideal-zone' });
  const button = createEl('button', {});
  const img = createEl('img', { src: item.url });

  button.appendChild(img);
  el.appendChild(button);

  return (() => {
    return el;
  })();
};

export default IdealItem;
