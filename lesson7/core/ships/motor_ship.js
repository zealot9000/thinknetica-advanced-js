'use strict';

const {Ship} = require('./ship.js');

function MotorShip (name, power, material) {
    Ship.call(this, name, power, material);
    this.type = 'motor';
    this.power = power;
    this.material = material;
}

MotorShip.prototype = Object.create(Ship.prototype);

module.exports = {MotorShip};
