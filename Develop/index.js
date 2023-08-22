// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your ReadME:',
    },

    {
        type: 'input',
        name: 'description',
        messsage: 'Add a description to your ReadME:',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How to install:',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How to use:',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'AGP', 'None',]
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute:',
    },

    {
        type: 'input',
        name: 'test',
        message: 'How to test:',
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username:',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your Email:',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
