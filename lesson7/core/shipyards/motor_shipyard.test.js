const {MotorShipyard} = require('./motor_shipyard.js');
const {MotorShip} = require('../ships/motor_ship.js');
const {SailingShip} = require('../ships/sailing_ship.js');
const { assert } = require('chai');

describe('MotorShipyard', () => {
    let motorShipyard;

    beforeEach(() => {
        motorShipyard = new MotorShipyard('MotorShipyard');
    });

    describe('creates motor shipyard correctly', () => {
        it('returns object', () => {
            assert.isObject(motorShipyard);
        });
    });

    describe('buildMotorShip', () => {
        it('returns instance of MotorShip', () => {
            const ship = motorShipyard.buildMotorShip('MotorShip', 100, 'steel');
            assert.instanceOf(ship, MotorShip);
        });
    });

    describe('tradeIn', () => {
        it('returns new MotorShip', () => {
            const ship = new MotorShip('MotorShip', 100, 'steel');
            const newShip = motorShipyard.tradeIn(ship);
            assert.instanceOf(newShip, MotorShip);
        });
    });

    it('throws an error \'Shipyard and ship type do not match.\'', () => {
        const ship = new SailingShip('SailingShip', 2, 30);
        assert.throws(() => { motorShipyard.tradeIn(ship); }, Error, 'Shipyard and ship type do not match.');
    });
});
