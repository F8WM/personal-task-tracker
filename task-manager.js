let tasks = [];

function addTask(name) {
    tasks.push({
        name: name,
        priority: "Low"
    });
    console.log("Task added: " + name);
}

function setTaskPriority(index, priority) {
    if (tasks[index] !== undefined) {
        tasks[index].priority = priority;
        console.log("Task priority set to: " + priority);
    }
}

addTask("Complete assignment");
setTaskPriority(0, "High");

console.log(tasks);
