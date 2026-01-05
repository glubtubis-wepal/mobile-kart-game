// Input variables
let left = false, right = false, gas = false;

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const gasBtn = document.getElementById("gas");

// Touch events
leftBtn.ontouchstart = () => left = true;
leftBtn.ontouchend = () => left = false;

rightBtn.ontouchstart = () => right = true;
rightBtn.ontouchend = () => right = false;

gasBtn.ontouchstart = () => gas = true;
gasBtn.ontouchend = () => gas = false;
