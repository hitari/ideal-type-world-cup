import { createEl } from '@helper/domHelper';

const Title = ({ title }) => {
  const el = createEl('h1', { className: 'ideal-title' });
  el.textContent = title;

  return (() => {
    return el;
  })();
};

export default Title;
