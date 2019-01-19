import {Unit} from './Unit.js';

export class Orc extends Unit {
  constructor({x, y}) {
    super({
      minHealth: 10,
      maxHealth: 15,
      x,
      y
    });
  }

  attack(unit) {
    if (this.isCanAttack(unit)) {
      console.log('Attacking!!!');
      unit.health -= 5;
    } else {
      throw new Error('Out of distance!!!');
    }
  }

  isCanAttack(unit) {
    return Math.abs(unit.x - this.x) <= 1 && Math.abs(unit.y - this.y) <= 1;
  }
}
