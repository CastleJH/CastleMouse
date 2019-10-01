var rects = [] ;
var i, white, speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //setting first size and color of squares (1000 squares are prepared)
  for (i = 0; i <1000; i++){
    rects[i] = width*125+i*-width/4;
  }
}

function draw() {
  randomSeed(7777);
  //mouseX = background color   mouseY = speed/direction of squares
  white = map(mouseX, 0, width, 0, 1);
  speed = map(mouseY, 0, height, -6, 6);
  
  //black or white background
  if (white > 0.5) {
    space(255, color(50, 200, 50));
  } else {
    space(0, 255); 
  }
 
  //drawing squares
  for (i = 0; i < 1000; i ++) {
    let sizeX = rects[i];
    let sizeY = rects[i]*height/width;
    strokeWeight(1);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    noFill();
    rect(width, 0, -sizeX, sizeY) ;
    rect(0, 0, sizeX, sizeY) ;
    rect(0, height, sizeX, -sizeY) ;
    rect(width, height, -sizeX, -sizeY) ;
    //changing squares size every frame (speed/direction is based on mouseX)
    rects[i] += speed ;
  }
}

//background and lines
function space(a, b) {
  background(a, 20);
    for (let j = 0; j < width/25; j ++) {
      noStroke();
      fill(b);
      ellipse(random(0, width), random(0, height), 2, 2);
    }
  stroke(b);
  strokeWeight(2);
  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);
}