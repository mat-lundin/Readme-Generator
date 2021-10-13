// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
let repo;

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Enter a title: ',
    validate: function(input){
        if (input) {
            return true
        } else {
            // console.log('Cannot be blank!')
            return false
        }
    },
    name: 'title'
},
// {
//     type: 'input',
//     message: 'Enter the name of the repo (copy and paste from github URL): ',
//     name: 'repo'
// },
{
    type: 'input',
    message: 'Enter a description: ',
    validate: function(input){
        if (input) {
            return true
        } else {
            // console.log('Cannot be blank!')
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
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) => {
        err ? console.error(err) : console.log('Readme file generated!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt (questions)
            .then((data) => {
            
                // badgeUrl = `https://img.shields.io/github/license/mat-lundin/${data.repo}`
                // repo = data.repo
                // generateMarkdown.renderLicenseBadge(repo);
                // console.log(generateMarkdown.renderLicenseBadge(data.repo))
                writeToFile('readme.md',generateMarkdown.generateMarkdown(data));
            })
};

// // export
// module.exports = {repo}


// Function call to initialize app
init();
