function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255); 
}

function draw() {
    strokeWeight(4);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
