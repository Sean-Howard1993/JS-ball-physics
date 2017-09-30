
var canvas, context, gameLoop, r, x, y;

function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, true); //arc defines circle
    context.closePath();
    context.fillStyle = "#000f" // NOTE red, green, blue, "alpha" (non tranparency) full vs empty, 2 per
    context.fill();
    if( x >= canvas.width - r) {
        x  = canvas.width - r;
    } else {
        x++;
    }
    if( y >= canvas.height - r) {
        y  = canvas.height - r;
    } else {
        y++;
    } //yo
}

function main() { //NOTE () needed for function
    canvas = document.getElementById("canvas"); //NOTE get or set means function
    context = canvas.getContext("2d");
    x = canvas.width / 2;
    y = canvas.height / 2;
    r = 10;
    gameLoop = setInterval(loop, 1000 / 60);

}
//NOTE class more abstract than array
