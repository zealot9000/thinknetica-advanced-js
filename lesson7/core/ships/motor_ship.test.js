const {MotorShip} = require('./motor_ship.js');
const { assert } = require('chai');

describe('MotorShip', () => {
    let motorShip;

    beforeEach(() => {
        motorShip = new MotorShip('MotorShip', 30, 'metal')
    });

    describe('creates motor ship correctly', () => {
        it('returns object', () => {
            assert.isObject(motorShip);
        });
    });
});
