// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![license](https://img.shields.io/badge/license-${license}-green)`
  }
  return `N/A`;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ( license !== 'None') {
    return console.log("https://img.shields.io/badge/license-${license}-green");
  }
  return `N/A`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## License Badge
${renderLicenseBadge(data.license)}

## Description
    ${data.description}

## Table of Contents
    [Installation](#installation)
    [Usage](#usage)
    [License](#License)
    [Contributing](#contributing)
    [Tests](#tests)
    [Questions](#questions)

## Installation
    ${data.installation}

## Usage
    ${data.usage}

## License
    ${renderLicenseLink(data.license)}

## Contributing
    ${data.guidelines}

## Tests
    ${data.test}

## Questions
    Github: ${data.github}

    Contact: ${data.email}

`;
}

module.exports = generateMarkdown;

