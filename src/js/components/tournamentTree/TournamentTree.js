import { createEl } from '@helper/domHelper';
import { groupFilter } from '@helper/filterHelper';
import { pipe } from '@helper/functionHelper';
import TreeGroup from './TreeGroup';

const TournamentTree = ({ tournament }) => {
  const el = createEl('section', { className: 'ideal-tree' });

  let round = (tournament.length + 1) / 2;
  const tournamentTree = [...tournament];

  while (round >= 1) {
    const treeEl = pipe(
      (tournamentTree) => tournamentTree.splice(0, round),
      (sliceTree) => groupFilter(sliceTree, 2),
      (group) => TreeGroup({ group })
    );
    el.prepend(treeEl(tournamentTree));
    round = round / 2;
  }

  return el;
};

export default TournamentTree;
