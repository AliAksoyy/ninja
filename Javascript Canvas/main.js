// Canvas elementini seçme
let canvas = document.getElementById("myCanvas");

// 2D çizim context'i alınır
let context = canvas.getContext("2d");

// fiilRect
context.fillStyle = "red";
context.fillRect(10, 20, 150, 100);
context.fillStyle = "blue";
context.fillRect(170, 20, 150, 100);
context.fillStyle = "green";
context.fillRect(330, 20, 150, 100);

// strokeRect()

context.lineWidth = 5;
context.strokeStyle = "green";
context.strokeRect(10, 130, 150, 100);

// clearRect()

context.clearRect(11, 21, 148, 98);

// fillText()
context.font = "30px Arial";
context.fillStyle;
context.fillText("hello world", 500, 50, 100);

//strokeText()
context.lineWidth = 1;
context.strokeStyle = "orange";
context.strokeText("Hello World", 500, 100, 100);

path

context.beginPath();
context.moveTo(50, 50);
context.lineTo(150, 50);
context.lineTo(100, 200);
context.lineTo(50, 50);
// context.closePath();
context.fillStyle = "coral";
context.fill();

context.beginPath();
context.moveTo(200, 50);
context.lineTo(150, 200);
context.lineTo(250, 200);
context.closePath();
context.stroke();

context.beginPath();
context.rect(300, 50, 150, 100);
context.fillStyle = "teal";
context.fill();

context.beginPath();

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
// context.arc(100, 100, 40, 0, Math.PI * 2);

// draw HEad
context.arc(centerX, centerY, 200, 0, Math.PI * 2);

// Move to mouth
context.moveTo(centerX + 100, centerY);

// Draw mouth
context.arc(centerX, centerY, 100, 0, Math.PI, false);

// move left eye
context.moveTo(centerX - 60, centerY - 80);

// draw left eye
context.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2, false);

// move right eye
context.moveTo(centerX + 100, centerY - 80);

// draw right eye
context.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2, false);

// Quadratic curve

context.moveTo(75, 25);
context.quadraticCurveTo(25, 25, 25, 62.5);
context.quadraticCurveTo(25, 100, 50, 100);
context.quadraticCurveTo(50, 120, 30, 125);
context.quadraticCurveTo(60, 120, 65, 100);
context.quadraticCurveTo(125, 100, 125, 62.5);
context.quadraticCurveTo(125, 25, 75, 25);

context.stroke();

const circle = {
  x: 200,
  y: 200,
  size: 30,
  dx: 5,
  dy: 5,
};
function drawCircle({ x, y, size, dx, dy }) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2);
  context.fillStyle = "purple";
  context.fill();
}

drawCircle(circle);
