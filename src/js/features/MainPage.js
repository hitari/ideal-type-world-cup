import { useDispatch, useSelector } from 'hook';
import WorldCupMatchPage from './WorldCupMatchPage';
import WorldCupPodiumPage from './WorldCupPodiumPage';
import WorldCupEntrancePage from './WorldCupEntrancePage';

const MainPage = () => {
  const { status } = useSelector((state) => state);
  if (status === 'ready') return WorldCupEntrancePage();
  if (status === 'end') return WorldCupPodiumPage();
  return WorldCupMatchPage();
};

export default MainPage;
