let displayResult = document.querySelector(".input");
const boxes = document.querySelectorAll(".box");
let currentNumber;
let prevNumber = "";
let operation = undefined;
let result;
let factorial;
let sqrt;

function appendNumber(number) {
  currentNumber = "";
  currentNumber += number;
  updateDisplay();
}

function pivalue() {
  currentNumber = "3.14";
  updateDisplay();
}

//==> To pass the operator when chosen
function chooseOperation(op) {
  if (currentNumber === "") {
    return;
  } else {
    operation = op;
    prevNumber = currentNumber;
    currentNumber = "";
  }
  updateDisplay();
}

//==> To pass the factorial opertaor when chosen
function choosefactop(op) {
  if (currentNumber === "") {
    return;
  } else {
    operation = op;
    prevNumber = currentNumber;
    currentNumber = op;
  }
  updateDisplay();
}

function operationsqrt(op) {
  let number = prevNumber;
  if (prevNumber === "") {
    return;
  }
  if (number < 0) {
    return "Square root of negative numbers is not real";
  } else {
    operation = op;
    sqrt = Math.sqrt(number);
  }
  return sqrt;
}

//==> To calculate factorial
function chooseOperationfact(op) {
  if (prevNumber === "") {
    console.log("returned");
    return;
  } else {
    operation = op;
    let number = prevNumber;
    let fact = 1;
    for (let i = 1; i <= number; i++) {
      fact = fact * i;
    }
    factorial = fact;
  }
  return factorial;
}

//==> To calculate by clicking on assignment operator
function compute() {
  const prev = parseFloat(prevNumber);
  const current = parseFloat(currentNumber);
  //  if (prev === '' || current === '') {
  //    return;
  //  }
  if (operation === "!") {
    currentNumber = "";
    result = chooseOperationfact(operation);
  } else if (operation === "sqr") {
    currentNumber = "";
    result = operationsqrt(operation);
  } else {
    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      case "%":
        current = 100;
        result = prev / 100;
      default:
        return;
    }
  }
  currentNumber = result;
  operation = undefined;
  prevNumber = "";
  updateDisplay();
}

//==> To clear the display
function clearDisplay() {
  currentNumber = "";
  prevNumber = "";
  operation = undefined;
  updateDisplay();
}
//==> To show inputs and outputs on display
function updateDisplay() {
  displayResult.innerText = currentNumber;
}
