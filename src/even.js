import * as readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`${'Hello, '}${userName}${'!'}`);

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
  return console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
