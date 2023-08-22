// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer.prompt = ([
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
        choices: ['MIT', 'AGP', 'None',],
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

]).then(response => {
    writeToFile(response);
});

const askUser = () => {
    return inquirer.prompt
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdownFile = generateMarkdown(data)
    fs.writeFile(fileName, markdownFile, error =>{
        if (error){
            return console.log(error);
        }
        console.log('Awesome! The ReadMe was created.')
    });
}

// TODO: Create a function to initialize app
function init() {
    askUser()
    .then((answers) => writeToFile(`${answers.title}`, answers))
};

// Function call to initialize app
init();
