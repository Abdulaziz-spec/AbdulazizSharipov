const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const letters = "アァイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()-=+<>?/|\\{}[]~".toUpperCase().split("");
const fontSize = 16;
const columns = Math.floor(width / fontSize);
const drops = [];

for (let i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * height / fontSize);
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#33ff33";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

window.addEventListener("resize", resize);
setInterval(draw, 50);



