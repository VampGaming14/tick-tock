


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  let h = hour();
  text('Current hour:\n' + h, 5, 50);
  let m = minute();
text('Current minute: \n' + m, 5, 50);
let s = second();
text('Current second: \n' + s, 5, 50);
   angleMode(DEGREES);
   arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
}

function draw() {
  background(255,255,255); 
    sAngle = map(s, 0, 60, 0, 360);
    push();
    rotate(sAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop();
  drawSprites();
}