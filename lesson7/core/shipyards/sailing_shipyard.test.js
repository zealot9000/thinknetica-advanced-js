const {SailingShipyard} = require('./sailing_shipyard.js');
const {MotorShip} = require('../ships/motor_ship.js');
const {SailingShip} = require('../ships/sailing_ship.js');
const { assert } = require('chai');

describe('SailingShipyard', () => {
    let sailingShipyard;

    beforeEach(() => {
        sailingShipyard = new SailingShipyard('SailingShipyard');
    });

    describe('creates sailing shipyard correctly', () => {
        it('returns object', () => {
            assert.isObject(sailingShipyard);
        });
    });

    describe('buildSailingShip', () => {
        it('returns instance of SailingShip', () => {
            const ship = sailingShipyard.buildSailingShip('SailingShip', 2, 30);
            assert.instanceOf(ship, SailingShip);
        });
    });

    describe('tradeIn', () => {
        it('returns new SailingShip', () => {
            const ship = new SailingShip('SailingShip', 2, 30);
            const newShip = sailingShipyard.tradeIn(ship);
            assert.instanceOf(newShip, SailingShip);
        });
    });

    it('throws an error \'Shipyard and ship type do not match.\'', () => {
        const ship = new MotorShip('MotorShip', 100, 'carbone');
        assert.throws(() => { sailingShipyard.tradeIn(ship); }, Error, 'Shipyard and ship type do not match.');
    });
});
