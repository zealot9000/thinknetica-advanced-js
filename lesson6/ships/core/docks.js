'use strict';

function Dock(positionX, positionY) {
    this.position = { x: positionX, y: positionY };
    this.ships = [];

    this.moor = function (ship) {
        if (this.ships.includes(ship))
            throw new Error("The ship's already at the dock.");

        ship.dropAnchor;
        this.ships.push(ship);
    };

    this.unmoor = function (ship) {
        if (!this.ships.includes(ship))
            throw new Error("The ship's not on the dock.");

        ship.riseAnchor;
        this.ships.splice(this.ships.findIndex(item => item.name === ship.name), 1);
    };
}
