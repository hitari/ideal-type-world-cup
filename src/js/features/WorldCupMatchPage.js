import { useDispatch, useSelector } from 'hook';
import { createEl } from '@helper/domHelper';
import Title from '../components/title/Title';
import Stadium from '../components/stadium/Stadium';
import History from '../components/history/History';

const WorldCupMatchPage = () => {
  const dispatch = useDispatch();
  const { title, round, tournament, current } = useSelector((state) => state);
  const el = createEl('article', { className: 'ideal-wrap' });
  const items = tournament.slice(current, current + 2);

  const handleIdleTypeClick = (event, key, item) => {
    if (round === 2) {
      console.log('결승전');
      dispatch('finalRoundIdleType', { key, title: `이상형 월드컵 시상식` });
    } else if (key >= tournament.length - 2) {
      console.log('마지막 클릭');
      dispatch('endOfRoundChoiceIdleType', { key, title: `이상형 월드컵 ${round / 2}강` });
    } else {
      dispatch('choiceIdleType', { key });
    }
  };
  const btn = createEl('button', { className: 'tbtn' });

  const handleHistoryBackClick = (event) => {
    console.log('handleHistoryBackClick');
    // 현재 위치가 0이면 시작
    if (current === 0) return;
  };

  btn.addEventListener('click', handleHistoryBackClick);

  el.appendChild(btn);
  el.appendChild(Title({ title }));
  el.appendChild(Stadium({ items, current, handleIdleTypeClick }));
  el.appendChild(History({ round, tournament, current }));

  return el;
};

export default WorldCupMatchPage;
