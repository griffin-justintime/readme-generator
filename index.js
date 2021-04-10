// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
      name: 'title',
      message: 'Enter a project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['Apache', 'GPL', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter a link to your Github profile:',

    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Here's your README!");
        }
        
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        writeToFile('README.md', generateMarkdown(response))
    })
}

// Function call to initialize app
init();
