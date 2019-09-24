var num = 3000;
var ax = [];
var ay = [];

function setup() {
  createCanvas(900, 600);
  for (var i=0; i<num; i++) {
    ax[i] = width/2;
    ay[i] = height/2;
  }
}

function draw() {
  background(220);
  rain();
  if (mouseIsPressed) {
    for (var i=1; i<num; i++) {
      ax[i-1] = ax[i];
      ay[i-1] = ay[i];
    }
    ax[num-1] = mouseX;
    ay[num-1] = mouseY;

    for (var j=1; j<num; j++) {
      stroke(200, 255, 255);
      strokeWeight(10);
      line(ax[j-1], ay[j-1], ax[j], ay[j]);
    }
  }else {
    ax[i] = ax[i];
    ay[i] = ay[i];
  }
  human(width/2, height/2+100);
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
    line(x-9, y+40, x-45, y+60);
    line(x+9, y+40, x+45, y+60);
  } else {
    //mouth
    line(x-10, y+15, x+10, y+15);
    //right hand
    line(x-9, y+40, x-30, y+90);
    line(x+9, y+40, x+30, y+90);
  } 
}