import { state } from '@store/store';

const useSelector = (callback) => {
  // callback 함수이면 내부 상태값을 반환하는 로직을 담고있으므로, callback 실행
  if (typeof callback === 'function') return callback(state);
  return state;
};
export default useSelector;
