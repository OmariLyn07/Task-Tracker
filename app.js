//script.js

//Section 1: TODOs
//TODO: Register submissions from the user on the form
//TODO: Determine the value of the data submitted and add it to a Javascript Array
//TODO: Call the render function to update the table with the new tasks

//Section 2: App state Variables
let tasks = [];
let completes = [];

//Section 3.3: Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById('taskTable');

//Section 3.4: Functions and Event Listeners
function handleSubmission(event) {
    event.preventDefault();
    //TODO: Get form input values
    let taskName = document.getElementById('taskName').value;
    let taskDescription = document.getElementById('taskDescription').value;
    let taskDeadline = document.getElementById('taskDeadline').value;
    //TODO: Validate input fields
    if (taskName === '' || taskDeadline === '') {
        alert('Task name and deadline are required!');
    }
    //TODO: Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline});
    render();
}

//Function to render tasks in the table
function render() {
    //TODO: Use array methods to create a new table row of data for each item in the array
    taskTable.innerHTML = tasks.map(task => `
    <tr>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        <td><button onclick="markTaskComplete(this)">Complete</button></td>
        <td><button type="button" value="delete" onclick="removeTask(this)">Remove</button></td>
    </tr>`).join('');
}

//Function to initialize the table
function init() {
    taskTable.innerHTML = ''; //Clear the table
    tasks = []; //Reset the tasks array
    render(); //Call the render function
}
function markTaskComplete(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("taskTable").deleteRow(i);
    completes.push({name: tasks[i].name, description: tasks[i].description, deadline: tasks[i].deadline});
    document.getElementById("taskDone").innerHTML = completes.map(complete => `
    <tr>
        <td>${complete.name}</td>
        <td>${complete.description}</td>
        <td>${complete.deadline}</td>
    </tr>`).join('');
    tasks.splice(i, 1);
}
function removeTask(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("taskTable").deleteRow(i);
    tasks.splice(i, 1);
    
    
}
//Event Listener for form submission
taskForm.addEventListener('submit', handleSubmission);
//Call the init function to set up the initial state of the app
init();