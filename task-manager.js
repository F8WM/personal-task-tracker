function viewTaskList() {
    console.log("Task List:");

    tasks.forEach(function(task, index) {
        console.log(index + 1 + ". " + task.name);
    });
}

viewTaskList();