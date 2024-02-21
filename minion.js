let minions = [];
const minionSize = 30;
const minionHp = 30;
let lastSpawnTime = Date.now();
const spawnRate = 2000;

function spawnMinion(playerX, playerY) {
    const angle = Math.random() * Math.PI * 2;
    const distance = 1000;
    const x = playerX + Math.cos(angle) * distance;
    const y = playerY + Math.sin(angle) * distance;
    const dx = 0;
    const dy = 0;
    minions.push({x, y, dx, dy, hp : minionHp});
}

function minionUpdate(ctx, playerX, playerY) {
    if (Date.now() - lastSpawnTime > spawnRate) {
        spawnMinion(playerX, playerY);
        lastSpawnTime = Date.now();
    }

    minions.forEach((minion, index) => {
        const dx = (playerX - minion.x);
        const dy = (playerY - minion.y);
        const angle = Math.atan2(dy,dx);
        minion.dx += Math.cos(angle) * 0.006;
        minion.dy += Math.sin(angle) * 0.006;
        const minionScreenX = minion.x - (playerX - screenCenterX);
        const minionScreenY = minion.y - (playerY - screenCenterY);

        ctx.save();
        ctx.translate(minionScreenX, minionScreenY);
        let image = new Image();
        image.src = '';
        ctx.drawImage(image, -image.width / 2, -image.height / 2);
        ctx.fillStyle = 'green';
        ctx.fillRct(-10, -25, minionSize*(minion.hp/30),5);
        ctx.restore();
        minion.x += minion.dx;
        minion.y += minion.dy;

        //플레이어 몸박
        if (Math.hypot(playerX - minion.x , playerY - minion.y) < player.size) {
            if (!player.hit) {
                player.hit = true;
                player.hp -= 10;
                setTimeout(function() {
                    player.hit = false;
                },player.hitTime)
            }
        }

        Qskills.forEach((Qskill,index) => {
            if (Math.hypot(Qskill.x - minion.x, Qskill.y - minion.y) < 20) {
                minion.hp -= Qskill.damage;
                Qskills.splice(index, 1);
                coolTime -= 1000;
            }
        })
        if (minion.hp <= 0) {
            //골드 추가 ui
            minions.splice(index,1);
            getGole(5);
        }
        ctx.restore();
    })
}