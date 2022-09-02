// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function readME(stuff) { 
  return `# ${stuff.title}

${stuff.license}

## Description
${stuff.description}

## Table of Contents
- [Installation](#installation)
- [Usage Information](#usage-information)
- [Contribution Guidelines](contribution-guidelines)
- [Test Instructions](test-instructions)
- [Questions](questions)

### Installation
${stuff.installation}

### Usage Information
${stuff.usage}

### Contribution Guidelines
${stuff.contributing}

### Test Instructions:
${stuff.tests}

### Questions
https://github.com/${stuff.username}

If you have any questions please send me an email: 
${stuff.email}`
}

module.exports = readME;
