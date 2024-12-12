

//run when operation is pressed
function createAddLine() {
    const pictureVisualDiv = document.getElementById("pictureVisual"); 

        //create numberline of entire container length
        const additionContainer = document.createElement("div");
        additionContainer.id = "additionContainer";
        const arrowContainer = document.createElement("div");
        arrowContainer.id= "arrowContainer";
        const numberLineDiv = document.createElement("div");
        numberLineDiv.id = "numberLineDiv";        
        const horizontalLine = document.createElement("div");
        horizontalLine.id= "horizontalLine";
        numberLineDiv.appendChild(horizontalLine);
        additionContainer.appendChild(arrowContainer);
        additionContainer.appendChild(numberLineDiv);
        pictureVisualDiv.appendChild(additionContainer);

        //place numA at beginning of numberline
        const startVerticalContainer = document.createElement("div");
        startVerticalContainer.classList.add("startVerticalContainer");
        const startVerticalLine = document.createElement("div");
        startVerticalLine.classList.add("verticalLine");
        const startNumber = document.createElement("div")
        startNumber.classList.add("countDisplay");
        startNumber.innerHTML= numA;
        startVerticalContainer.appendChild(startVerticalLine);
        startVerticalContainer.appendChild(startNumber);
        numberLineDiv.appendChild(startVerticalContainer);
        
    //highlight num on number line
}
// Attach to the global scope
window.createAddLine = createAddLine;



function fillInNumberLine(numB) {
//run when enter is pressed
//fill in numberline
//calculate lines- every 100, 10, and 1 for numB
let hundreds;
let tens;
let ones;
const horizontalLine = document.getElementById("horizontalLine");
const arrowContainer = document.getElementById("arrowContainer");
const numberLineDiv = document.getElementById("numberLineDiv");
let total = parseInt(numA);

const numBArray = numB.split("")

 if (numBArray.length === 3) {
  hundreds = parseInt(numBArray[0]);
  tens = parseInt(numBArray[1]);
  ones = parseInt(numBArray[2]);
 } else if (numBArray.length === 2) {
  hundreds = 0;
  tens = parseInt(numBArray[0]);
  ones = parseInt(numBArray[1]);
 } else if (numBArray.length === 1) {
  hundreds = 0;
  tens = 0;
  ones = parseInt(numBArray[0]);
 }
 //calculate numberline 
 console.log(horizontalLine.offsetWidth);
 let units = (horizontalLine.offsetWidth)/((hundreds*4)+(tens*2)+ones);

function createAndAppendDivs(width, increment) {

        //arrow
        const arrowDiv = document.createElement("canvas");
        arrowDiv.classList.add("arrowDiv");
        arrowContainer.appendChild(arrowDiv);

        //set div widths
        arrowDiv.style.width= width + "px";
        arrowDiv.style.height= (width/3) + "px";
    
        //counting lines and numbers
        const countingContainer = document.createElement("div");
        countingContainer.classList.add("countingContainer");
        countingContainer.style.width= width + "px";
        const countingLine = document.createElement("div");
        countingLine.classList.add("verticalLine");
        const countNumber = document.createElement("div");
        countNumber.classList.add("countDisplay");
        countNumber.innerHTML= total+=increment;
        countingContainer.appendChild(countingLine);
        countingContainer.appendChild(countNumber);  
        horizontalLine.appendChild(countingContainer);
}


 if (hundreds > 0) { 
    for (let i =1; i<=hundreds; i++) {
       createAndAppendDivs(units*4, 100);
    }
 }
 if (tens > 0) {
    for (let i =1; i<=tens; i++) {
        createAndAppendDivs(units*2, 10);
    }
 }
 if (ones > 0) {
    for (let i =1; i<=ones; i++) {
        createAndAppendDivs(units, 1);
    }
 }
}
window.fillInNumberLine = fillInNumberLine;

function colorArrows() {
    const arrows = document.querySelectorAll(".arrowDiv");
    
    arrows.forEach((arrow, index) => {
        setTimeout(() => {
            arrow.classList.add("display");
        }, index * 500);
    });
}

window.colorArrows= colorArrows;