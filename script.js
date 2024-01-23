'use strict'

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function play() {
    const playerChoice = await getPlayerChoice();
    const cpuChoice = getCpuChoice();

    const result = getResult(playerChoice, cpuChoice);
    displayResult(result);
}

function getPlayerChoice() {
    return new Promise((resolve) => {
        readline.question(
            'Choose your hand (Rock, Paper, or Scissors): ',
            (hand) => {
                readline.close();
                resolve(hand.trim());
            }
        );
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

function displayResult(result) {
    // TODO: implement
    return result;
}

// play();

const loopPlay = function () {
    for (let i = 0; i = 5; i++) {
        play();
    }
}

loopPlay();

// まず、playerがR,S,Pのどれかを入力する。
// 次に、PCUが受け取って、ランダムにR,S,Pを出す。
// それから、プレイヤーとCPUの手が同じなら'Tie'。プレイヤーが勝つと'YOU win'を出力。CPUが勝つと'you lose'を出力。
// この流れを、5回繰り返して多く勝ったほうが勝ち。