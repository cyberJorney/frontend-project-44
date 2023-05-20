import * as readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');

const greetings = () => {
  console.log('Welcome to the Brain Games!');

  userName;

  console.log(`${'Hello, '}${userName}${'!'}`);
};

const congratulation = () => {
  console.log(`${'Congratulations, '}${userName}${'!'}`);
};

const brainCalc = () => {
  greetings();

  console.log(`${'What is the result of the expression?'}`);

  for (let i = 3; i > 0; i -= 1) {
    const arr = ['+', '-', '*'];

    const mathSign = Math.floor(Math.random() * arr.length);

    const randomNumberOne = Math.floor(Math.random() * 101);
    const randomNumberTwo = Math.floor(Math.random() * 101);

    console.log(`${'Question: '}${randomNumberOne}${' '}${arr[mathSign]}${' '}${randomNumberTwo}`);

    const tryToGuess = Number(readlineSync.question('Your answer: '));

    const rightAnswer = eval(randomNumberOne + arr[mathSign] + randomNumberTwo);

    if (rightAnswer === tryToGuess) {
      console.log('Correct!');
    } else {
      return console.log((`'${tryToGuess}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`));
    }
  }
  return congratulation();
};

const brainEven = () => {
  greetings();

  console.log(`${'Answer "yes" if the number is even, otherwise answer "no".'}`);

  for (let i = 3; i > 0; i -= 1) {
    const randomNumber = Math.floor(Math.random() * 101);

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
export { brainEven, brainCalc };
