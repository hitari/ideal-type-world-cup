import { useDispatch, useSelector } from 'hook';
import { createEl } from '@helper/domHelper';

const worldCupPodiumPage = () => {
  const { status } = useSelector((state) => state);
  const el = createEl('article', { className: 'ideal-wrap' });
  el.textContent = '시상식';

  return el;
};

export default worldCupPodiumPage;
