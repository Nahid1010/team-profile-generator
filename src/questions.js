// all questions
const questions = {
    "managerQuestions" : [{
        type: "input",
        message: "Please enter team manager's name: ",
        name: "name"
    }, {
        type: "input",
        message: "Please enter team manager's ID: ",
        name: "id"
    }, {
        type: "input",
        message: "Please enter team manager's email: ",
        name: "email"
    }, {
        type: "input",
        message: "Please enter team manager's office number:",
        name: "office"
    }],
    "menuQuestions" : [{
        type: 'list',
        name: 'empType',
        message: 'Please select a employee type: ',
        choices: ["Engineer", "Intern", "Done"]
    }],
    "empQuestions": [{
        type: "input",
        message: "Please enter name: ",
        name: "name"
    }, {
        type: "input",
        message: "Please enter ID: ",
        name: "id"
    }, {
        type: "input",
        message: "Please enter email: ",
        name: "email"
    }],
    "engQuestion": [{
        type: "input",
        message: "Please enter github username:",
        name: "gituser"
    }],
    "internQuestion": [{
        type: "input",
        message: "Please enter school name:",
        name: "school"
    }]
};

// export 
module.exports = questions;