let qDamage = 5;
let originQCoolTime = 2000;
let coolTime = 2000;
let coolDown = false;
let Qskills = [];
let missileCooldown = false;

function fireSkill(moveMouseX, moveMouseY, playerX, playerY){
    
    let qSkill = {
        x : 0,
        y : 0,
        speed : 15,
        actice : true,
        dx : 0,
        dy : 0,
        angle : 0,
        damage : qDamage,
        mp : 30,
    };

    if (!coolDown) {
        startCooldown();

        coolDown = true;
        const dx = moveMouseX - playerX;
        const dy = moveMouseY - playerY;
        qSkill.angle = Math.atan2(dy, dx);
        qSkill.dx = Math.cos(qSkill.angle) * qSkill.speed;
        qSkill.dy = Math.sin(qSkill.angle) * qSkill.speed;
        qSkill.x = playerX;
        qSkill.y = playerY + 20;

        Qskills.push(qSkill);
        player.mp -= qSkill.mp; 

    }
}

function drawMysticShot(ctx, x, y, angle) {
    let image = new Image();
    image.src = '';
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(angle);
    ctx.drawImage(image, -image.width / 2 , -image.height / 2);
    ctx.restore();
}