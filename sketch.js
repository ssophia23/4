function setup() {
  createCanvas(800, 800);
  background(225);
}

function draw() {
  v = frameCount*20;
  line(v,0,800,v)
  line(v,800,0,v)
  line(v,0,0,800-v);
  line(800-v,800,800,v);
}