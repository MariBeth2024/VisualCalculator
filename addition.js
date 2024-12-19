

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

//arrow animation setup
const spriteWidth = 190;
const spriteHeight = 130;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'leftArrow',
        frames: 6,
    },
    {
        name: 'rightArrow',
        frames: 6,
    },
]

let accumulator = 0;
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionSpriteFrame = j * spriteHeight;
        let positionSpriteNum = accumulator * spriteHeight;
        frames.loc.push({x: 0, y: positionSpriteNum + positionSpriteFrame});        
    }
    accumulator += state.frames;
    spriteAnimations[state.name] = frames;
});

// function createArrows(width) {
//     //arrow
//     const arrowDiv = document.createElement("canvas");
//     const ctx = arrowDiv.getContext("2d");
//     arrowDiv.classList.add("arrowDiv");
//     //set div widths
//     arrowDiv.width = width;
//     //height needs to match the width 190/1.46=130 -- keeps ratio the same
//     arrowDiv.height = (width/1.46);
//     arrowDiv.style.width = `${width}px`; // Same as the internal width
//     arrowDiv.style.height = `${width / 1.46}px`; // Matches the proportional heightctx.lineWidth = 5; // Border width
    
//     arrowContainer.appendChild(arrowDiv);
    
//     // Animation
// const arrowImage = new Image();
// arrowImage.src = 'arrowSprites.png';

// const staggerFrames = 15; // The bigger the number, the slower the animation
// const totalFrames = spriteAnimations['rightArrow'].loc.length;
// let gameFrame = 0;
// let frameY;

// arrowImage.onload = () => {
//     function animate() {
//         ctx.clearRect(0, 0, arrowDiv.width, arrowDiv.height); // Clear canvas
//         let position = Math.floor(gameFrame/staggerFrames);
//         // const position = Math.floor(gameFrame / staggerFrames) % totalFrames; // Loop frames
//         // const frameY = spriteAnimations['rightArrow'].loc[position].y;
//         if(position < totalFrames) {
//         frameY = spriteAnimations['rightArrow'].loc[position].y;
//         ctx.drawImage(
//             arrowImage,
//             0, frameY, spriteWidth, spriteHeight, // Source rectangle
//             0, 0, arrowDiv.width, arrowDiv.height // Destination rectangle
//         );
//         gameFrame++;
//         requestAnimationFrame(animate); // Continue animation
//     } else {
//         frameY = spriteAnimations['rightArrow'].loc[5].y;
//         ctx.drawImage(
//             arrowImage,
//             0, frameY, spriteWidth, spriteHeight, // Source rectangle
//             0, 0, arrowDiv.width, arrowDiv.height// Destination rectangle
//         );
//         }
//     }
//     animate(); // Start animation
// }

// }

function createArrowsSequentially(numArrows, width) {
const arrowContainer = document.getElementById("arrowContainer");

    function appendArrow(index) {
        if (index >= numArrows) return; // Stop if we've created all arrows

        // Arrow setup
        const arrowDiv = document.createElement("canvas");
        const ctx = arrowDiv.getContext("2d");
        arrowDiv.classList.add("arrowDiv");
        arrowDiv.width = width;
        arrowDiv.height = width / 1.46;
        arrowDiv.style.width = `${width}px`;
        arrowDiv.style.height = `${width / 1.46}px`;
        arrowContainer.appendChild(arrowDiv);

        // Animation setup
        const arrowImage = new Image();
        arrowImage.src = 'arrowSprites.png';

        const staggerFrames = 15; // The bigger the number, the slower the animation
        const totalFrames = spriteAnimations['rightArrow'].loc.length;
        let gameFrame = 0;
        let frameY;

        arrowImage.onload = () => {
            function animate() {
                ctx.clearRect(0, 0, arrowDiv.width, arrowDiv.height); // Clear canvas
                const position = Math.floor(gameFrame / staggerFrames);
                
                if (position < totalFrames) {
                    frameY = spriteAnimations['rightArrow'].loc[position].y;
                    ctx.drawImage(
                        arrowImage,
                        0, frameY, spriteWidth, spriteHeight, // Source rectangle
                        0, 0, arrowDiv.width, arrowDiv.height // Destination rectangle
                    );
                    gameFrame++;
                    requestAnimationFrame(animate); // Continue animation
                } else {
                    // Display the final frame
                    frameY = spriteAnimations['rightArrow'].loc[totalFrames - 1].y;
                    ctx.drawImage(
                        arrowImage,
                        0, frameY, spriteWidth, spriteHeight, // Source rectangle
                        0, 0, arrowDiv.width, arrowDiv.height // Destination rectangle
                    );
                }
            }
            animate(); // Start the animation
        };

        // Call the next arrow after a delay
        setTimeout(() => appendArrow(index + 1), 1000); // Delay of 1 second
    }

    // Start with the first arrow
    appendArrow(0);
}

function createCountingDivs(width, increment) {

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
       createCountingDivs(units*4, 100);
    }
    createArrowsSequentially(hundreds, units*4)

 }
 if (tens > 0) {
    for (let i =1; i<=tens; i++) {
        createCountingDivs(units*2, 10);
    }
    setTimeout(() => createArrowsSequentially(tens, units*2), 1000*hundreds);
 }
 if (ones > 0) {
    for (let i =1; i<=ones; i++) {
        createCountingDivs(units, 1);
    }
    setTimeout(() => createArrowsSequentially(ones, units), (1000*(hundreds + tens)));
 }
}
window.fillInNumberLine = fillInNumberLine;