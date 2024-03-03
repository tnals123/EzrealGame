const healthCanvas = document.getElementById('healthBox');
const healthCtx = healthCanvas.getContext('2d');
const manaCanvas = document.getElementById('manaBox');
const manaCtx = manaCanvas.getContext('2d');

function healthUpdate() {
    healthCtx.save();
    healthCtx.fillStyle = 'white';
    healthCanvas.fillRect(0, 0, healthCanvas.width, healthCanvas.height);
    healthCanvas.fillStyle = 'rgb(236,53,53)';
    healthCanvas.fillRect(0, 0, healthCanvas.width * player.hp / player.maxHp, healthCanvas.height);
    healthCtx.restore;
}

function manaUpdate() {
    manaCtx.save();
    manaCtx.fillStyle = 'white';
    manaCtx.fillRect(0, 0, manaCanvas.width, manaCanvas.height);
    manaCtx.fillStyle = 'rgb(84,80,243)';
    manaCtx.fillRect(0, 0, manaCanvas.width * player.mp / player.maxMp, manaCanvas.height);
    manaCanvas.restore;
}