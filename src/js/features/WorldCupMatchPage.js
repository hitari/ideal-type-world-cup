import { useDispatch, useSelector } from 'hook';
import { createEl } from '@helper/domHelper';
import { shuffleArray } from '../helper/filterHelper';
import { shallowCopy } from '../helper/objectHelper';
import { pipe } from '../helper/functionHelper';
import Title from '../components/title/Title';
import Stadium from '../components/stadium/Stadium';

const WorldCupMatchPage = () => {
  const dispatch = useDispatch();
  const { title, currentRound, round, tournament, current, winners } = useSelector((state) => state);
  const el = createEl('article', { className: 'ideal-wrap' });
  const items = tournament.slice(current, current + 2);
  const backButton = createEl('button', { className: 'back-button', textContent: '←' });

  const handleIdleTypeClick = (event, key, item) => {
    if (currentRound === 2) {
      dispatch('finalRoundIdleType', { key, title: `이상형 월드컵 시상식` });
    } else if (key >= tournament.length - 2) {
      const nextIdleTypes = pipe(
        (ideleTypes) => shuffleArray(ideleTypes),
        (ideleTypes) => shallowCopy(ideleTypes),
        (ideleTypes) =>
          ideleTypes.map((idele) => {
            idele.isWinner = false;
            return idele;
          }),
        (ideleTypes) => [...tournament, ...ideleTypes]
      )([...winners, tournament[key]]);

      dispatch('endOfRoundChoiceIdleType', {
        key,
        tournament: nextIdleTypes,
        title: `이상형 월드컵 ${currentRound / 2}강`,
      });
    } else {
      dispatch('choiceIdleType', { key });
    }
  };

  const handleHistoryBackClick = (event) => {
    // 현재 위치가 0이면 뒤로 갈수 없음.
    if (current === 0) return;
    dispatch('historyBack', {});
  };

  backButton.addEventListener('click', handleHistoryBackClick);

  el.appendChild(backButton);
  el.appendChild(Title({ title }));
  el.appendChild(Stadium({ items, current, handleIdleTypeClick }));

  return el;
};

export default WorldCupMatchPage;
