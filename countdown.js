// script.js

let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function appendCharacter(char) {
    currentInput += char;
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
    } catch {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}
