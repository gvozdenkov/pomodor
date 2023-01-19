import './styles/index.scss';

const button = document.querySelector('.button');
const pasteContainers = document.querySelectorAll('.paste-container');

const handlePaste = () => {
  pasteContainers.forEach((container, i) => {
    container.textContent = `${i + 1}. generated from JS!`;
  });
};

button.addEventListener('click', handlePaste);
