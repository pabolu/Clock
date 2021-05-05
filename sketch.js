function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);
  
  fill('black')

 
  
  let sec = second();
  let min = minute();
  let hr = hour();
  
  
  textSize(40);
  fill(155,255,255);
  text(hr % 12 + ':' + min + ':' + sec,125,50);
  noFill();
  
  
   translate(200,240);

  //hour

  stroke(90);
  strokeWeight(10);
  ellipse(0,0, 300, 300);

  stroke('pink');
  strokeWeight(5);
  noFill();
  let end1 = map(hr % 12, 0, 12, 0, 360)
  arc(0, 0, 300, 300, 270, end1 - 90);

  push();
  rotate(end1 - 90);
  line(0,0,40,0);
  pop();
  
  

  minute
  
   stroke(90);
   strokeWeight(10);
   ellipse(0, 0, 270, 270);

  stroke(233,143,226);
  strokeWeight(5);
  noFill();
  let end2 = map(min, 0, 60, 0, 360)
  arc(0, 0, 270, 270, 270, end2 - 90);

  push();
  rotate(end2 - 90);
  line(0,0,70,0);
  pop();
  //seconds
  
   stroke(90);
   strokeWeight(10);
   ellipse(0, 0, 240, 240);

  stroke('powderBlue');
  strokeWeight(5);
  noFill();
  let end3 = map(sec, 0, 60, 0, 360)
  arc(0, 0, 240, 240, 270, end3 - 90);

  push();
  rotate(end3 - 90);
  line(0,0,100,0);
  pop();
 
   fill('white');
   noStroke();
   circle(0, 0, 12, 12);
   noFill();
  

}