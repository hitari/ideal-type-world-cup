const shuffleFilter = () => Math.random() - Math.random();
const shuffleArray = (arr) => [...arr].sort(shuffleFilter);
const groupFilter = (arr, num) =>
  arr.reduce((acc, cur, index) => {
    if ((index + 1) % num !== 0) {
      acc.push([cur]);
    } else {
      const item = acc.pop();
      item.push(cur);
      acc.push(item);
    }
    return acc;
  }, []);

export { shuffleFilter, shuffleArray, groupFilter };
