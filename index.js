const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHtml = require("./src/createHtml");
const team = [];

const managerQuestions = [
  {
    message: "What is the managers name?",
    name: "name",
    type: "input",
  },
  {
    message: "What is the managers id?",
    name: "id",
    type: "input",
  },
  {
    message: "What is the managers email",
    name: "email",
    type: "input",
  },
  {
    message: "What is the managers office number?",
    name: "officeNumber",
    type: "input",
  },
];

const employeeQuestions = [
  {
    message: "What type of employee would you like to add?",
    name: "role",
    type: "list",
    choices: ["Engineer", "Intern"],
  },
  {
    message: (answers) => `What is the name of the ${answers.role}?`,
    name: "name",
    type: "input",
  },
  {
    message: (answers) => `What is the id of the ${answers.role}?`,
    name: "id",
    type: "input",
  },
  {
    message: (answers) => `What is the email of the ${answers.role}?`,
    name: "email",
    type: "input",
  },
  {
    message: (answers) => {
      if (answers.role === "Engineer") {
        return `What is the github username of the ${answers.role}?`;
      } else {
        return `What school did the ${answers.role} go to?`;
      }
    },
    name: "extra",
    type: "input",
  },
];

function main() {
  inquirer.prompt(managerQuestions).then((data) => {
    const manager = new Manager(
      data.name,
      data.id,
      data.email,
      data.officeNumber
    );
    team.push(manager);
    addEmployee();
  });
}

function addEmployee() {
  inquirer
    .prompt({
      message: "What would you like to do?",
      name: "choice",
      type: "list",
      choices: ["Add an employee", "Create webpage"],
    })
    .then((data) => {
      if (data.choice === "Add an employee") {
        inquirer.prompt(employeeQuestions).then((data) => {
          if ((data.role = "Engineer")) {
            const employee = new Engineer(
              data.name,
              data.id,
              data.email,
              data.extra
            );
            team.push(employee);
          } else {
            const employee = new Intern(
              data.name,
              data.id,
              data.email,
              data.extra
            );
            team.push(employee);
          }
          addEmployee();
        });
      } else {
        createHtml();
      }
    });
}

function createHtml() {
  console.log("Hello");
}

main();
