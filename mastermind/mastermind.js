var prompt = require('prompt');


const colors = ['red', 'blue', 'white', 'black', 'green', 'yellow'];
let answer = [];
let numberOfGuesses = 0;


function generateSecretCode() {
    let position = Math.floor(Math.random() * 6);
    let color = colors[position];
    if (answer.includes(color) === false)  {
        answer.push(color);          
    };

    if (answer.length < 4) {
        generateSecretCode();
    } else {
        console.log('\nThe secret code has been generated!\n');
        console.log('\nYou have ten tries to guess the 4 colors in the correct order.\n');
        console.log('Color options are red, blue, white, black, green, and yellow. Colors are not repeated.\n');
    };
};

generateSecretCode();

//console.log('cheat: ' + answer);

prompt.start();

function playTheGame() {
    numberOfGuesses += 1;
    let guess;
    prompt.get('guess', function(error, result) {
        //convert guess into array
        guess = result.guess.split(' ');
        if(guess.length < 4) {
            console.log('You must guess 4 colors.');
            numberOfGuesses -= 1;
            playTheGame();
            return;
        };

        //compare arrays
        let color = 0;
        let position = 0;
        for (let i = 0; i < answer.length; i++) {
            if (guess[i] == answer[i]) {
                position += 1
            };
        };
        
        for (let j = 0; j < guess.length; j++) {
            if (answer.includes(guess[j])) {
                color += 1
            };
        };
        //responses to player
        if (position === 4) {
            console.log(`\n********\nYOU WIN!\n********\n`)
        } else if (numberOfGuesses === 10) {
            console.log('\nThat was your 10th guess. Game over. You lose.\n');
            return;
        } else {
            console.log(`\nYou have ${color} correct colors and ${position} in the correct position. You have ${10 - numberOfGuesses} more chances.\n`);
            playTheGame();
        };
    });
};

playTheGame();
