let numA = "";
let onNumA = true;
let numB = "";
let operator = "";
let currentDisplay = document.getElementById("display");
let outerVisual = document.getElementById("outerVisual");
let equationVisual = document.getElementById("equationVisual");
let pictureVisual = document.getElementById("pictureVisual");
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
        equationVisual.innerHTML = numA;
    } else {
        numB += sentNum;
        currentDisplay.innerHTML = numA + operator + numB;
        equationVisual.innerHTML = numA + " " + operator + " " + numB;
    } 
}

function readOper(sentOper) {
    if(operator) {
        currentDisplay.innerHTML = "ERROR";
        equationVisual.innerHTML = "ERROR";
    } else {
        operator = sentOper;
        onNumA = false;
        currentDisplay.innerHTML = numA + operator;
        equationVisual.innerHTML = numA + " " + operator;
        //create circles/dots/numberline
        if(operator === "*") {
        createMultCircles();
        }
        if(operator === "+") {
            createAddLine(numA);
        }
    }
}

function readEnter() {
    let answer = doOperation(parseFloat(numA), parseFloat(numB), operator);
    if(typeof(answer) === "number") {
        if(operator === "*"){
            createMultDots(numB);
        setTimeout(() => {currentDisplay.innerHTML = Number(Math.round(answer + 'e' + 7) + "e-" + 7)}, (500*numA));
        setTimeout(() => {equationVisual.innerHTML = numA + " " + operator + " " + numB + " " + "=" + " " + Number(Math.round(answer + 'e' + 7) + "e-" + 7)}, (500*numA));
        }
        if (operator === "+") {
            fillInNumberLine(numB);
            colorArrows();
            currentDisplay.innerHTML = Number(Math.round(answer + 'e' + 7) + "e-" + 7);
            equationVisual.innerHTML = numA + " " + operator + " " + numB + " " + "=" + " " + Number(Math.round(answer + 'e' + 7) + "e-" + 7);
        }
    } else {
        currentDisplay.innerHTML = "ERROR";
        equationVisual.innerHTML = "ERROR";
        numA = "";
    }  
    //reset values in function and run with setTimeout so dont mess up display
    setTimeout((resetValues), (500*(numA+1)));
    function resetValues() {
        numA= answer;
        onNumA = true;
        numB = "";
        operator = "";
    }
}

function readClear() {
    numA = "";
    numB = "";
    operator = "";
    currentDisplay.innerHTML = "";
    equationVisual.innerHTML = "";
    pictureVisual.innerHTML = "";
    onNumA = true;
}

function readBackspace() {
    if(onNumA === true) {
        numA = numA.slice(0, -1);
        currentDisplay.innerHTML = numA;
        equationVisual.innerHTML = numA;
    } else {
        numB = numB.slice(0, -1);
        currentDisplay.innerHTML = numA + operator + numB;
        equationVisual.innerHTML = numA + " " + operator + " " + numB;
    }
}
    
//function to create circles/dots/numberline
function createMultCircles() {

        for (let i = 1; i <= numA; i++ ) {
        const circleAndCount = document.createElement("div");
        circleAndCount.classList.add("circleAndCount");
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.id = "circle" + i;
        const countDisplay = document.createElement("div");
        countDisplay.classList.add("countDisplay");

        circleAndCount.appendChild(circle);
        circleAndCount.appendChild(countDisplay);
        pictureVisual.appendChild(circleAndCount);
        }
}

function createMultDots(numB) {
    const circles = document.querySelectorAll(".circle");
    const countDisplays = document.querySelectorAll(".countDisplay");

    function appendDotGroup(index) {
        if (index >= circles.length) return; // Stop if we've processed all circles

        const cir = circles[index];
        const dotGroup = document.createElement("div");
        dotGroup.classList.add("dotGroup");

        //creates numB dots in each group
        for (let i = 1; i <= numB; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dotGroup.appendChild(dot);
        }
        //puts group of numB dots into circle
        cir.appendChild(dotGroup);

        //display skip counting
        const countDisplay = countDisplays[index];
        countDisplay.innerHTML= numB * (index + 1);


        // Call the next group after a delay
        setTimeout(() => appendDotGroup(index + 1), 500);
    }

    // Start the recursive function with the first circle
    appendDotGroup(0);
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
