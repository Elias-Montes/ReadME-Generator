// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return ''
  } else {
    return `![license](https://img.shields.io/badge/license-${license}-green)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const markdown = `
  # ${data.title}  ${renderLicenseBadge(data.license)}

  ## Table of Contents:

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation:

  - ${data.installation}

  ## Usage:

  - ${data.usage}

  ## License:

  - ${data.license}

  ## Contributing:

  - ${data.contributing}

  ## Tests:

  - ${data.tests}

  ## Questions:

  - Github: ${data.github}
  - Email: ${data.email}
  `
  return markdown
}

module.exports = generateMarkdown;
