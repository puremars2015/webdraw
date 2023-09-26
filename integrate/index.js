const board = document.getElementById("drawing-board");
const toolbox = document.getElementById("toolbox");
const ctx = board.getContext("2d");

const canvasOffsetX = board.offsetLeft;
const canvasOffsetY = board.offsetTop;

board.width = window.innerWidth - canvasOffsetX;
board.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 3;
let penXLocation = 0;
let penYLocation = 0;

toolbox.addEventListener("click", (e) => {
  if (e.target.id === "clear") {
    ctx.clearRect(0, 0, board.width, board.height);
  }
});

toolbox.addEventListener("change", (e) => {
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lineWidth") {
    lineWidth = e.target.value;
  }
});

const draw = (e) => {
  if (!isPainting) {
    return;
  }
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";

  ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
  ctx.stroke();
};

board.addEventListener("mousedown", (e) => {
  isPainting = true;
  penXLocation = e.clientX;
  penYLocation = e.clientY;
});

board.addEventListener("mouseup", (e) => {
  isPainting = false;
  ctx.stroke();
  ctx.beginPath();
});

board.addEventListener("mousemove", draw);
