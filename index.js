// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description to your project:"
    },
    {
        type: "type",
        name: "installation",
        message: "Please provide the installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on how to use your app:"
    },
    {
        type: "input",
        name: "credits",
        message: "Please provide the contributing parties to the project:"
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please choose a license for your project:",
        choices: ["MIT License", "GNU General Public License", "Apache License", "BSD License"]

    },
    {
        type: "input",
        name: "github",
        message: "Please provide your github username:"
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address:"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges' links you would like:"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err =>
        err ? console.error(err) : console.log("Success! You have generated a README.md file!")
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            writeToFile("./output/readme.md", response);
        })
        .catch((error) => {
            console.log(error);

        })
}

// Function call to initialize app
init();
