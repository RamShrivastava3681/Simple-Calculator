// Get the display element and initialize memory variable
let display = document.getElementById('display');
let memory = 0;

// Function to append clicked button value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display content
function clearDisplay() {
    display.value = '';
}

// Function to evaluate and display the result of the current expression
function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluate expression
    } catch (error) {
        display.value = 'Error'; // Display error message for invalid expressions
    }
}

// Function to calculate square root of current value
function calculateSquareRoot() {
    display.value = Math.sqrt(parseFloat(display.value));
}

// Function to calculate percentage of current value
function calculatePercentage() {
    display.value = parseFloat(display.value) / 100;
}

// Function to add current display value to memory
function memoryAdd() {
    memory += parseFloat(display.value) || 0;
}

// Function to subtract current display value from memory
function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
}

// Function to recall value from memory
function memoryRecall() {
    display.value = memory;
}

// Function to clear the memory value
function memoryClear() {
    memory = 0;
}
