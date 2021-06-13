import { useSelector } from 'hook';
import { createEl } from '@helper/domHelper';
import Title from '../components/title/Title';
import TournamentTree from '../components/tournamentTree/TournamentTree';

const worldCupPodiumPage = () => {
  const { title, tournament } = useSelector((state) => state);
  const el = createEl('article', { className: 'ideal-wrap' });
  const anchor = createEl('a', { href: '#', className: 'ideal-anchor', textContent: '<처음으로>' });
  const handleMoveToHomeClick = (event) => {
    location.reload();
  };
  anchor.addEventListener('click', handleMoveToHomeClick);

  el.appendChild(Title({ title }));
  el.appendChild(TournamentTree({ tournament }));
  el.appendChild(anchor);

  return el;
};

export default worldCupPodiumPage;
