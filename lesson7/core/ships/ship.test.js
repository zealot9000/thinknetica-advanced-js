const {Ship} = require('./ship.js');
const { assert } = require('chai');

describe('Ship', () => {
    let ship;

    beforeEach(() => {
        ship = new Ship ();
    });

    describe('creates ship', () => {
        it('returns object', () => {
            assert.isObject(ship);
        });
    })

    describe('isAnchorDroped', () => {
        it('returns false', () => {
            const anchorState = ship.isAnchorDroped();
            assert.equal(anchorState, false);
        });

        it('returns true', () => {
            ship.dropAnchor();
            const anchorState = ship.isAnchorDroped();
            assert.equal(anchorState, true);
        });
    });

    describe('dropAnchor', () => {
        it('throws an error \'Speed must be 0\'', () => {
            ship.speed = 10;
            assert.throws(() => { ship.dropAnchor() }, Error, 'Speed must be 0');
        });

        it('returns true', () => {

            ship.dropAnchor();
            assert.equal(ship.isAnchorDroped(), true);
        })
    });

    describe('riseAnchor', () => {
        it('isAnchorDropped() returns false', () => {
            ship.riseAnchor();
            assert.equal(ship.isAnchorDroped(), false);
        })
    });

    describe('moveTo', () => {
        let position = {x: 14, y: 5};

        it('throws an error \'You need to rise anchor\'', () => {
            ship.dropAnchor();
            assert.throws(() => { ship.moveTo(position) }, Error, 'You need to rise anchor');
        });

        it('changes position', () => {
            ship.moveTo(position);
            assert.deepEqual(ship.position, position);
        });
    });

    describe('move', () => {
        it('throws an error \'You need to rise anchor\'', () => {
            ship.dropAnchor();
            assert.throws(() => { ship.move('n') }, Error, 'You need to rise anchor');
        });

        it('increases the distance by 1 and increases position.x by 1', () => {
            assert.increasesBy(() => { ship.move('e') }, ship, 'distance', 1);
            assert.deepEqual(ship.position, {x: 1, y: 0});
        });

        it('increases the distance by 1 and decreases position.x by 1', () => {
            assert.increasesBy(() => { ship.move('w') }, ship, 'distance', 1);
            assert.deepEqual(ship.position, {x: -1, y: 0});
        });

        it('increases the distance by 1 and increases position.y by 1', () => {
            assert.increasesBy(() => { ship.move('n') }, ship, 'distance', 1);
            assert.deepEqual(ship.position, {x: 0, y: 1});
        });

        it('increases the distance by 1 and decreases position.y by 1', () => {
            assert.increasesBy(() => { ship.move('s') }, ship, 'distance', 1);
            assert.deepEqual(ship.position, {x: 0, y: -1});
        });
    });
});
