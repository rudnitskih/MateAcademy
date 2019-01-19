import {Orc} from './Orc.js';

function Game() {
  const orc1 = new Orc({
    x: 0,
    y: 2
  });

  const orc2 = new Orc({
    x: 0,
    y: 4
  });

  orc1.debug();
  orc2.debug();

  orc1.move({
    offsetX: 0,
    offsetY: 1
  });

  orc1.attack(orc2);

  orc1.debug();
  orc2.debug();

  orc1._getRandomInt();
}

new Game();
