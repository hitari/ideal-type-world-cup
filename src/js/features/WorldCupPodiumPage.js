import { useDispatch, useSelector } from 'hook';
import { createEl } from '@helper/domHelper';
import Title from '../components/title/Title';
import TournamentTree from '../components/tournamentTree/TournamentTree';

const worldCupPodiumPage = () => {
  const { title, tournament } = useSelector((state) => state);
  const el = createEl('article', { className: 'ideal-wrap' });

  el.appendChild(Title({ title }));
  el.appendChild(TournamentTree({ tournament }));

  return el;
};

export default worldCupPodiumPage;
