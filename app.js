//script.js

//Section 1: TODOs
//TODO: Register submissions from the user on the form
//TODO: Determine the value of the data submitted and add it to a Javascript Array
//TODO: Call the render function to update the table with the new tasks

//Section 2: App state Variables
let tasks = [];

//Section 3: Cached Element References
function References() {
    const taskForm = document.getElementById('taskName').value + ',' + 
    document.getElementById('taskDescription').value + ',' + document.getElementById('taskDeadline').value;
    const taskTable = null;
    console.log(taskForm);
}

