let numA = "";
let onNumA = true;
let numB = "";
let operator = "";
let currentDisplay = document.getElementById("display");
let dec = document.getElementById("dec");

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if(b == 0) {
        return "uh, no";
    } else {
        return a / b;
    };
};

function doOperation(firstNum, secondNum, operation) {
    if(operation === "+") {
        return add(firstNum, secondNum);
    } else if(operation === "-") {
        return subtract(firstNum, secondNum);
    } else if(operation === "*") {
        return multiply(firstNum, secondNum);
    } else if(operation === "/") {
        return divide(firstNum, secondNum);
    } else {
        return "huh?";
    }
}

function readNum(sentNum) {
    if(onNumA === true) {
        numA += sentNum;
        currentDisplay.innerHTML = numA;
    } else {
        numB += sentNum;
        currentDisplay.innerHTML = numA + operator + numB;
    } 
}

function readOper(sentOper) {
    if(operator) {
        currentDisplay.innerHTML = "ERROR";
    } else {
        operator = sentOper;
        onNumA = false;
        currentDisplay.innerHTML = numA + operator;
    }
}

function readEnter() {
    let answer = doOperation(parseFloat(numA), parseFloat(numB), operator);
    if(typeof(answer) === "number") {
        currentDisplay.innerHTML = Number(Math.round(answer + 'e' + 7) + "e-" + 7);
        numA = answer;
    } else {
        currentDisplay.innerHTML = "ERROR";
        numA = "";
    }    
    onNumA = true;
    numB = "";
    operator = "";
}

function readClear() {
    numA = "";
    numB = "";
    operator = "";
    currentDisplay.innerHTML = "";
    onNumA = true;
}

function readBackspace() {
    if(onNumA === true) {
        numA = numA.slice(0, -1);
        currentDisplay.innerHTML = numA;
    } else {
        numB = numB.slice(0, -1);
        currentDisplay.innerHTML = numA + operator + numB;
    }
}
    
    
    
    
//     else if(sentVal === '.' && onNumA === true) {
//         numA += sentVal;
//         dec.disabled = true;
//         currentDisplay.innerHTML = numA;
//     } else if(sentVal === '.' && onNumA === false) {
//         numB += sentVal;
//         dec.disabled = true;
//         currentDisplay.innerHTML = numA + operator + numB;
//     } else if(sentVal === '+' || sentVal === '-' || sentVal === '*' || sentVal === '/') {
//         operator = sentVal;
//         onNumA = false;
//         dec.disabled = false;
//         currentDisplay.innerHTML = numA + operator;
//     } else if(sentVal === '=') {
//         let answer = doOperation(parseFloat(numA), parseFloat(numB), operator);
//         currentDisplay.innerHTML = Number(Math.round(answer + 'e' + 7) + "e-" + 7);
//         numA = answer;
//         dec.disabled = false;
//     } else if(sentVal === 'b' && onNumA === true) {
//         numA = numA.slice(0, -1);
//         currentDisplay.innerHTML = numA;
//     } else if(sentVal === 'b' && onNumA === false) {
//         numB = numB.slice(0, -1);
//         currentDisplay.innerHTML = numA + operator + numB;
//     } else if(sentVal === 'c') {
//         numA = "";
//         numB = "";
//         operator = "";
//         currentDisplay.innerHTML = "";
//         dec.disabled = false;
//         onNumA = true;
//     }
    
// }
