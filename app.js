//script.js

//Section 1: TODOs
//TODO: Register submissions from the user on the form
//TODO: Determine the value of the data submitted and add it to a Javascript Array
//TODO: Call the render function to update the table with the new tasks

//Section 2: App state Variables
let tasks = [];

//Section 3.3: Cached Element References
const taskForm = null;
const taskTable = null;

//Section 3.4: Functions and Event Listeners
function handleSubmission(event) {
    event.preventDefault();
    //TODO: Get form input values
    let taskName = document.getElementById('taskName').value;
    let taskDescription = document.getElementById('taskDescription').value;
    let taskDeadline = document.getElementById('taskDeadline').value;
    //TODO: Validate input fields
    if (taskName === null || taskDeadline === null) {
        alert('Task name and deadline are required!');
    }
    //TODO: Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline});
    render();
}

//Function to render tasks in the table
function render() {
    //TODO: Use array methods to create a new table row of data for each item in the array

}

//Function to initialize the table
function init() {
    taskTable.innerHTML = ''; //Clear the table
    tasks = []; //Reset the tasks array
    render(); //Call the render function
}