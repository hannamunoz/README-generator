// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        // Username
        type: 'input',
        name: 'username',
        message: "Enter your GitHub Username",
        default: "hannamunoz",
    },
    {
        // Contact 
        type: 'input',
        name: 'contact',
        message: "Enter your email address or best point of contact",
        default: "hannamunoz@gmail.com",
    },
    {
        // LinkedIn URL
        type: 'input',
        name: 'linkedIn',
        message: "Enter your LinkedIn profile URL",
        default: "https://www.linkedin.com/in/hanna-munoz-179993b2/",
    },
    {
        // Project title
        type: 'input',
        name: 'title',
        message: "Enter the title of your project",
        default: "My Project",
    },
    {
        // Project description
        type: 'input',
        name: 'description',
        message: "Enter a short project description",
        default: "My Project Description",
    },
    {
        // Installation instructions
        type: 'input',
        name: 'installation',
        message: "Enter installation instructions",
        default: "npm i inquirer",
    },
    {
        // Usage information
        type: 'input',
        name: 'usage',
        message: "Enter any usage information",
        default: "Answer prompted questions to generate ReadME",
    },
    {
        // Contribution guidelines
        type: 'input',
        name: 'contribution',
        message: "Add any contribution guidelines",
        default: "Please use a new branch before contributing",
    },
    {
        // Contributors
        type: 'input',
        name: 'contributors',
        message: "Who contributed to this project?",
        default: "Hanna Munoz",
    },
    {
        // Tests
        type: 'input',
        name: 'tests',
        message: "Are there any test instructions?",
    },
    {
        // License choice
        type: 'checkbox',
        name: 'license',
        message: "Please choose a license you would like to use",
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'Open'],
    }
]).then((answers) => {
    const { title, description, installation, usage, license, contributors, 
        contribution, tests, username, contact, linkedIn } = answers;
    let licenseBadge;
    let licenseUrl;
console.log(license)
    switch (license[0]) {
        case 'MIT':
            licenseBadge = 'https://img.shields.io/badge/License-MIT-blue';
            licenseUrl = 'https://opensource.org/licenses/MIT';
            break;
        case 'GNU':
            licenseBadge = 'https://img.shields.io/badge/License-GNU-green';
            licenseUrl = 'https://opensource.org/licenses/gpl-license';
            break;
        case 'Apache':
            licenseBadge = 'https://img.shields.io/badge/License-Apache--2.0-yellow';
            licenseUrl = 'https://opensource.org/licenses/Apache-2.0';
            break;
        case 'ISC':
            licenseBadge = 'https://img.shields.io/badge/License-ISC-orange';
            licenseUrl = 'https://opensource.org/licenses/ISC';
            break;
        case 'Open':
            licenseBadge = 'https://img.shields.io/badge/License-Open-red';
            licenseUrl = 'https://opensource.org/licenses/OSL-3.0';
    }

    const ReadMeFile =
`# ${title}
[![GitHub License](${licenseBadge})](${licenseUrl})

---------------

## *Table of Contents*
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Author](#author)
- [Questions](#questions)

---------------

## *Description*
${description}

---------------

## *Installation*
${installation}

---------------

## *Usage*
${usage}

---------------

## *Contributing*
${contribution}

---------------

## *Tests*
${tests}

---------------

## *Author*
${contributors}

---------------

## *Questions*
Please feel to reach me at any of the points of contact below:
- GitHub: github.com/${username}
- Email: ${contact}
- LinkedIn: ${linkedIn}

---------------

This project is ${license} licensed`;

    fs.writeFile("README.md", ReadMeFile, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("ReadMe is all set!");
        }
    });
});


