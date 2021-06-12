// element 생성
const createEl = (name, props) => {
  const el = document.createElement(name);
  const isProperty = (key) => key !== 'children';
  Object.keys(props)
    .filter(isProperty)
    .forEach((name) => {
      el[name] = props[name];
    });

  return el;
};

export { createEl };
