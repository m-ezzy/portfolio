/* changing theme code */
const hour = new Date().getHours();
let theme = hour >= 6 && hour < 18 ? "light" : "dark";
// theme = "light";
// theme = "dark";
const container = document.getElementById("container");
container.classList.add("theme-" + theme);

/* canvas drawing */
// change this to moveTo() to make smoother lines instead of making circles that is current situation

const canvas = document.getElementById("drawing-background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = document.getElementById("container").clientHeight;

let radius = 300;

// let gradient = ctx.createLinearGradient(0, 0, 0, innerHeight*3);
let gradient = ctx.createLinearGradient(0, 0, innerWidth, 0);

// gradient.addColorStop("0","lightblue");
// gradient.addColorStop("0.5", "white");
// gradient.addColorStop("1.0", "lightpink");

gradient.addColorStop("0","lightgreen");
gradient.addColorStop("0.5", "white");
gradient.addColorStop("1.0", "gray");

document.body.addEventListener("mousemove", drawColor);
document.body.addEventListener("pointerover", drawColor);
document.body.addEventListener("touchmove", drawColor);

function drawColor(event) {
  // console.log(event);
  let x = event.layerX; // pageX;
	let y = event.layerY; // paageY;
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI*2);
	ctx.fillStyle = gradient;
	ctx.fill();
}

/* contact grid interactivity */
const grid = document.getElementById("grid");
const cells = grid.getElementsByTagName("div");

for(let i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", (e) => {
		// console.log(e.target);
		// cells[i].style.backgroundColor = "white";
		cells[i].classList.add("hue-rotate");
	});
}
