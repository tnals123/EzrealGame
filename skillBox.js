const cooldownCanvas = document.getElementById('qSkillBox');
const Qbox = cooldownCanvas.getContext('2d');
let cooldownStart = 0;
let size = cooldownCanvas.clientWidth;

function drawQSkillBox() {
    Qbox.clearRect(0, 0, cooldownCanvas.clientWidth, cooldownCanvas.height);
    Qbox.fillStyle = coolDown ? 'grey' : 'white';
    Qbox.fillRect(0, 0, cooldownCanvas.clientWidth, cooldownCanvas.height);
}

function startCooldown() {
    if (coolDown) return;
    cooldownStart = Date.now();
    requestAnimationFrame(updateCooldown);
}

function updateCooldown() {
    const elapsed = Date.now() - cooldownStart;
    const remaining = coolTime - elapsed;

    Qbox.save();
    Qbox.fillStyle = 'white';
    Qbox.fillRect(0, 0, cooldownCanvas.clientWidth, cooldownCanvas.height);
    Qbox.fillStyle = 'grey';
    const filledHeight = (elapsed / coolTime) * cooldownCanvas.height;
    Qbox.fillRect(0, cooldownCanvas.height - filledHeight, cooldownCanvas.clientWidth, filledHeight);
    Qbox.restore;

    if (remaining > 0) {
        requestAnimationFrame(updateCooldown);
    }
    else {
        coolDown = false;
        coolTime = originQCoolTime;
        drawQSkillBox();
    }
}