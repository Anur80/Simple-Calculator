let displayValue = "";

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === "") return;
    displayValue += ` ${operator} `;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue.replace("×", "*").replace("÷", "/"));
        updateDisplay();
    } catch {
        displayValue = "Error";
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = displayValue || "0";
}