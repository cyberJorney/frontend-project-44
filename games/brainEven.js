import * as readlineSync from 'readline-sync';
import {
  greetings,
  getRandomIntInclusive,
  congratulation,
  userName,
  rangeStartNumber,
  rangeFinishNumber,
} from '../src/index.js';

const brainEven = () => {
  greetings();

  console.log(`${'Answer "yes" if the number is even, otherwise answer "no".'}`);

  for (let i = 3; i > 0; i -= 1) {
    const randomNumber = getRandomIntInclusive(rangeStartNumber, rangeFinishNumber);

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

export default brainEven;
