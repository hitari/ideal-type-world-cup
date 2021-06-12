import { useDispatch, useSelector } from 'hook';
import IdealTypePage from './IdealTypePage';
import WorldCupPodiumPage from './WorldCupPodiumPage';
import WorldCupEntrancePage from './WorldCupEntrancePage';

const mainPage = () => {
  const { status } = useSelector((state) => state);
  if (status === 'ready') return WorldCupEntrancePage();
  if (status === 'end') return WorldCupPodiumPage();
  return IdealTypePage();
};

export default mainPage;
