const renderDOM = {
  render: (el, id) => {
    const root = document.getElementById(id);
    root.appendChild(el);
  },
};

const div = document.createElement('div');
div.textContent = 'Hello World!!!';

renderDOM.render(div, 'root');
