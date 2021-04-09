// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## License Badge

## Description
    ${data.description}

## Table of Contents
    <a name="Installation></a>
    Usage link
    License link
    Contributing link
    Tests link
    Questions

## Installation
    ${data.installation}

## Usage
    ${data.usage}

## License
    ${data.license}

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

