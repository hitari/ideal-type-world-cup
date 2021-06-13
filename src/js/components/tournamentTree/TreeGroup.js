import { createEl } from '@helper/domHelper';
import TreeItem from './TreeItem';

const TreeGroup = ({ group }) => {
  const el = createEl('div', { className: 'ideal-tree-group' });

  group.forEach((items) => {
    el.appendChild(TreeItem({ items }));
  });

  return el;
};

export default TreeGroup;
{
  /* <div class="ideal-tree-group">
  <div class="ideal-tree-winner">
    <div class="img-1"></div>
  </div>
</div>
<div class="ideal-tree-group">
  <div class="ideal-tree-item">
    <div class="ideal-tree-zone">
      <div class="img-1"></div>
    </div>
    <div class="ideal-tree-zone">
      <div class="img-2"></div>
    </div>
  </div>
</div> */
}
