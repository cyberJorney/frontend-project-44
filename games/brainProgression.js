import * as readlineSync from 'readline-sync';
import {
  greetings,
  congratulation,
  userName,
  progression,
} from '../src/index.js';

const brainProgression = () => {
  greetings();

  console.log(`${'What number is missing in the progression?'}`);

  for (let i = 3; i > 0; i -= 1) {
    const arr = progression();
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

export default brainProgression;
