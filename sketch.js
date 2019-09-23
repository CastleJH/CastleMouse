function setup() {
  createCanvas(900, 600);
  background(220);
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
}

function draw() {
  background(220);
  rain();
  noRain();
  human(width/2, height/2+100);
  if (mouseIsPressed) {
    umbrella(mouseX+20, mouseY-250, r, g, b);
  } else {
    r = random(0, 255);
    g = random(0, 255);
    b= random(0, 255);
  }
}

//rain
function rain() {
  for (var i=0; i<20; i++) {
    var rainX = random(0, width);
    var rainY = random(0, height);
    var rainChange = random(10, 15);
    stroke(0, 0, 255);
    strokeWeight(1);
    line(rainX, rainY, rainX+rainChange, rainY+rainChange*3.33);
  }
}

//human
function human(x, y) {
  //shadow
  fill(180);
  noStroke();
  ellipse(x, y+180, 45, 20);
  //leg
  stroke(0);
  strokeWeight(3);
  line(x-10, y+100, x-10, y+180);
  line(x+10, y+100, x+10, y+180);
  //left hand
  line(x-9, y+40, x-30, y+90);
  //body
  fill(255, 0, 0);
  triangle(x, y-20, x-20, y+130, x+20, y+130);
  //face
  fill(255);
  ellipse(x, y, 55, 60);
  line(x-10, y-10, x-10, y-7);
  line(x+10, y-10, x+10, y-7);
  if (mouseIsPressed) {
    //mouth
    line(x-10, y+10, x-7, y+13);
    line(x+10, y+10, x+7, y+13);
    line(x-7, y+13, x-3, y+15);
    line(x+7, y+13, x+3, y+15);
    line(x-3, y+15, x+3, y+15);
    //right hand
    line(x+9, y+40, x+45, y+60);
  } else {
    //face
    line(x-10, y+15, x+10, y+15);
    //right hand
    line(x+9, y+40, x+30, y+90);
  } 
}

//umbrella
function umbrella(x, y, r, g, b) {
  //stick
  strokeWeight(3);
  stroke(255, 0, 0);
  line(x, y-5, x, y+250);
  line(x, y+250, x-5, y+258);
  line(x-5, y+258, x-10, y+260);
  line(x-10, y+260, x-15, y+258);
  line(x-15, y+258, x-20, y+250);
  //upper
  noStroke();
  fill(r, g, b);
  triangle(x, y, x-150, y+90, x-97.5, y+105);
  fill(r, g, b);
  triangle(x, y, x+150, y+90, x+97.5, y+105);
  fill(r+30, g+30, b+30);
  triangle(x, y, x-97.5, y+105, x-37.5, y+112.5);
  fill(r+30, g+30, b+30);
  triangle(x, y, x+97.5, y+105, x+37.5, y+112.5);
  fill(r, g, b);
  triangle(x, y, x-37.5, y+112.5, x+37.5, y+112.5);    
}

//no rain
function noRain() {
  if (mouseIsPressed) {
    fill(220);
    noStroke();
    rect(mouseX-130, mouseY-160, 300, height);
  }
}