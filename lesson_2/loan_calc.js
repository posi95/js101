/* ask user for loan amount, ask for apr, and how
 many years the loan duration is.
for the monthly apr, apr must be divided by 12, and
for loan duration in months, loan duration must
multiply by 12*/

const readLine = require('readline-sync');
function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to your personal loan Calulator, Posi!');
prompt('How much would you like to borrow? Dollar amount please?');
let loanAmount = readLine.question();
while (invalidNumber(loanAmount)) {
  prompt("That doesn't seem like a valid number, please try again.");
  loanAmount = readLine.question();
}
//create function for invalid number input

function invalidNumber(number) {
  return Number.isNaN(Number(number)) || number.trimStart() === '';
}

prompt('How much is the APR? Please give integer amounts, e.g. 10% is 10.');
let percentage  = readLine.question();

while (invalidNumber(percentage)) {
  prompt("That doesn't seem like a valid number, please try again.");
  percentage = readLine.question();
}

prompt('What is the loan duration in years?');
let duration = readLine.question();

while (invalidNumber(duration)) {
  prompt("That doesn't seem like a valid number, please try again.");
  duration = readLine.question();
}
console.log(`So, you requested a loan of $${loanAmount}, 
at an APR of ${percentage}%,\nover the course of ${duration} years.`);

let monthsToPay = Number(duration * 12);
let monthPercent = Number((percentage / 100) / 12).toFixed(2);
let output = (loanAmount * (monthPercent / (1 - (1 + monthPercent)
 ** (-monthsToPay))));
prompt(`Your monthly payment amount is $${output}, 
to be paid over ${monthsToPay} months!`);
