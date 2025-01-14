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



function animateAddition(numA, numB) {
    const additionCanvas = document.getElementById('canvas')
    const ctx = additionCanvas.getContext('2d');
    const canvasWidth = additionCanvas.width;
    const canvasHeight = additionCanvas.height;
    
    let locationDash = 15;  //starting x px value of the initial dash on number line
    let locationNum = 11; //starting x px value of the initial number on number line
    let remainingB = numB; //keeps track of remaining amount of numB that needs to be graphed
    let currentNum = numA; //keeps track of current number on number line
    let delay = 0;  //keeps a count of the delay for the animation

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
    })

}

// Initialize canvas
initializeCanvas();

// Attach to global scope
window.createAddLine = createAddLine;
window.animateAddition = animateAddition;