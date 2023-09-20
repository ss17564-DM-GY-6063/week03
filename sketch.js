// week 03 code

let eDiam = 50;
let maxDiam = 50;


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(200,200,200);
  fill("pink");
 
//   xpos = xpos + eDiam
//   xpos += eDiam
//   xpos *= 2

  for (let xpos = 0; xpos <= width; xpos += eDiam){
    for (let ypos = 0; ypos <= height; ypos += eDiam) {
        for (let dim = maxDiam; dim > 5; dim -= 8){
            ellipse(xpos, ypos, dim, dim);
        }
    } 
 }

 for (let dim = eDiam; dim > 5; dim -= 8){
    ellipse(width/2, height/2, dim)
 }


    
}




