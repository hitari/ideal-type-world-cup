import App from '../App';
// 초기 선언된 root
let root;
let component;
// 초기렌더 함수
const render = (t, v) => {
  let el;

  if (typeof v === 'string') {
    root = document.getElementById(v);
  } else if (v.nodeType === Node.ELEMENT_NODE) {
    root = v;
  } else {
    throw new TypeError("It's not a String or Element Type");
  }

  // 함수면 실행 결과값을 리턴 후 el에 넣어준다
  if (typeof t === 'function') {
    el = t()();
    // Node Element면 el 바로 넣어준다
  } else if (t.nodeType === Node.ELEMENT_NODE) {
    el = t;
  } else {
    throw new TypeError("It's not a String or Element Type");
  }

  component = t;
  root.innerHTML = '';
  root.appendChild(el);
};

// 업데이터 렌더 함수
const update = () => {
  render(component, root);
};

export default { render, update };
