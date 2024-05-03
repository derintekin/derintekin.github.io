function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255); // Start with a white background
}

function draw() {
    strokeWeight(4);
    stroke(0); // Draw with black color
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
