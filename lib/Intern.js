const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    module.exports = Intern;