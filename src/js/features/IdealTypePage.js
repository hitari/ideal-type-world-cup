import { useDispatch, useSelector } from 'hook';
import { createEl } from '@helper/domHelper';
import Title from '../components/title/Title';
import Stadium from '../components/stadium/Stadium';

const IdealTypePage = () => {
  const dispatch = useDispatch();
  const { title, tournament } = useSelector((state) => state);
  const el = createEl('article', { className: 'ideal-wrap' });
  console.log('tournament', tournament);

  return (() => {
    el.appendChild(Title({ title }));
    el.appendChild(Stadium({ tournament }));
    return el;
  })();
};

export default IdealTypePage;
