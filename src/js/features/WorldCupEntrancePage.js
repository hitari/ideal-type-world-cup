import { useDispatch, useSelector } from 'hook';
import { createEl } from '@helper/domHelper';
import idealTypeMock from '@/mock/idealTypeMock';
import Title from '../components/title/Title';
import Home from '../components/home/Home';
import { shuffleArray } from '../helper/filterHelper';

const WorldCupEntrancePage = () => {
  const { title, status } = useSelector((state) => state);
  const dispatch = useDispatch();
  const el = createEl('article', { className: 'ideal-wrap' });
  const handleStartClick = (event, select) => {
    const round = select.value;
    const title = `이상형 월드컵 ${round}강`;
    const tournament = shuffleArray(idealTypeMock).slice(0, round);
    dispatch('startWorldCup', { round, tournament, title });
  };

  el.appendChild(Title({ title }));
  el.appendChild(Home({ handleStartClick }));

  return el;
};

export default WorldCupEntrancePage;
