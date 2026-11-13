let tasks = [
    { name: "Complete assignment", completed: false }
];

function completeTask(index) {
    tasks[index].completed = true;
    console.log("Task completed!");
}

completeTask(0);