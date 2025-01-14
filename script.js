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
            createAddLine();
        }
        if(operator === "-") {
            createSubtractionLine();
        }
    }
}

function readEnter() {
    let answer = doOperation(parseFloat(numA), parseFloat(numB), operator);
    if(typeof(answer) === "number") {
        if(operator === "*"){
            createMultDots(numB);
        currentDisplay.innerHTML = Number(Math.round(answer + 'e' + 7) + "e-" + 7);
        equationVisual.innerHTML = numA + " " + operator + " " + numB + " " + "=" + " " + Number(Math.round(answer + 'e' + 7) + "e-" + 7);
        }
        if (operator === "+") {
            fillInNumberLine(numB);
            currentDisplay.innerHTML = Number(Math.round(answer + 'e' + 7) + "e-" + 7);
            equationVisual.innerHTML = numA + " " + operator + " " + numB + " " + "=" + " " + Number(Math.round(answer + 'e' + 7) + "e-" + 7);
        }
        if (operator === "-") {
            fillInSubtractionNumberLine(numB);
            currentDisplay.innerHTML = Number(Math.round(answer + 'e' + 7) + "e-" + 7);
            equationVisual.innerHTML = numA + " " + operator + " " + numB + " " + "=" + " " + Number(Math.round(answer + 'e' + 7) + "e-" + 7);
        }
    } else {
        currentDisplay.innerHTML = "ERROR";
        equationVisual.innerHTML = "ERROR";
        numA = "";
    }  
    //reset values in function and run with setTimeout so dont mess up display
    function resetValues() {
        numA= "";
        onNumA = true;
        numB = "";
        operator = "";
    }
    resetValues();
}

function readClear() {
    numA = "";
    console.log(numA);
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