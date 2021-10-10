// generates markdown 
function generateMarkdown(data) {
  return `
  ![Badge](https://img.shields.io/badge/License-${data.license}-blue.svg)


  ${data.title}

  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  https://github.com/${data.ghUser}

  Feel free to contact me at:
  ${data.email}

`;
}

// exports to main function
module.exports = generateMarkdown;
