'use strict';

function Shipyard() {
    this.type = '';
    this.shipRepaint = function (ship, color) {
        ship.color = color;
    }

    this.shipRepair = function (ship) {
        if (ship.type !== this.type)
            throw new Error('Shipyard and ship type do not match.');

        ship.health = 100;
    }
}

module.exports = {Shipyard};
