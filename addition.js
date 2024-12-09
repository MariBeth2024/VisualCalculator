

//run when operation is pressed
function createAddLine(numA) {
    const pictureVisualDiv = document.getElementById("pictureVisual");

    //place numA at beginning of numberline 
        const additionContainer = document.createElement("div");
        additionContainer.id= "additionContainer";
        pictureVisualDiv.appendChild(additionContainer);
        const startVerticalContainer = document.createElement("div");
        startVerticalContainer.classList.add("startVerticalContainer");
        const startVerticalLine = document.createElement("div");
        startVerticalLine.classList.add("startVerticalLine");
        const startNumber = document.createElement("div")
        startNumber.classList.add("countDisplay");
        startNumber.innerHTML= numA;
        startVerticalContainer.appendChild(startVerticalLine);
        startVerticalContainer.appendChild(startNumber);
        additionContainer.appendChild(startVerticalContainer);

    //create numberline of entire container length
        const horizontalLine = document.createElement("div");
        horizontalLine.id= "horizontalLine";
        additionContainer.appendChild(horizontalLine);
        
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
 let units = (horizontalLine.offsetWidth)/((hundreds*3)+(tens*2)+ones);

function createAndAppendDivs(width, increment) {
    const jumpDiv = document.createElement("div");
        jumpDiv.classList.add("jumpDiv");
        jumpDiv.style.width= width + "px";
        horizontalLine.appendChild(jumpDiv);
        //arrow
        const arrowContainer = document.createElement("div");
        arrowContainer.classList.add("arrowContainer");
        const arrowDiv = document.createElement("div");
        arrowDiv.classList.add("arrowDiv");
        const arrowDivInner = document.createElement("div");
        arrowDivInner.classList.add("arrowDivInner");
        //set div widths
        arrowContainer.style.width= width + "px";
        //append divs
        arrowContainer.appendChild(arrowDiv);
        arrowContainer.appendChild(arrowDivInner);
        jumpDiv.appendChild(arrowContainer);  
        //counting lines and numbers
        const countingContainer = document.createElement("div");
        countingContainer.classList.add("countingContainer");
        const countingLine = document.createElement("div");
        countingLine.classList.add("verticalLine");
        let countNumber = document.createElement("div");
        countNumber.classList.add("countDisplay");
        countNumber.innerHTML= total+=increment;
        countingContainer.appendChild(countingLine);
        countingContainer.appendChild(countNumber);  
        jumpDiv.appendChild(countingContainer);
}


 if (hundreds > 0) { 
    for (let i =1; i<=hundreds; i++) {
       createAndAppendDivs(units*3, 100);
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
