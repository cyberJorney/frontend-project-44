import * as readlineSync from 'readline-sync';
import {
  greetings,
  getRandomIntInclusive,
  congratulation,
  userName,
  rangeStartNumber,
  rangeFinishNumber,
} from '../src/index.js';

const brainCalc = () => {
  greetings();
  console.log(`${'What is the result of the expression?'}`);
  for (let i = 3; i > 0; i -= 1) {
    // получение рандомного знака из массива
    const arr = ['+', '-', '*'];
    const randomMathSign = Math.floor(Math.random() * arr.length);
    const firstNumber = getRandomIntInclusive(rangeStartNumber, rangeFinishNumber);
    const secondNumber = getRandomIntInclusive(rangeStartNumber, rangeFinishNumber);
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

export default brainCalc;
