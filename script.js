const person = [
  {
    name: 'Tanya Sinclair',
    text: ` I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. `,
    position: `UX Engineer`,
    photo: './assets/img/image-tanya.jpg',
  },
  {
    name: `John Tarkpor`,
    text: ` “ If you want to lay the best foundation possible I’d recommend 
    taking this course. The depth the instructors go into is incredible. 
    I now feel so confident about starting up as a professional developer. ” `,
    position: `Junior Front-end Developer`,
    photo: './assets/img/image-john.jpg',
  },
];

const nextButton = document.querySelector(`#nextButton`);
const prevButton = document.querySelector(`#prevButton`);
const boxPhoto = document.querySelector('#photo_person');
let personArrNumber = 0;

const addPerson = (personNr) => {
  const { name, text, position, photo } = person[personNr];

  const boxText = document.querySelector('#desc_text');
  const boxPosition = document.querySelector('#desc_position');
  const boxName = document.querySelector('#desc_name');

  boxText.textContent = text;
  boxName.textContent = name;
  boxPosition.textContent = position;
  boxPhoto.setAttribute('src', `${photo}`);
  boxPhoto.setAttribute('alt', `${name}`);
};

const btnDisabled = (perArrNum, perArrLeng) => {
  if (perArrNum + 1 === perArrLeng) {
    nextButton.setAttribute('disabled', 'disabled');
    nextButton.classList.add('disabled');
  } else {
    nextButton.removeAttribute('disabled', 'disabled');
    nextButton.classList.remove('disabled');
  }

  if (perArrNum - 1 < 0) {
    prevButton.setAttribute('disabled', 'disabled');
    prevButton.classList.add('disabled');
  } else {
    prevButton.removeAttribute('disabled', 'disabled');
    prevButton.classList.remove('disabled');
  }
};

const changePerson = (event) => {
  const personArrLength = person.length;

  if (personArrNumber < personArrLength && event === 'next') {
    personArrNumber = personArrNumber + 1;
    addPerson(personArrNumber);
  }
  if (personArrNumber < personArrLength && event === 'prev') {
    personArrNumber = personArrNumber - 1;
    addPerson(personArrNumber);
  }
  btnDisabled(personArrNumber, personArrLength);
};

const init = () => {
  addPerson(0);
  changePerson();
};

nextButton.addEventListener('click', () => changePerson('next'));
prevButton.addEventListener('click', () => changePerson('prev'));
