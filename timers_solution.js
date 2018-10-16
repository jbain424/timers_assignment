const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question(`Welcome to rock, paper, scissors. Please type 'rock, 'paper', or 'scissors' to make a choice.`, (res) => {
  console.log(`you replied: ${res}`)

let compChoice;
if (Math.random() < 0.33) {
    compChoice = 'rock';
  } else if (Math.random()< 0.66) {
    compChoice = 'paper';
  } else {
    compChoice = 'scissors';
};

// setTimeout(() => {
//   console.log(`You chose ${res}. Hmm...`)
// }, 2000)
// clearTimeout();

console.log("the computer choice is " + compChoice);

if (res === compChoice) {
  console.log(" it's a tie!");
} else if (res === "paper") {
    if (compChoice === "rock") {
    console.log("We win!");
  } else {
    console.log("The computer win");
  }
} else if (res === "rock") {
  if (compChoice === "scissors") {
    console.log("We win!");
  } else {
    console.log("The computer win");
  }
} else if (res === "scissors") {
  if (compChoice === "paper") {
    console.log("We win!");
  } else {
    console.log("The computer win");
  }
}
});
