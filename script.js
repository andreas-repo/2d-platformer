const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const avatarWidth = 30;
const avatarHeight = 30;

function drawAvatar() {
    ctx.beginPath();
    ctx.rect(480 - avatarWidth, 320 - avatarHeight, avatarWidth, avatarHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    drawAvatar();
}

draw();