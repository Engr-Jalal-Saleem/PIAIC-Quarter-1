import inquirer from "inquirer";

type AnsType = {
  userGuess: number;
};

const main = async () => {
  let playAgain = true;

  while (playAgain) {
    const generateNumber = Math.floor(Math.random() * 10) + 1; // Generating a random number between 1 to 10

    const answers: AnsType = await inquirer.prompt([
      {
        type: 'number',
        name: 'userGuess',
        message: 'Guess a number between 1 to 10:'
      }
    ]);

    const { userGuess } = answers;
    console.log(`Your guess: ${userGuess}, Correct answer: ${generateNumber}`);

    if (userGuess === generateNumber) {
      console.log("🎉 Congratulations! You guessed it right. You win! 🎉");
    } else {
      console.log("❌ Oops! Your guess is incorrect. Try again! ❌");
    }

    const { playAgainAnswer } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'playAgainAnswer',
        message: 'Do you want to play again?',
        default: true
      }
    ]);

    playAgain = playAgainAnswer;
  }

  console.log("Thanks for playing. Goodbye!");
};

main();
