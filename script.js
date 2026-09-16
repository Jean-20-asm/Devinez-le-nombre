let secretNumber;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

// Start a new game
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    attemptsDisplay.textContent = attempts;
    message.textContent = "Bonne chance! 🍀";
    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;

    guessInput.focus();
}

// Check the player's guess
function checkGuess() {
    const guess = Number(guessInput.value);

    if (guess < 1 || guess > 100 || guessInput.value === "") {
        message.textContent = "⚠️ Entrez un nombre entre 1 et 100.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (guess === secretNumber) {
        message.textContent =
            `🎉 Correct ! Le nombre était de ${secretNumber}!`;

        guessInput.disabled = true;
        guessButton.disabled = true;
    } 
    else if (guess < secretNumber) {
        message.textContent = "⬆️ Trop bas! Essayez un plus grand nombre.";
    } 
    else {
        message.textContent = "⬇️ Trop haut! Essayez un nombre plus petit.";
    }

    guessInput.value = "";
    guessInput.focus();
}

// Button events
guessButton.addEventListener("click", checkGuess);

restartButton.addEventListener("click", startGame);

// Press Enter to guess
guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

// Start the first game
startGame();