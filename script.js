/* ideas */
// light and dark theme based on if it's day or night
// change the whole theme of webpage based on the holiday and festival on that day.
// Show your problem-solving process
// Host projects live
// Include code snippets and explanations of coding decisions
// Include case studies detailing the development process
// Highlight unique features & challenges of each project



/* changing theme code */
// const hour = new Date().getHours();
// let theme = hour >= 6 && hour < 18 ? "light" : "dark";
// const container = document.getElementById("container");
// container.classList.add("theme-" + theme);



/* canvas drawing */
// change this to moveTo() to make smoother lines instead of making circles that is current situation

const canvas = document.getElementById("drawing-background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = document.getElementById("container").clientHeight;

let radius = 300;

// let gradient = ctx.createLinearGradient(0, 0, 0, innerHeight*3);
let gradient = ctx.createLinearGradient(0, 0, innerWidth, 0);

// gradient.addColorStop("0", "lightblue");
// gradient.addColorStop("0.5", "white");
// gradient.addColorStop("1.0", "lightpink");

// gradient.addColorStop("0", "lightgreen");
// gradient.addColorStop("0.5", "white");
// gradient.addColorStop("1", "gray");

// gradient.addColorStop("0", "#6959e6"); //purple
// gradient.addColorStop("0", "#cab8ff"); //lightpurple
gradient.addColorStop("0", "#98e4ff"); //lightblue
gradient.addColorStop("1", "white");

document.body.addEventListener("mousemove", drawColor);
document.body.addEventListener("pointerover", drawColor);
document.body.addEventListener("touchmove", drawColor);

function drawColor(event) {
  // console.log(event);
  // let x = event.layerX;
	// let y = event.layerY;
	let x = event.pageX;
	let y = event.pageY;
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
