import { useDispatch, useSelector } from 'hook';
import { createEl } from '@helper/domHelper';
import Title from '../components/title/Title';
import Stadium from '../components/stadium/Stadium';

const IdealTypePage = () => {
  const dispatch = useDispatch();
  const { title, round, tournament, current } = useSelector((state) => state);
  const el = createEl('article', { className: 'ideal-wrap' });
  const items = tournament.slice(current, current + 2);

  const handleIdleTypeClick = (event, key, item) => {
    console.log('handleIdleTypeClick', event, key, item);

    if (round === 2) {
      console.log('결승전');
      dispatch('finalRoundIdleType', { key });
    } else if (key >= tournament.length - 2) {
      console.log('마지막 클릭');
      dispatch('endOfRoundChoiceIdleType', { key });
    } else {
      dispatch('choiceIdleType', { key });
    }
  };

  el.appendChild(Title({ title }));
  el.appendChild(Stadium({ items, current, handleIdleTypeClick }));

  return el;
};

export default IdealTypePage;
