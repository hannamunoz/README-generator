// TODO: Include packages needed for this application

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
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "Enter your GitHub Username",
        default: "hannamunoz",
    },
    {
        type: 'input',
        name: 'contact',
        message: "Enter your email address or best point of contact",
        default:  "hannamunoz@gmail.com",
    },
    {
        type: 'input',
        name: 'title',
        message: "Enter the title of your project",
        default: "My Project",
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter a short project description",
        default: "My Project Description",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
