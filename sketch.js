// week 03 code

let xpos = 100;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(55);
// rect(xpos, 10, 30, 30);
// rect(xpos, 50, 30, 30);
// rect(xpos, 90, 30, 30);

rect(mouseX,mouseY,30,30);

// print(mouseX,mouseY);
// in java?
// console.log(mouseX,mouseY);

if (mouseX > width / 2) {
    if (mouseY > width / 2) {
        fill(200,10,200);
    } else{
        fill(0,255,0);
    }
} else{
    fill(255);
}

}

