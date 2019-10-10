var mode ;
var x = 0;
var n = 2000;
var stars = [];

function shootingStar(a, b, c, d, e) {
  this.starX = a;
  this.starY = b;
  this.starColor = color(c, d, e);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    
  //setting 2000 line' first location and color
  for (var i = 0 ; i<n; i++) {
    stars[i] = new shootingStar(random(0, width), 1000+i*40, random(0, 200), random(0, 200), random(0, 200));
  }
}

function draw() {
  randomSeed(777);
  //since background is transparent, draw black circle first to hide moon's trace
  fill(0);
  noStroke();
  ellipse(x+width/2, height/7, height/13+4, height/13+4);
  
  //starry background
  background(0, 20);
  for (i = 0 ; i<width/15 ; i++) {
    fill(170, 170, 240);
    noStroke();
    ellipse(random(0, width), random(0, height), 2.5, 2.5);
  }  
  
  //moving moon based on a, s, d, but not outside of the screen
  switch (mode) {
    case "LEFT" : 
      if (x > -width/2) {
        x -= 5 }
      break;
    case "RIGHT" :
      if (x < width/2) {
        x += 5 }
      break;
  }
  fill(255);
  strokeWeight(3);
  ellipse(x+width/2, height/7, height/13, height/13);
  
  //pulling up 1000 lines at once
  for (s in stars) {
    stars[s].starY -= 7;
  
    //changing line's color to white and its direction when moon touches it
    if (
      dist(stars[s].starX, stars[s].starY, x+(width/2), height/7) < height/26 
      || dist(stars[s].starX, stars[s].starY+height/14, x+(width/2), height/7) < height/26 
      || dist(stars[s].starX, stars[s].starY+height/7, x+(width/2), height/7) < height/26
      ) {
      stars[s].starColor = color(255);
      stars[s].starY += 10;
    }
    stroke(stars[s].starColor) ;
    line(stars[s].starX, stars[s].starY, stars[s].starX, stars[s].starY+height/7);
  }
}

//how a, s, d changes the mode
function keyPressed() {
  switch(key) {
    case 'a' : mode = "LEFT" ; break ;
    case 'A' : mode = "LEFT" ; break ;
    case 's' : mode = "HALT" ; break ;
    case 'S' : mode = "HALT" ; break ;
    case 'd' : mode = "RIGHT" ; break ;
    case 'D' : mode = "RIGHT" ; break ;
  }
}