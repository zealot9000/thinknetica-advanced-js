'use strict';

const {Shipyard} = require('./shipyard.js');
const {MotorShip} = require('../ships/motor_ship.js');

function MotorShipyard() {
    Shipyard.call(this);

    this.type = 'motor'

    this.buildMotorShip = function (name, power, material) {
        return new MotorShip(name, power, material);
    };

    this.tradeIn = function (ship) {
        if (ship.type !== this.type)
            throw new Error('Shipyard and ship type do not match.');

        return new MotorShip(ship.name, ship.matchNumber, ship.sailArea);
    }
}

MotorShipyard.prototype = Object.create(Shipyard.prototype);

module.exports = {MotorShipyard};
