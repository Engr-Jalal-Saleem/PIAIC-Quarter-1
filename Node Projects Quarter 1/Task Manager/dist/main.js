#!/usr/bin/env node
// Importing required modules
import inquirer from "inquirer";
// Array to store tasks
let tasks = [];
// Function to display the menu to the user
function showMenu() {
    console.log("Task Manager");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Mark Task as Completed");
    console.log("4. Exit");
}
// Function to add a new task
function addTask() {
    inquirer
        .prompt({
        type: "input",
        name: "title",
        message: "Enter task title:",
    })
        .then((answers) => {
        // Creating a new task
        const newTask = {
            id: tasks.length + 1,
            title: answers.title,
            completed: false,
        };
        // Adding the new task to the tasks array
        tasks.push(newTask);
        console.log("Task added successfully!");
        showMenu();
        promptUser();
    });
}
// Function to view all tasks
function viewTasks() {
    console.log("Tasks:");
    tasks.forEach((task) => {
        const status = task.completed ? "✅" : "❌";
        console.log(`${task.id}. [${status}] ${task.title}`);
    });
    showMenu();
    promptUser();
}
// Function to mark a task as completed
function markTaskCompleted() {
    inquirer
        .prompt({
        type: "input",
        name: "taskId",
        message: "Enter the ID of the task to mark as completed:",
    })
        .then((answers) => {
        const taskId = parseInt(answers.taskId, 10);
        const task = tasks.find((t) => t.id === taskId);
        if (task) {
            task.completed = true;
            console.log(`Task ${taskId} marked as completed!`);
        }
        else {
            console.log(`Task with ID ${taskId} not found.`);
        }
        showMenu();
        promptUser();
    });
}
// Function to prompt the user for their choice and call the appropriate function
function promptUser() {
    inquirer
        .prompt({
        type: "input",
        name: "choice",
        message: "Enter your choice:",
    })
        .then((answers) => {
        switch (answers.choice) {
            case "1":
                addTask();
                break;
            case "2":
                viewTasks();
                break;
            case "3":
                markTaskCompleted();
                break;
            case "4":
                console.log("Exiting...");
                process.exit();
                break;
            default:
                console.log("Invalid choice. Please try again.");
                showMenu();
                promptUser();
        }
    });
}
// Main program
showMenu();
promptUser();
