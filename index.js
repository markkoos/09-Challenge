// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const generateMarkdown = require(`/g/utils/generateMarkdown.js`)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `Enter your project title.`,
        name: `title`,
    },
    {
        type: `input`,
        message: `Give a description of your project.`,
        name: `description`,
    },
    {
        type: `input`,
        message: `Enter installation instructions.`,
        name: `installation`,
    },
    {
        type: `input`,
        message: `Enter usage information.`,
        name: `usage`,
    },
    {
        type: `input`,
        message: `Enter contribution guidelines.`,
        name: `contributing`,
    },
    {
        type: `input`,
        message: `Enter test instructions.`,
        name: `tests`,
    },
    {
        type: `list`,
        message: `Choose a license for your application.`,
        name: `license`,
        choices: [
            {
                name: `Apache 2.0`,
                value: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
            },
            {
                name: `Eclipse Public License 1.0`,
                value: `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
            },
            {
                name: `Do What the F*** You Want to Public License`,
                value: `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`,
            },
            {
                name: `The MIT License`,
                value: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
            },
            {
                name: `Mozilla Public License 2.0`,
                value: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
            }
        ]
    },
    {
        type: `input`,
        message: `Enter your GitHub username.`,
        name: `username`,
    },
    {
        type: `input`,
        message: `Enter your email address.`,
        name: `email`,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

