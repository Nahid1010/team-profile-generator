// Manager class based on Employee (need to import Employee)
const Employee = require('./Employe.js');
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // methods
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}
        //ecport
    module.exports = Manager;