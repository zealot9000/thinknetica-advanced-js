'use strict';

function Student (fullName) {
    let splitFullName = fullName.split(' ');
    this.lastName = splitFullName[0];
    this.firstName = splitFullName[1];
    this.secondName = splitFullName[2];
    this._healthy = true;
    this.fullName = function () {
        `${splitFullName[0]} ${splitFullName[1]} ${splitFullName[2]}`;
    }
    this.initialName = function () {
        return splitFullName[0] + ' ' + splitFullName[1][0] + splitFullName[2][0];
    }
    this.secondName = splitFullName[2];
    this.studentHealth = function () {
        return this._healthy;
    }
}