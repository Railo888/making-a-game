'use strict';


function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomAnswer = Math.floor(Math.random() * 3);
    console.log(getComputerChoice);
}

function playRound(playerSection, computerSection) {
    playerSection = playerSection.toLowerCase();

    if (playerSection === computerSection) {
        return 'Tie';
    } else if ((playerSection === 'Rock' && computerSection === 'Scissors')
        || (playerSection === 'Scissors' && computerSection === 'Paper')
        || (playerSection === 'Paper' && computerSection === 'Rock')) {
        return 'You win'
    } else {
        return 'You lose'
    }
}

function loopGame() {
    const gameScore = playRound(playerSection);

    for (let i = 0; i < 5; i++) {
        const result = playRound();
        return 'next round';
    }
}
