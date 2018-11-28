function setup() {
  createCanvas(1500, 1400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(750, 750);
 rotate(-90);

  let hr = hour ();
  let mn = minute ();
  let sc = second();

  strokeWeight(8);
  stroke( 255, 100, 150);
  noFill();
 let secondAngle = map(sc, 0, 60, 0, 360);
  arc( 0, 0, 600, 600, 0, secondAngle);

  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc( 0, 0, 580, 580, 0, minuteAngle);

    stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, -90, 360);
  arc( 0, 0, 560, 560, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0,0,100,0);
  pop();

   push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0,0,75,0);
  pop();

   push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0,0,50,0);
  pop();

  stroke(255);
  point(0,0);




  // fill(255);
 // noStroke();
 // text( hr + '.' + mn + '.' + sc, 10, 200);









}
