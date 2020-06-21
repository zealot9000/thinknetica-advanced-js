'use strict';

const {Ship} = require('./ship.js');

function SailingShip (name, matchNumber, sailArea) {
    Ship.call(this, name, matchNumber, sailArea);
    this.type = 'sailing';
    this.matchNumber = matchNumber;
    this.sailArea = sailArea;
}

SailingShip.prototype = Object.create(Ship.prototype);

module.exports = {SailingShip};
