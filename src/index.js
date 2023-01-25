import './styles/index.scss';

const button = document.querySelector('.button');
const pasteContainers = document.querySelectorAll('.paste-container');

const handlePaste = () => {
  pasteContainers.forEach((container, i) => {
    container.textContent = `${i + 1}. generated from JS!`;
  });
};

button.addEventListener('click', handlePaste);

// =======================

const person = {
  name: 'Yoda',
  designation: 'Jedi Master ',
};

function trainJedi(jediWarrion) {
  if (jediWarrion.name === 'Yoda') {
    console.log('No need! already trained');
  }
  console.log(`Training ${jediWarrion.name} complete`);
}

trainJedi(person);
trainJedi({ name: 'Adeel', designation: 'padawan' });
