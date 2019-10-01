var rectX = [] ;
var rectY = [] ;
var rectcolor = [];
var i, white, speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //setting first size and color of squares (1000 squares are prepared)
  for (i = 0; i <1000; i++){
    rectX[i] = width*125+i*-width/4;
    rectY[i] = height*125+i*-height/4;
    rectcolor[i] = color(random(0, 255), random(0, 255), random(0, 255));
  }
  
}

function draw() {
  randomSeed(777);
  //mouseX = background color   mouseY = speed/direction of squares
  white = map(mouseX, 0, width, 0, 1);
  speed = map(mouseY, 0, height, -6, 6);
  
  //black or white background
  if (white > 0.5) {
    background(255, 20);
  } else {
    background(0, 20);
  }
   
  //drawing X, Y line
  if (white > 0.5) {
    stroke(200);
  } else {
    stroke(255);
  }
  strokeWeight(2);
  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);
 
  //drawing squares
  for (i = 0; i < 1000; i ++) {
    strokeWeight(1);
    stroke(rectcolor[i]);
    quadrant2(rectX[i], rectY[i]) ;
    quadrant4(rectX[i], rectY[i]) ;
    //changing squares size every frame (speed/direction is based on mouseX)
    rectX[i] += speed ;
    rectY[i] += speed*(height/width) ;
  }
}

//drawing squares from quadrant 2.
function quadrant2(a, b) {
  noFill();
  rect(0, 0, a, b);
}

//drawing squares from quadrant 4.
function quadrant4(a, b) {
  noFill();
  rect(width, height, -a, -b);
}