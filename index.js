// imports
const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./src/questions.js");
// import different employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// HTML Generation
const generateHTML = require("./src/genHTML.js");
// employee array
const employees = [];
// output html
const outputHTML = "./dist/team.html";
// Engineer
function getEngineer() {
    inquirer.prompt(questions.empQuestions)
    .then((data) => {
        inquirer.prompt(questions.engQuestion)
        .then((engData) => {
            const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                engData.gituser
            );
            employees.push(engineer);
            chooseEmployee();
        });
    });
}
// Intern
function getIntern() {
    inquirer.prompt(questions.empQuestions)
    .then((data) => {
        inquirer.prompt(questions.internQuestion)
        .then((internData) => {
            const intern = new Intern(
                data.name,
                data.id,
                data.email,
                internData.school
            );
            employees.push(intern);
            chooseEmployee();
        })
    });
}   
// choice of employee
function chooseEmployee() {
    inquirer.prompt(questions.menuQuestions)
    .then((data) => {
        switch(data.empType) {
            case "Engineer":
                getEngineer();
                break;
            case "Intern":
                getIntern();
                break;
            default:
                console.log(employees);
                fs.writeFile(outputHTML, generateHTML(employees), (err) =>
                    err ? console.error(err) : console.log(`${outputHTML} created!`)
                );
        }
    });
}

// main function
async function main() {
    // first get manager's details
    inquirer.prompt(questions.managerQuestions)
    .then((data) => {
        const manager = new Manager(
            data.name,
            data.id,
            data.email,
            data.office
        );
        employees.push(manager);
        chooseEmployee();
    })
};
// call main function
main()