function writeText(x, y, speed, first, opacity) {
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;
  this.switchInterval = round(random(2, 20));
  this.first = first;
  this.opacity = opacity;

  this.setToRandomSymbol = function () {
    if (frameCount % this.switchInterval == 0) {
      // Food Emojis
      this.value = String.fromCodePoint(0x1f35e + round(random(0, 34)));
    }
  };

  this.rain = function () {
    if (this.y >= height) {
      this.y = 0;
    } else {
      this.y += this.speed;
    }
  };
}
