let lastDirection = 'stop';
const img = new Image();
img.src = '';
let currentFrame = 0;
let intervalTime = 0;
const walkingDuration = 10000;
const ezrealStop = [];
const ezrealWalkingRight = [
    
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/00.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/01.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/02.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/03.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/04.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/05.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/06.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/07.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/08.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/09.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/10.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/11.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/12.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/13.png',
    'C:/Users/CKIRUser/Desktop/roqkf/src/runningImage/14.png',
    
];
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
