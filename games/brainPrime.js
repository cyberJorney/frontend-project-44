import * as readlineSync from 'readline-sync';
import {
  greetings,
  congratulation,
  userName,
  getRandomIntInclusive,
  checkIfNumberIsPrime,
  rangeStartNumber,
  rangeFinishNumber,
} from '../src/index.js';

const brainPrime = () => {
  greetings();
  console.log(`${'Answer "yes" if given number is prime. Otherwise answer "no".'}`);

  for (let i = 3; i > 0; i -= 1) {
    const randomNumber = getRandomIntInclusive(rangeStartNumber, rangeFinishNumber);

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

export default brainPrime;
