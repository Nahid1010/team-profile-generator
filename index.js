// imports
const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./src/question.js");
// import different employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// HTML Generation
const generateHTML = require("./src/genHTML.js");