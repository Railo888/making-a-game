'use strict'

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function play() {
    const playerChoice = await getPlayerChoice();
    const cpuChoice = getCpuChoice();
    const finalResult = getResult(playerChoice, cpuChoice);
    displayScore(getResult);
    displayFResult(finalResult);
}

// function getPlayerChoice() {
//     return new Promise((resolve) => {
//         readline.question(
//             'Choose your hand (Rock, Paper, or Scissors): ',
//             (hand) => {
//                 readline.close();
//                 resolve(hand.trim());
//             }
//         );
//     });
// }

const result = document.createElement('div');
const runningScore = document.querySelector('div');
runningScore.textContent = 'Player: 0 - Computer: 0'

function getPlayerChoice() {
    document.querySelector("#btn1");
    document.querySelector("#btn2");
    document.querySelector("#btn3");

    btn1.addEventListener('click', () => {
        return (playerChoice('Rock'));
    });
    btn2.addEventListener('click', () => {
        return (playerChoice('Scissors'));
    });
    btn3.addEventListener('click', () => {
        return (playerChoice('Paper'));
    });
};


function getCpuChoice() {
    // TODO: implement
    let cpuChoice = ['Rock', 'Scissors', 'Paper'];
    let randomHand = Math.floor(Math.random() * 3);
    return cpuChoice[randomHand];
}

function getResult(playerChoice, cpuChoice) {
    // TODO: implement
    if (playerChoice === cpuChoice) {
        result.textContent = 'Tie';
        return 'Tie';
    } else if (
        playerChoice === 'Rock' && cpuChoice === 'Scissors'
        || playerChoice === 'Scissors' && cpuChoice === 'Paper'
        || playerChoice === 'Paper' && cpuChoice === 'Rock') {
        result.textContent = 'You win'
        return 'You win';
    } else {
        result.textContent = 'You lose'
        return 'You lose';
    }

}

function displayScore(getResult) {
    runningScore.textContent = `Player: ${playerScore} - Computer: ${cpuScore}`
    const playerScore = 0;
    const cpuScore = 0;
    if (getResult === 'You win') {
        playerScore++;
    } else if (getResult === 'You lose') {
        cpuScore++;
    }

}

displayScore();

// function loopPlay () {
//     for (let i = 0; i = 5; i++) {
//         play();
//     }
// }
// loopPlay();


function displayFResult(finalResult) {
    // TODO: implement
    if (playerScore === 5) {
        result.textContent = 'Player wins the game!'
    } else if (cpuScore === 5) {
        result.textContent = 'Cpu wins the game!'
    }
    finalResult;
}


play();

// 2-4 ランニングスコアを表示し、1人のプレイヤーが 
// 5ポイントに達した時点でゲームの勝者を発表します。がわからない