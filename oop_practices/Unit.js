export class Unit {
  constructor({minHealth, maxHealth, x, y}) {
    this.health = this._getRandomInt(minHealth, maxHealth);
    this.x = x;
    this.y = y;
  }

  _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  move({offsetX, offsetY}) {
    console.log('Moving!!!');
    this.x += offsetX;
    this.y += offsetY;
  }

  debug() {
    console.log(this);
  }
}
