'use strict';

const {Shipyard} = require('./shipyard.js');
const {SailingShip} = require('../ships/sailing_ship.js');

function SailingShipyard() {
    Shipyard.call(this);

    this.type = 'sailing'

    this.buildSailingShip = function (name, matchNumber, sailArea) {
        return new SailingShip(name, matchNumber, sailArea);
    };

    this.tradeIn = function (ship) {
        if (ship.type !== this.type)
            throw new Error('Shipyard and ship type do not match.');

        return new SailingShip(ship.name, ship.matchNumber, ship.sailArea);
    }
}

SailingShipyard.prototype = Object.create(Shipyard.prototype);

module.exports = {SailingShipyard};
