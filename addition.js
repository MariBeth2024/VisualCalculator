

//run when operation is pressed
function createAddLine(numA) {
//create numberline of entire container length
    const pictureVisualDiv = document.getElementById("pictureVisual");
    const horizontalLine = document.createElement("div");
    horizontalLine.id= "horizontalLine";
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
const horizontalLine = document.getElementById("horizontalLine");
let total = parseInt(numA);

const numBArray = numB.split("")
console.log("numB:", numB);
console.log("numBArray:", numBArray, "numBArray.length:", numBArray.length);
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

console.log("hundreds, tens, ones:", hundreds, tens, ones);
 //calculate numberline 
 let units = horizontalLine.offsetWidth/((hundreds*3)+(tens*2)+ones);
console.log("units:", units);

 if (hundreds > 0) { 
    for (let i =1; i<=hundreds; i++) {
        const hundredsDiv = document.createElement("div");
        hundredsDiv.classList.add("jumpDiv");
        hundredsDiv.style.width= (units*3) + "px";
        horizontalLine.appendChild(hundredsDiv);
        //counting lines and numbers
        const countingLine = document.createElement("div");
        countingLine.classList.add("verticalLine");
        let countNumber = document.createElement("div");
        countNumber.classList.add("countDisplay");
        countNumber.innerHTML= total+=100;
        hundredsDiv.appendChild(countingLine);
        hundredsDiv.appendChild(countNumber);
    }
 }
 if (tens > 0) {
    for (let i =1; i<=tens; i++) {
        const tensDiv = document.createElement("div");
        tensDiv.classList.add("jumpDiv");
        tensDiv.style.width= (units*2) + "px";
        horizontalLine.appendChild(tensDiv);
        //counting lines and numbers
        const countingLine = document.createElement("div");
        countingLine.classList.add("verticalLine");
        let countNumber = document.createElement("div");
        countNumber.classList.add("countDisplay");
        countNumber.innerHTML= total+=10;
        tensDiv.appendChild(countingLine);
        tensDiv.appendChild(countNumber);
    }
 }
 if (ones > 0) {
    for (let i =1; i<=ones; i++) {
        const onesDiv = document.createElement("div");
        onesDiv.classList.add("jumpDiv");
        onesDiv.style.width= (units) + "px";
        horizontalLine.appendChild(onesDiv);        
        //counting lines and numbers
        const countingLine = document.createElement("div");
        countingLine.classList.add("verticalLine");
        let countNumber = document.createElement("div");
        countNumber.classList.add("countDisplay");
        countNumber.innerHTML= total+=1;
        onesDiv.appendChild(countingLine);
        onesDiv.appendChild(countNumber);
    }
 }
}
window.fillInNumberLine = fillInNumberLine;

//call arrow functions- display +100, +10, +1 with each jump 