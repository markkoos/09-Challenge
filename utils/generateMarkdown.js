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
function generateMarkdown(stuff) {
  return 
  `# ${title}

  ${license}

  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage Information](#usage-information)
  - [Contribution Guidelines](contribution-guidelines)
  - [Test Instructions](test-instructions)
  - [Questions](questions)

  ### Installation
  ${installation}

  ### Usage Information
  ${usage}

  ### Contribution Guidelines
  ${contributing}

  ### Test Instructions:
  ${test}

  ### Questions
  https://github.com/${username}

  If you have any questions please send me an email: 
  ${email}
  `;
}

module.exports = generateMarkdown;
