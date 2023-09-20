// week 03 code

let xpos = 150;
let ypos = 200;

let rectwidth = 300;
let rectheight = 200;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(200,20,20);
  
    // (xpos + rectwidth) > mouseX > xpos
    // xpos < mouseX <(xpos + rectwidth)
    if (mouseX > xpos && 
        mouseX <(xpos + rectwidth) && 
        mouseY > ypos && 
        mouseY < (ypos +rectheight)
        ){
        fill(20,200,20);
    }else{
        fill(255);
    }


    rect(xpos, ypos, rectwidth, rectheight);
}



