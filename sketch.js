var symbolSize = 18;
var fadeInterval = 1.6;
var streams = [];
let p5canvas;

function setup() {
  p5canvas = createCanvas(innerWidth, innerHeight);

  background(0);
  var x = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-1500, 0));
    streams.push(stream);
    x += symbolSize;
  }

  textSize(symbolSize);
}

function draw() {
  background(0, 75);
  streams.forEach(function (stream) {
    stream.render();
  });

  if (frameCount >= 1200) {
    noLoop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
