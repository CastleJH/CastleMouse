var mode ;
var x = 0;
var n = 1000;
var rainX = [] ;
var rainY = [] ;
var rainColor = [] ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //setting 1000 line' first location and color
  for (var i = 0 ; i<1000; i++) {
    rainX[i] = random(0, windowWidth);
  }
  for (i = 0 ; i<1000; i++) {
    rainY[i] = n+i*80;
  }
  for (i = 0; i<1000; i++) {
    rainColor[i] = color(random(0, 240), random(0, 240), random(0, 240));
  }
}


function draw() {
  randomSeed(777);
  //starry background
  background(0);
  for (i = 0 ; i<windowWidth/15 ; i++) {
    fill(150, 150, 220);
    noStroke();
    ellipse(random(0, windowWidth), random(0, windowHeight), 2.5, 2.5);
  }  
  
  //moving circle based on a, s, d, but not outside of the screen
  switch (mode) {
    case "LEFT" : 
      if (x > -windowWidth/2) {
        x -= 3 }
      break;
    case "RIGHT" :
      if (x < windowWidth/2) {
        x += 3 }
      break;
  }
  translate(x, 0);
  fill(255);
  strokeWeight(3);
  ellipse(windowWidth/2, windowHeight/8, 60, 60);
  
  //pulling up 1000 lines at once
  translate(-x, 0);
  for (i = 0 ; i<1000 ; i++) {
      rainY[i] -= 7;
  }
  //changing line's color to white when circle touches it
  for (i = 0 ; i<1000 ; i++) {
    if (dist(rainX[i], rainY[i], x+(windowWidth/2), windowHeight/8) < 30 || dist(rainX[i], rainY[i]+80, x+(windowWidth/2), windowHeight/8) < 30) {
      rainColor[i] = color(255);
    }
    stroke(rainColor[i]) ;
    line(rainX[i], rainY[i], rainX[i], rainY[i]+100);
  }
}

//how a, s, d changes the mode
function keyPressed() {
  switch(key) {
    case 's' : mode = "HALT" ; break ;
    case 'a' : mode = "LEFT" ; break ;
    case 'd' : mode = "RIGHT" ; break ;
  }
}