const canvas = document.getElementByOd('gameCanvas');
const ctx = canvas.getContext('2d');

const mapWidth = 4000;
const mapHeight = 4000;

//카메라
let screenCenterX = canvas.width / 2;
let screenCenterY = canvas.height / 2;

//캐릭터 이동을 위한 마우스 위치
let moveMouseX = 0;
let moveMouseY = 0;
//미사일 발사를 위한 마우스 위치
let missileMouseX = 0;
let missileMouseY = 0;

//캐릭터 생성
let player = {
    x : mapWidth / 2,
    y : mapHeight / 2,
    speed : 5,
    size : 20,
    hitTime : 500,
    hit : false,
    maxHp : 100,
    maxMp : 300,
    hp : 100,
    mp : 300,
    gold : 0,
}

let targetX = player.x;
let targetY = player.y;

canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    missileMouseX = event.clientX - rect.left;
    missileMouseY = event.clientY - rect.top;
    moveMouseX = missileMouseX + player.x - screenCenterX;
    moveMouseY = misiileMouseY + player.y - screenCenterY;
});

canvas.addEventListener('mousedown', function(event) {
    if ((event.button === 2)||(event.which === 3)) {
        movePlyaer(event);
    }
});

canvas.addEventListener('contextmenu', function(event) {
        event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'q' || event.key === 'Q') {
        fireMissile(moveMouseX, moveMouseY, player.x , player.y);
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
        targetX = player.x;
        targetY = player.y;
        lastDirection = 'stop';
    }
});

function getGold(gold) {
    player.gold += gold;
}

function movePlayer(event) {
    targetX = moveMouseX;
    targetY = moveMouseY;
}

function updatePlayerPosition() {
    const dx = targetX - player.x;
    const dy = targetY - player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const threshold = 5;
    if (distance > threshold) {
        const newX = player.x + (dx / distance) * player.speed;
        const newY = player.y + (dy / distance) * player.speed;
        player.x = Math.min(Math.max(newX, 0) , mapWidth);
        player.y = Math.min(Math.max(newY, 0) , mapHeight);
        if (Math.abs(dx) > Math.abs(dy)) {
            lastDirection = (dx > 0) ? 'right' : 'left';
        }
        else if (Math.abs(dx) < Math.abs(dy)) {
            lastDirection = (dx > 0) ? 'down' : 'up';
        }
    }
}

function updateGameArea() {

    drawMap(ctx, screenCenterX - player.x, screenCenterY - player.y);
    updatePlayerPosition();
    drawEzreal(screenCenterX, screenCenterY, lastDirection);
    minionUpdate(ctx, player.x, player.y);
    healthUpdate();
    manaUpdate();
    Qskills.forEach((Qskill,index) => {
        if (Qskill.active) {
            const missileScreenX = Qskill.x - (player.x - screenCenterX);
            const missileScreenY = Qskill.y - (player.y - screenCenterY);
            drawMysticShot(ctx, missileScreenX, missileScreenY, Qskill.angle);
            Qskill.x += Qskill.dx;
            Qskill.y += Qskill.dy;
        }
        if (Qskill.x < 0 || Qskill.y < 0 || Qskill.x > mapWidth || Qskill.y > mapHeight) {
            Qskill.active = false;
            Qskills.splice(index, 1);
        }
    })
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateGameArea();
    requestAnimationFrame(gameLoop);
}

window.onload = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameLoop();
}



