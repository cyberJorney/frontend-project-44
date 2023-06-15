import * as readlineSync from 'readline-sync';
import {
  greetings,
  getRandomIntInclusive,
  congratulation,
  userName,
  nod,
  rangeStartNumber,
  rangeFinishNumber,
} from '../src/index.js';

const brainGCD = () => {
  greetings();

  console.log(`${'Find the greatest common divisor of given numbers.'}`);

  for (let i = 3; i > 0; i -= 1) {
    const firstNumber = getRandomIntInclusive(rangeStartNumber, rangeFinishNumber);
    const secondNumber = getRandomIntInclusive(rangeStartNumber, rangeFinishNumber);

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

export default brainGCD;
