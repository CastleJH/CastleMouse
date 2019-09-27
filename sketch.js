var mode ;
var x = 0;
var n = 2000;
var rainX = [] ;
var rainY = [] ;
var rainColor = [] ;

function setup() {
  createCanvas(windowWidth, windowHeight);
    
  //setting 1000 line' first location and color
  for (var i = 0 ; i<n; i++) {
    rainX[i] = random(0, windowWidth);
  }
  for (i = 0 ; i<n; i++) {
    rainY[i] = 1000+i*40;
  }
  for (i = 0; i<n; i++) {
    rainColor[i] = color(random(0, 200), random(0, 200), random(0, 200));
  }
}


function draw() {
  randomSeed(777);
  //starry background
  background(0);
  for (i = 0 ; i<windowWidth/15 ; i++) {
    fill(170, 170, 240);
    noStroke();
    ellipse(random(0, windowWidth), random(0, windowHeight), 2.5, 2.5);
  }  
  
  //moving moon based on a, s, d, but not outside of the screen
  switch (mode) {
    case "LEFT" : 
      if (x > -windowWidth/2) {
        x -= 4 }
      break;
    case "RIGHT" :
      if (x < windowWidth/2) {
        x += 4 }
      break;
  }
  translate(x, 0);
  fill(255);
  strokeWeight(2);
  ellipse(windowWidth/2, windowHeight/7, windowHeight/13, windowHeight/13);
  
  //pulling up 1000 lines at once
  translate(-x, 0);
  for (i = 0 ; i<n ; i++) {
    rainY[i] -= 7;
  
    //changing line's color to white and its direction when moon touches it
    if (
      dist(rainX[i], rainY[i], x+(windowWidth/2), windowHeight/7) < windowHeight/26 
      || dist(rainX[i], rainY[i]+windowHeight/14, x+(windowWidth/2), windowHeight/7) < windowHeight/26 
      || dist(rainX[i], rainY[i]+windowHeight/7, x+(windowWidth/2), windowHeight/7) < windowHeight/26
      ) {
      rainColor[i] = color(255);
      rainY[i] += 8
    }
    stroke(rainColor[i]) ;
    line(rainX[i], rainY[i], rainX[i], rainY[i]+windowHeight/7);
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
