let storedVal1 = "";
let storedVal2 = "";
let operator = "";
let collectingSecond = false;

const displayNum = document.getElementById('numDisplay');
const buttons = document.querySelectorAll('.num');
const operatorBtn = document.querySelectorAll('.operator');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!collectingSecond) {
            storedVal1 += button.textContent;
            displayNum.textContent = storedVal1;
        } else {
            storedVal2 += button.textContent;
            displayNum.textContent = storedVal2;
        }
    });
});

document.getElementById('zero').addEventListener('click', () => {
    if (!collectingSecond) {
        storedVal1 += "0";
        displayNum.textContent = storedVal1;
    } else {
        storedVal2 += "0";
        displayNum.textContent = storedVal2;
    }
});

document.getElementById('clear').addEventListener('click', () => {
    storedVal1 = "";
    storedVal2 = "";
    operator = "";
    collectingSecond = false;
    displayNum.textContent = "0";
});

operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        collectingSecond = true;
        displayNum.textContent = operator;
    });
});

document.getElementById('equalsTo').addEventListener('click', () => {
    if (storedVal1 === "" || storedVal2 === "" || operator === "") return; 

    const num1 = parseFloat(storedVal1);
    const num2 = parseFloat(storedVal2);

    if (isNaN(num1) || isNaN(num2)) return; 

    const result = operate(num1, operator, num2);

    displayNum.textContent = result;


    storedVal1 = String(result);
    storedVal2 = "";
    operator = "";
    collectingSecond = false;
});

function addition(a,b) {
    let added = a + b;
    return added;
}

function subtraction(a,b) {
    let subtracted = a - b;
    return subtracted;
}

function multiplication(a,b) {
    let multiplied = a * b;
    return multiplied;
}

function division(a,b) {
  let divided = a/b;
  return divided;
}

function modulus(a,b) {
    let remainder = a % b;
    return remainder;
}

function operate(num1,op,num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number") {
        return "Both arguments Must be Numbers!";
    } else if(op === '+'){
        return addition(num1,num2);
    } else if(op === 'x') {
        return multiplication(num1,num2);
    } else if(op === '-') {
        return subtraction(num1,num2);
    } else if(op === "/") {
        return division(num1,num2);
    } else if(op === "%") {
        return modulus(num1,num2);
    }
}