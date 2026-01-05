let left = false, right = false, gas = false;

document.getElementById("left").ontouchstart = () => left = true;
document.getElementById("left").ontouchend = () => left = false;

document.getElementById("right").ontouchstart = () => right = true;
document.getElementById("right").ontouchend = () => right = false;

document.getElementById("gas").ontouchstart = () => gas = true;
document.getElementById("gas").ontouchend = () => gas = false;
