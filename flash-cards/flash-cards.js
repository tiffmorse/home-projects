var prompt = require('prompt');

let answer;
let operator;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

async function shuffle(numbers) {
    console.log(numbers)
    let currentIndex = numbers.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = mathType.floor(mathType.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = numbers[currentIndex];
      numbers[currentIndex] = numbers[randomIndex];
      numbers[randomIndex] = temporaryValue;
    };

    console.log(numbers)
    return numbers;
  };

console.log('Let\'s practice math!');
console.log('Do you want to add, subtract, multiply, or divide?')

prompt.start();

async function chooseOperator () {
    prompt.get('equationType', function(error, result) {
        // get user response re what kind of math equation
        mathType = result.equationType;
        if(mathType == 'a' || mathType == 'add' || mathType == '+') {
            console.log(mathType)
            operator = '+';
            console.log('You have selected addition facts.');
            console.log(operator)
            return;
        } else if (mathType === 's' || mathType === 'subtract' || mathType == '-') {
            operator = '-';
            console.log('You have selected subtraction facts.');
            return;
        } else if (mathType == 'm' || mathType == 'mutliply' || mathType == '*' || mathType == 'x') {
            operator = '*';
            console.log('You have selected multiplication facts.');
            return;
        } else if (mathType == 'd' || mathType == 'divide' || mathType == '/') {
            operator = '/';
            console.log('You have selected division facts.');
            return;
        };
    });
};

async function generateEquation () {
    await chooseOperator();
}
generateEquation();