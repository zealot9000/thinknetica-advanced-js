const {SailingShip} = require('./sailing_ship.js');
const { assert } = require('chai');

describe('SailingShip', () => {
    let sailingShip;

    beforeEach(() => {
        sailingShip = new SailingShip('SailingShip', 30, 'metal')
    });

    describe('creates sailing ship correctly', () => {
        it('returns object', () => {
            assert.isObject(sailingShip);
        });
    });
});
