import { createEl } from '@helper/domHelper';

const template = () => {
  return `
    <section class="ideal-stadium">
      <div class="ideal-zone ideal-left">
        <button>
          <div class="img-1"></div>
        </button>
      </div>
      <div>
        <span>VS</span>
      </div>
      <div class="ideal-zone ideal-right">
        <button>
          <div class="img-2"></div>
        </button>
      </div>
    </section>`;
};

const Stadium = () => {
  const el = createEl('div', { className: 'ideal-stadium' });
  el.innerHTML = template();

  el.addEventListener('click', () => {
    console.log('click');
  });

  return (() => {
    return el;
  })();
};

export default Stadium;
