const player1Image = document.getElementById("dice1");
const player2Image = document.getElementById("dice2");
const resultText = document.getElementById("result");
const rollButton = document.getElementById("rollButton");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImages(roll1, roll2) {
    player1Image.src = `./images/dice${roll1}.png`;
    player2Image.src = `./images/dice${roll2}.png`;
}

function determineWinner(roll1, roll2) {
    if (roll1 > roll2) {
        return "Player 1";
    } else if (roll2 > roll1) {
        return "Player 2";
    } else {
        return "It's a tie!";
    }
}

function playGame() {
    const roll1 = rollDice();
    const roll2 = rollDice();

    updateDiceImages(roll1, roll2);

    const winner = determineWinner(roll1, roll2);

    if (winner === "It's a tie!") {
        resultText.textContent = "The result is: " + winner;
    } else {
        resultText.textContent = "The winner is: " + winner;
    }
}


playGame();


rollButton.addEventListener("click", playGame);
