function drawMap(ctx, offsetX, offsetY) {
    let image = new Image();
    image.src = 'src/map.png';
    ctx.drawImage(image, offsetX, offsetY);
}
