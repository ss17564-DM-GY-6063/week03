// week 03 code

// let eDiam = 50;
let maxDiam = 100;
let minDiam = maxDiam / 10;


function setup() {
    createCanvas(600, 600);
}

function draw() {
    // print(minDiam, maxDiam);
    background(200,200,200);
  fill("pink");
 

  for (let xpos = 0; xpos <= width; xpos += 2 * maxDiam){
    for (let ypos = 0; ypos <= height; ypos += 2 * maxDiam) {
        let tDiam = random(minDiam, maxDiam);
            ellipse(xpos, ypos, tDiam, tDiam);
        }
    } 
 }




    





