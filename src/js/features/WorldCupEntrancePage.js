import { useDispatch, useSelector } from 'hook';
import { createEl } from '@helper/domHelper';

const WorldCupEntrancePage = () => {
  const { status } = useSelector((state) => state);
  const el = createEl('article', { className: 'ideal-wrap' });
  el.textContent = '시작페이지';

  return el;
};

export default WorldCupEntrancePage;
