const shuffleFilter = () => Math.random() - Math.random();
const shuffleArray = (arr) => [...arr].sort(shuffleFilter);

export { shuffleFilter, shuffleArray };
