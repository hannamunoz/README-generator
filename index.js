// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// will need a require for a js to generate ReaME

// TODO: Create an array of questions for user input
// Required information needed
// What is your project title?
// Description of project
// Installation instructions
// Usage instructions
// Contrubutors 
// Tests
// Choose your license
// If user picks other option, they will need an input
// Under questions section
// GitHub username - links to your profile
// email address
inquirer.prompt = ([
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
        default:  "hannamunoz@gmail.com",
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
        type: 'list',
        name: 'license',
        message: "Please choose a license you would like to use",
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'Other'],
    },
]).then(answers => {
    const {title, description, installation, usage, license, contributors, contributing, tests, username, contact, linkedIn} = answers;

    const ReadMeFile = `# ${title}
    ![GitHub License](${badge})
    
    ## *Table of Contents*
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)`
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
