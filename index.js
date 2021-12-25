// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    }, {
        type: "input",
        name: "badge",
        message: "Please provide the badges' links you would like:"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description to your project:"
    },
    {
        type: "type",
        name: "installations",
        message: "Please provide the installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage:"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide the project license or the badge link:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties to the project:"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide project tests:"
    }, {
        type: "input",
        name: "username",
        message: "Please provide your github username:"
    },
    {
        type: "input",
        name: "repo",
        message: "Please provide your repo link:"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err =>
        err ? console.error(err) : console.log("Success!")
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            // console.log(response);
            fs.writeFile(response.title, response);
        })
        .catch((error) => {
            console.log(error);

        })
}

// Function call to initialize app
init();
