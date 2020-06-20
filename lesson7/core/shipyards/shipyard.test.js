const {Shipyard} = require('./shipyard.js');
const {Ship} = require('../ships/ship.js');
const { assert } = require('chai');

describe('Shipyard', () => {

    let shipyard;
    let ship;

    beforeEach(() => {
        shipyard = new Shipyard('Shipyard');
        ship = new Ship('Supership');
    });

    describe('creates shipyard correctly', () => {
        it('returns object', () => {
            assert.isObject(shipyard);
        });
    });

    describe('shipRepaint', () => {
        it('changes ship color to yellow', () => {
            shipyard.shipRepaint(ship, 'black');
            assert.equal(ship.color, 'black');
        })
    })

    describe('shipRepair', () => {
        it('repairs ship', () => {
            ship.health = 90;
            shipyard.shipRepair(ship);
            assert.equal(ship.health, 100);
        })

        it('throws an error \'Shipyard and ship type do not match.\'', () => {
            ship.health = 90;
            ship.type = 'MotorShip';
            assert.throws(() => { shipyard.shipRepair(ship); }, Error, 'Shipyard and ship type do not match.');
        });
    })
});
