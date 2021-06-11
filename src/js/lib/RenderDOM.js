// 렌더 함수
const render = (t, v) => {
  let root;
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
    el = t();
    // Node Element면 el 바로 넣어준다
  } else if (t.nodeType === Node.ELEMENT_NODE) {
    el = t;
  } else {
    throw new TypeError("It's not a String or Element Type");
  }

  root.appendChild(el);
};

export default { render };
