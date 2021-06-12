import { createEl } from '@helper/domHelper';
import Title from '../components/title/Title';
import Stadium from '../components/stadium/Stadium';

const IdealTypePage = () => {
  const el = createEl('article', { className: 'ideal-wrap' });
  el['className'] = 'ideal-wrap';

  return (() => {
    el.appendChild(Title({ title: '제목' }));
    el.appendChild(Stadium());
    return el;
  })();
};

export default IdealTypePage;
