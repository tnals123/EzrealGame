let lastDirection = 'stop';
const img = new Image();
img.src = '';
let currentFrame = 0;
let intervalTime = 0;
const walkingDuration = 10000;
const ezrealStop = [];
const ezrealWalkingRight = [];
const ezrealWalkingLeft = [];

let animationFrames = {
    'stop' : ezrealStop,
    'left' : ezrealWalkingLeft,
    'right' : ezrealWalkingRight,
    'up' : ezrealWalkingRight,
    'down' : ezrealWalkingRight,
}

function updateFrame() {
    currentFrame = (currentFrame + 1) % animationFrames[lastDirection].length;
}

function drawEzreal(x, y, lastDirection) {
    const frames = animationFrames[lastDirection];
    updateFrame();
    const image = new Image();
    image.src = frames[currentFrame];
    ctx.drawImage(image, x, y);
}
