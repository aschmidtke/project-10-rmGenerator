// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// initializes question prompts
function init() {
    // array of questions for the user to enter
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log("Please enter your project's title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a brief description of your project: (Required)',
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log("Please enter a description of your project!");
                    return false;
                }
            }
          },
          {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?'
          },
          {
            type: 'input',
            name: 'usage',
            message: 'How do you use this project?'
          },
          {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for this projects.',
            choices: ['GPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost']
          },
          {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines?'
          },
          {
            type: 'input',
            name: 'tests',
            message: 'What are the testing instructions'
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please enter your email for contact:',
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log("Please enter your email.");
                    return false;
                }
            }
          },
          {
            type: 'input',
            name: 'ghUser',
            message: 'Please enter your Github Username:',
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log("Please enter your Github Username.");
                    return false;
                }
            }
          }
    ])
    // stores user inputs as data
    .then(function(data) {
        writeToFile("README.md", generateMarkdown({...data}));
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README has been created!')
    });
 }

// Function call to initialize app
init();
