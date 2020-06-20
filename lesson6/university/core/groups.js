'use strict';

function Group (number) {
    this.number = number;
    this.studentList = [];

    this.addStudent = function (student) {
        if (this._isStudentInGroup(student)) {
            throw new Error('Student is already in this group');
        }
        this.studentList.push(student);
    };

    this.sickList = function () {
        return this.studentList.filter(student => !student.studentHealth());
    };

    this._isStudentInGroup = function (student) {
        return this.studentList.some(stud => stud.fullName() === student.fullName());
    };
}
