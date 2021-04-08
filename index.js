// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
      name: 'name',
      message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description.',
    },
    {
        type: 'input',
        name: 'instructions.',
        message: 'Enter installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information.',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Enter contribution guidelines.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
