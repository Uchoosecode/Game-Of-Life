document.addEventListener("DOMContentLoaded", init)

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2D");
const size = 800;

function init() {
    canvas.width = size;
    canvas.height = size;
}