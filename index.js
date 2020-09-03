document.addEventListener("DOMContentLoaded", init)

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const size = 800;
const scale = 8;

function init() {
    canvas.width = size;
    canvas.height = size;
    context.scale(scale, scale);
    context.fillStyle = "black";
}