let frameY;
const arrowImage = new Image();
arrowImage.src = 'arrowSprites.png';
const spriteWidth = 190;
const spriteHeight = 130;

let gameFrame = 0;
const staggerFrames = 15;  //the bigger the number, the slower the animation
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


function initializeCanvas() {
    const additionCanvas = document.getElementById('canvas');
    additionCanvas.width = 800;
    additionCanvas.height = 400;
}

function createAddLine(numA) {
    const additionCanvas = document.getElementById('canvas')
    const ctx = additionCanvas.getContext('2d');
    const canvasWidth = additionCanvas.width;
    const canvasHeight = additionCanvas.height;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 300, canvasWidth - 10, 3);  //creates number line
    ctx.fillRect(15, 294, 3, 15);  //creates first dash on number line

    ctx.font = '20px Helvetica';
    ctx.fillText(numA, 11, 328);  //puts numA on the number line

}

// function createArrow(locationDash, currentNum, locationNum) {
//     const additionCanvas = document.getElementById('canvas')
//     const ctx = additionCanvas.getContext('2d');
//     const canvasWidth = additionCanvas.width;
//     const canvasHeight = additionCanvas.height;

//     ctx.fillRect(locationDash, 294, 3, 15);
//     ctx.fillText(currentNum, locationNum, 328);


//     // let totalFrames = spriteAnimations['rightArrow'].loc.length;
//     // let position = Math.floor(gameFrame2/staggerFrames);

// }


function animateAddition(numA, numB) {
    const additionCanvas = document.getElementById('canvas')
    const ctx = additionCanvas.getContext('2d');
    const canvasWidth = additionCanvas.width;
    const canvasHeight = additionCanvas.height;
    
    let locationDash = 15;  //starting x px value of the initial dash on number line
    let locationNum = 11; //starting x px value of the initial number on number line
    let remainingB = numB; //keeps track of remaining amount of numB that needs to be graphed
    let currentNum = parseFloat(numA); //keeps track of current number on number line
    let delay = 0;  //keeps a count of the delay for the animation


    let hundreds = Math.floor(numB/100) * 100;
    let tens = Math.floor((numB - hundreds)/10) * 10;
    let ones = numB - hundreds - tens
    let units = 750 / ((hundreds*4/100)+(tens*2/10)+ones);
    
    function animateArrow(locationDash, currentNum, locationNum) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = 'black';
        ctx.fillRect(locationDash, 294, 3, 15);
        ctx.fillText(currentNum, locationNum, 328);

        let totalFrames = spriteAnimations['rightArrow'].loc.length;
        let position = Math.floor(gameFrame/staggerFrames);
    
        if(position < totalFrames) {
            frameY = spriteAnimations['rightArrow'].loc[position].y;
            ctx.drawImage(arrowImage, 0, frameY, spriteWidth, spriteHeight, -352 + locationDash , 238 - spriteHeight, 440, 301);
            gameFrame++;
            requestAnimationFrame(animateArrow);
        } else {
            frameY = spriteAnimations['rightArrow'].loc[5].y;
            ctx.drawImage(arrowImage, 0, frameY, spriteWidth, spriteHeight, -352 + locationDash, 238 - spriteHeight, 440, 301);
        }
    }

    function scheduleArrow(delay, locDash, currNum, locNum) {
        setTimeout(() => {
            animateArrow(locDash, currNum, locNum);
        }, delay * 500);
    }

    if(hundreds != 0) {
        for( ; remainingB >= 100; remainingB -= 100) {
            locationDash += units*4;
            locationNum += units*4;
            currentNum += 100;
            scheduleArrow(delay, locationDash, currentNum, locationNum);
            delay++;
        }
    };

    if(tens != 0) {
        for( ; remainingB >= 10; remainingB -= 10) {
            locationDash += units*2;
            locationNum += units*2;
            currentNum += 10;
            scheduleArrow(delay, locationDash, currentNum, locationNum);
            delay++;
        }
    };

    if(ones != 0) {
        for( ; remainingB >= 1; remainingB -= 1) {
            locationDash += units;
            locationNum += units;
            currentNum += 1;
            scheduleArrow(delay, locationDash, currentNum, locationNum);
            delay++;
        }
    };
}

// Initialize canvas
initializeCanvas();

// Attach to global scope
window.createAddLine = createAddLine;
window.animateAddition = animateAddition;