const readLine = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors']

function prompt(message) {
    console.log(`=> ${message}`);
}

while(true) {
prompt(`Choose one: ${VALID_CHOICES.join(', ')}.`);
let choice = readLine.question();

while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice! Please try again.")
    choice = readLine.question();
}

let randomIndex = Math.floor((Math.random()) * (VALID_CHOICES.length));
let computerChoice = VALID_CHOICES[randomIndex];
prompt(`You chose ${choice}, the computer chose ${computerChoice}.`);

if ((choice === 'rock' && computerChoice === 'scissors') ||
(choice === 'paper' && computerChoice === 'rock') ||
(choice === 'scissors' && computerChoice === 'paper')) {
    prompt(`You Win!`)
} else if ((choice === 'rock' && computerChoice === 'paper') || 
(choice === 'paper' && computerChoice === 'scissors') || 
(choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer Wins!');
} else {
    prompt("It's a tie.");
}
prompt("Do you want to play again? Please type y/n");
let answer = readLine.question().toLowerCase();
while(answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please type either 'y' or 'n' ")
    answer = readLine.question().toLowerCase();
} 
if (answer[0] !== 'y') break;
}
