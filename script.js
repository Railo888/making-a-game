'use strict'

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function play() {
    const playerChoice = await getPlayerChoice();
    const cpuChoice = getCpuChoice();

    const finalResult = getResult(playerChoice, cpuChoice);
    displayResult(finalResult);
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


}

function getCpuChoice() {
    // TODO: implement
    let cpuChoice = ['Rock', 'Scissors', 'Paper'];
    let randomHand = Math.floor(Math.random() * 3);
    return cpuChoice[randomHand];
}

function getResult(playerChoice, cpuChoice) {
    // TODO: implement
    if (playerChoice === cpuChoice) {
        return 'Tie';
    } else if (
        playerChoice === 'Rock' && cpuChoice === 'Scissors'
        || playerChoice === 'Scissors' && cpuChoice === 'Paper'
        || playerChoice === 'Paper' && cpuChoice === 'Rock') {
        return 'You win'
    } else {
        return 'You lose'
    }
}

function displayResult(finalResult) {
    // TODO: implement
    return finalResult;
}

// play();

// const loopPlay = function () {
//     for (let i = 0; i = 5; i++) {
//         play();
//     }
// }

// loopPlay();

// 2-4 ランニングスコアを表示し、1人のプレイヤーが 
// 5ポイントに達した時点でゲームの勝者を発表します。がわからない

