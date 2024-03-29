// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


// Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Enter a title: ',
    validate: function(input){
        if (input) {
            return true
        } else {
            
            return false
        }
    },
    name: 'title'
},
{
    type: 'input',
    message: 'Enter the repository URL: ',
    name: 'repo'
},
{
    type: 'input',
    message: 'Enter a description: ',
    validate: function(input){
        if (input) {
            return true
        } else {
            return false
        }
    },
    name: 'desc'
},
{
    type: 'input',
    message: 'Enter Installation details: ',
    name: 'install'
},
{
    type: 'input',
    message: 'Enter Usage details: ',
    name: 'usage'
},
{
    type: 'list',
    message: 'Choose a license',
    name: 'license',
    choices: ['MIT','None']
},
{
    type: 'input',
    message: 'Who contributed to this repo?',
    name: 'contributing'
},
{
    type: 'input',
    message: 'Enter Tests details: ',
    name: 'tests'
},
{
    type: 'input',
    message: 'Enter Questions details: ',
    name: 'questions'
},
{
    type: 'list',
    message: 'Do you have a screenshot?',
    choices: ['No','Yes'],
    name: 'imageYN'
},
{
    type: 'input',
    message: 'Enter the file path to your screenshot: ',
    // help from https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
    when: (answers) => answers.imageYN === 'Yes',
    name: 'screenshot'
},
{
    type: 'list',
    message: 'Do you have a demo video link?',
    choices: ['No','Yes'],
    name: 'videoYN'
},
{
    type: 'input',
    message: 'Enter the demo video URL: ',
    // help from https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f
    when: (answers) => answers.videoYN === 'Yes',
    name: 'videoUrl'
},];

// write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        err ? console.error(err) : console.log('Readme file generated!');
    })
}

// Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
            .then((data) => {
                writeToFile('./readmeGen/readme.md',generateMarkdown.generateMarkdown(data));
            })
};

init();
