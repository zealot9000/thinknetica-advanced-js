'use strict';

function Ship(name) {
    let _isAnchorDroped = false;
    this.name = name;
    this.position = { x: 0, y: 0 };
    this.speed = 0;
    this.distance = 0;
    this.moveTo = function (position) {
        if (_isAnchorDroped)
            throw new Error('You need to rise anchor');

        this.distance += this._calculateDistanceBetweenTwoPoints(this.position, position);

        this.position = {
            x: position.x,
            y: position.y,
        }
    };

    this.isAnchorDroped = function () {
        console.log('isAnchorDroped', this);
        return _isAnchorDroped;
    };

    /**
     * @param {boolean} droped
     */
    this.dropAnchor = () => {
        if (this.speed !== 0)
            throw new Error('Speed must be 0');

        _isAnchorDroped = true;
    };

    this.riseAnchor = () => {
        _isAnchorDroped = false;
    };

    this.move = function (direction) {
        if (this._isAnchorDroped) {
            throw new Error('You have to rise anchor');
        }
        if (this._speed === 0) {
            throw new Error('You have to increase speed');
        }

        let {x, y} = this.position;

        switch (direction) {
            case 'n': y++; break;
            case 's': y--; break;
            case 'e': x++; break;
            case 'w': x--;
        }

        this.moveTo({x, y});
    };

    this._calculateDistanceBetweenTwoPoints = function (currentPosition, newPosition) {
        return Math.round(Math.sqrt(Math.pow((newPosition.x - currentPosition.x),2) + Math.pow((newPosition.y - currentPosition.y), 2)));
    };
}
