// Intern class based on Employee (need to import Employee)
const Employee = require('./Employe.js');
class Intern extends Employee {
    // properties
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
     // methods
     getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}    
     // export 
    module.exports = Intern;