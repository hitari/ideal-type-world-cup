import { createEl } from '@helper/domHelper';

const Title = ({ title }) => {
  const el = createEl('h1', { className: 'ideal-title', textContent: title });

  return el;
};

export default Title;
