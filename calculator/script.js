// Global variables
let firstOperand = "";
let arithmeticOperator = "";
let secondOperand = "";
let operationResult = 0;


// DOM
const operationSection = document.querySelector(".operation-section");
const resultSection = document.querySelector(".result-section");
const digitContainer = document.querySelectorAll(".digit-container > button");
const operatorContainer = document.querySelectorAll(".operator-container > button");
const resultButton = document.querySelector(".result-button");
const clearButton = document.querySelector(".clear-button");

resultSection.textContent = operationResult;
operationSection.textContent = operationResult;

digitContainer.forEach((digit) => {
    digit.addEventListener('click', () => {
        const digitNumber = digit.textContent;
        processDigit(digitNumber);
    })
})

operatorContainer.forEach((operator) => {
    operator.addEventListener('click', () => {
        // User clicked the operator first
        if (!firstOperand) {
            firstOperand = "0";
        }

        // Calculate the previous operation (if any)
        if (firstOperand && secondOperand) {
            firstOperand = roundResult(operate(+firstOperand, arithmeticOperator, +secondOperand));
            secondOperand = "";
        }

        const operatorSelection = operator.textContent;
        arithmeticOperator = operatorSelection;
        updateOperation();
    })
})

resultButton.addEventListener('click', () => {
    if (firstOperand && arithmeticOperator && secondOperand) {
        updateOperation("=");
        updateResult(operate(+firstOperand, arithmeticOperator, +secondOperand));
    }
})

clearButton.addEventListener('click', () => {
    resetOperation();
})

function processDigit(digit) {
    if (!arithmeticOperator) {
        firstOperand += digit;
        updateResult(firstOperand);
    } else {
        secondOperand += digit;
        updateResult(secondOperand);
    }
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
  }

function updateResult(number) {
    resultSection.textContent = roundResult(number);
}

function updateOperation(resultSign) {
    if (!resultSign) {
        resultSign = "";
    }
    operationSection.textContent = `${firstOperand} ${arithmeticOperator} ${secondOperand} ${resultSign}`;
}

function resetOperation() {
    firstOperand = "";
    arithmeticOperator = "";
    secondOperand = "";
    operationResult = 0;
    resultSection.textContent = operationResult;
    operationSection.textContent = operationResult;
}


// Arithmetic Functions
function operate(firstOperand, arithmeticOperator, secondOperand) {
    switch (arithmeticOperator) {
        case "+":
            return add(firstOperand, secondOperand);
        case "-":
            return subtract(firstOperand, secondOperand);
        case "*":
            return multiply(firstOperand, secondOperand);
        case "/":
            return divide(firstOperand, secondOperand);
        default:
            return 0;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    // Dividing any number by zero does not make sense!
    if (b === 0) {
        resetOperation();
        alert("You can't divide any number by zero.")
        return "0";
    }
    
    return a / b;
}
