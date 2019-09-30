var rects = [] ;
var i, white, speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //setting first location of squares (1000 squares are prepared)
  for (i = 0; i <1000; i++){
    rects[i] = 125000+i*-250;
  }
}

function draw() {
  //mouseX = brightness   mouseY = speed/direction of squares
  white = map(mouseX, 0, height, 0, 255);
  speed = map(mouseY, 0, width, -8, 8);
  
  //transparent background
  background(0, 20);
 
  //drawing squares
  for (i = 0; i < 1000; i ++) {
    strokeWeight(1);
    Green(rects[i]) ;
    Blue(rects[i]) ;
    //changing squares size every frame (speed/direction is based on mouseX)
    rects[i] += speed;
  }
  
  //drawing X, Y line
  stroke(50);
  strokeWeight(3);
  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);
}

//drawing green squares.
function Green(a) {
  stroke(white, 255, white);
  translate(width/2, height/2);
  noFill();
  rect(0, 0, a, a);
  translate(-width/2, -height/2);
}

//drawing blue squares. 125 is the size difference between green and blue
function Blue(a) {
  stroke(white, white, 255);
  translate(width/2, height/2);
  noFill();
  rect(0, 0, -a+125, a-125);
  translate(-width/2, -height/2);
}