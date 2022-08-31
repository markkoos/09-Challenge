// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);

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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

