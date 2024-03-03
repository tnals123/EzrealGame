let lastDirection = 'stop';
const img = new Image();
img.src = '';
let currentFrame = 0;
let intervalTime = 70;
let lastUpdateTime = Date.now();
const walkingDuration = 18000;
const ezrealStop = ['src/IDLE.png'];

function preloadImages() {
    
    const imagesToPreload = [
        
        'src/runningImage/00.png',
        'src/runningImage/01.png',
        'src/runningImage/02.png',
        'src/runningImage/03.png',
        'src/runningImage/04.png',
        'src/runningImage/05.png',
        'src/runningImage/06.png',
        'src/runningImage/07.png',
        'src/IDLE.png',
    ];

    for (let i = 0; i < imagesToPreload.length; i++) {
        const img = new Image();
        img.src = imagesToPreload[i];
    }
}

const ezrealWalkingRight = [
    'src/runningImage/00.png',
    'src/runningImage/01.png',
    'src/runningImage/02.png',
    'src/runningImage/03.png',
    'src/runningImage/04.png',
    'src/runningImage/05.png',
    'src/runningImage/06.png',
    'src/runningImage/07.png',

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
    if (Date.now() - lastUpdateTime >= intervalTime) {
        currentFrame = (currentFrame + 1) % animationFrames[lastDirection].length;
        lastUpdateTime = Date.now(); // 현재 시간으로 업데이트
    }
}

function drawEzreal(x, y, lastDirection) {
    const frames = animationFrames[lastDirection];
    updateFrame();
    const image = new Image();
    image.src = frames[currentFrame];
    ctx.drawImage(image, x, y);
}
