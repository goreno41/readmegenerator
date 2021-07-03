// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "userName",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",

    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Provide installation instructions.",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide usage information.",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contribution guidelines for this project?",
        name: "guidelines",

    },
    {
        type: "input",
        message: "Provide test instructions for this project.",
        name: "test",
    },
    {
        type: "list",
        message: "Please select the licesne for your project.",
        name: "license",
        choices: ["license A", "license B", "license C"],

    },
];

function userPrompt() {
    inquirer
        .prompt ([
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "userName",
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email",
        
            },
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title",
            },
            {
                type: "input",
                message: "Enter a description of your project.",
                name: "description",
            },
            {
                type: "input",
                message: "Provide installation instructions.",
                name: "installation",
            },
            {
                type: "input",
                message: "Provide usage information.",
                name: "usage",
            },
            {
                type: "input",
                message: "What are the contribution guidelines for this project?",
                name: "guidelines",
        
            },
            {
                type: "input",
                message: "Provide test instructions for this project.",
                name: "test",
            },
            {
                type: "list",
                message: "Please select the licesne for your project.",
                name: "license",
                choices: ["license A", "license B", "license C"],
        
            },

        ])



    .then(data => {
        const readme = `

        <h1 align="center">${data.title} </h1>

        ## Description
        ${data.description}

        ## Table of Contents
        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [Contribution](#contribution)
        - [Test](#test)
        - [Contact](#contact)

        ## Installation
        ${data.installation}

        ## Usage
        ${data.usage}

        ## Contribution
        ${data.guidelines}

        ## Test
        ${data.test}

        ## Contact
        ${data.userName}
        ${data.email}

        `
    })
}

userPrompt();


fs.writeFile('readme.md', readme, err => {
    if (err) {
      console.error(err)
      return
    }
    
  })

