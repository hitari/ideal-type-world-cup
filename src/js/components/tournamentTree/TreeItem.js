import { createEl } from '@helper/domHelper';

const TreeItem = ({ items }) => {
  const el = createEl('div', { className: 'ideal-tree-item' });

  const treeItems = items.map((item) => {
    const ideal = createEl('div', {
      className: `ideal-tree-zone ${item.isWinner ? '' : 'loser'} ${items.length === 1 ? 'winner' : ''}`,
    });
    const img = createEl('img', { src: item.url });
    ideal.appendChild(img);
    return ideal;
  });

  treeItems.forEach((treeItem) => {
    el.appendChild(treeItem);
  });

  return el;
};

export default TreeItem;
