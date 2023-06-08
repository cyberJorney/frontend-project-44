import * as readlineSync from 'readline-sync';

let userName;

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
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// функция формирования массива с арифметической прогрессией

let progressionMember = getRandomIntInclusive(1, 30);
const Progression = () => {
  const arrProgression = [];
  const progressionStep = getRandomIntInclusive(1, 15);
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
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// Игра - "Определи четность"

const brainEven = () => {
  greetings();

  console.log(`${'Answer "yes" if the number is even, otherwise answer "no".'}`);

  for (let i = 3; i > 0; i -= 1) {
    const randomNumber = getRandomIntInclusive(1, 100);

    console.log(`${'Question: '}${randomNumber}`);
    const tryToGuess = readlineSync.question('Your answer: ');

    const rightAnswer = () => (randomNumber % 2 === 0 ? 'yes' : 'no');

    if (rightAnswer(randomNumber) === tryToGuess) {
      console.log('Correct!');
    } else {
      return console.log((`'${tryToGuess}' is wrong answer ;(. Correct answer was '${rightAnswer(randomNumber)}'.\nLet's try again, ${userName}!`));
    }
  }
  return congratulation();
};

// Игра - "Поработай калькулятором"

const brainCalc = () => {
  greetings();

  console.log(`${'What is the result of the expression?'}`);

  for (let i = 3; i > 0; i -= 1) {
    // получение рандомного знака из массива
    const arr = ['+', '-', '*'];

    const randomMathSign = Math.floor(Math.random() * arr.length);

    const firstNumber = getRandomIntInclusive(1, 100);
    const secondNumber = getRandomIntInclusive(1, 100);

    console.log(`${'Question: '}${firstNumber}${' '}${arr[randomMathSign]}${' '}${secondNumber}`);

    const tryToGuess = Number(readlineSync.question('Your answer: '));

    const rightAnswer = eval(`${firstNumber}${arr[randomMathSign]}${secondNumber}`);

    if (rightAnswer === tryToGuess) {
      console.log('Correct!');
    } else {
      return console.log((`'${tryToGuess}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`));
    }
  }
  return congratulation();
};

// Игра - "Наибольший общий делитель"

const brainGSD = () => {
  greetings();

  console.log(`${'Find the greatest common divisor of given numbers.'}`);

  for (let i = 3; i > 0; i -= 1) {
    const firstNumber = getRandomIntInclusive(1, 100);
    const secondNumber = getRandomIntInclusive(1, 100);

    console.log(`${'Question: '}${firstNumber}${' '}${secondNumber}`);

    const tryToGuess = Number(readlineSync.question('Your answer: '));

    const rightAnswer = nod(firstNumber, secondNumber);

    if (rightAnswer === tryToGuess) {
      console.log('Correct!');
    } else {
      return console.log((`'${tryToGuess}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`));
    }
  }
  return congratulation();
};

// Игра - "Арифметическая прогрессия"

const brainProgression = () => {
  greetings();

  console.log(`${'What number is missing in the progression?'}`);

  for (let i = 3; i > 0; i -= 1) {
    const arr = Progression();
    const randomMemberOfProgression = Math.floor(Math.random() * arr.length);
    const arrWithQuestion = [...arr];
    arrWithQuestion[randomMemberOfProgression] = '..';

    console.log(`${'Question: '}${arrWithQuestion.join(' ')}`);

    const tryToGuess = Number(readlineSync.question('Your answer: '));

    const rightAnswer = arr[randomMemberOfProgression];

    if (rightAnswer === tryToGuess) {
      console.log('Correct!');
    } else {
      return console.log((`'${tryToGuess}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`));
    }
  }
  return congratulation();
};

// Игра - "Простое ли число?"

const brainPrime = () => {
  greetings();

  console.log(`${'Answer "yes" if given number is prime. Otherwise answer "no".'}`);

  for (let i = 3; i > 0; i -= 1) {
    const randomNumber = getRandomIntInclusive(1, 100);

    console.log(`${'Question: '}${randomNumber}`);

    const tryToGuess = readlineSync.question('Your answer: ');

    const rightAnswer = checkIfNumberIsPrime(randomNumber);

    if (rightAnswer === tryToGuess) {
      console.log('Correct!');
    } else {
      return console.log((`'${tryToGuess}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`));
    }
  }
  return congratulation();
};

export {
  brainEven, brainCalc, brainGSD, brainProgression, brainPrime,
};
