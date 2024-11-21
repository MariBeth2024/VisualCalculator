

//run when operation is pressed
function createAddLine(numA) {
//create numberline of entire container length
    const pictureVisualDiv = document.getElementById("pictureVisual");
    const horizontalLine = document.createElement("div");
    horizontalLine.classList.add("horizontalLine");
    pictureVisualDiv.appendChild(horizontalLine);

    //place numA at beginning of numberline 
    const verticalDiv = document.createElement("div");
    verticalDiv.classList.add("verticalDiv");
    const startVertical = document.createElement("div");
    startVertical.classList.add("verticalLine");
    const startNumber = document.createElement("div")
    startNumber.classList.add("countDisplay");
    startNumber.innerHTML= numA;
    verticalDiv.appendChild(startVertical);
    verticalDiv.appendChild(startNumber);
    horizontalLine.appendChild(verticalDiv);
    
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

const numBArray = numB.split("")
 if (numBArray.length === 3)
  hundreds = numBArray[0]
  tens = numBArray[1]
  ones = numBArray[2]
 if (numBArray.length === 2)
  tens = numBArray[0]
  ones = numBArray[1]
 if (numBArray.length === 1)
  ones = numBArray[0]

 //calculate numberline 
 const units = (hundreds(3)+tens(2)+ones)
console.log(units);

// if (hundreds) { create for each hundreds one div with length 3units}
//numA = total display total+=100  at each jump
 
// if (tens && tens >=1) { create for each tens one div with length 2units}
//display total+=10 at each jump

// if (ones >= 1) { create for each ones one div with length units}
//display total+=1 at each jump

//call arrow functions- display +100, +10, +1 with each jump 
}
window.fillInNumberLine = fillInNumberLine;