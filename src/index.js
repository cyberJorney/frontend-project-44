import * as readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-mutable-exports
let userName;

const rangeStartNumber = 1;
const rangeFinishNumber = 100;
const rangeStartNumberOfProgression = 1;
const rangeFinishNumberOfProgression = 15;

// функция - приветствие

const greetings = () => {
  console.log('Welcome to the Brain Games!');

  userName = readlineSync.question('May I have your name? ');

  console.log(`${'Hello, '}${userName}${'!'}`);
};

const congratulation = () => {
  console.log(`${'Congratulations, '}${userName}${'!'}`);
};

// функция определения наибольшего общего делителя (НОД)

const nod = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return nod(m, k);
  }
  return n;
};

// функция получения рандомного числа из диапазона

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// функция формирования массива с арифметической прогрессией

let progressionMember = getRandomIntInclusive(1, 30);

const progression = () => {
  const arrProgression = [];
  // eslint-disable-next-line max-len
  const progressionStep = getRandomIntInclusive(rangeStartNumberOfProgression, rangeFinishNumberOfProgression);
  for (let i = 0; i < 10; i += 1) {
    progressionMember += progressionStep;
    arrProgression.push(progressionMember);
  }
  return arrProgression;
};

// Функция проверки не простое ли наше рандомное число?

const checkIfNumberIsPrime = (number) => {
  if (number < 2) {
    return 'no';
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export {
  greetings,
  getRandomIntInclusive,
  congratulation,
  userName,
  nod,
  progression,
  checkIfNumberIsPrime,
  rangeStartNumber,
  rangeFinishNumber,
};
