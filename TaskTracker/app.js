const fs = require("fs");
const chalk = require("chalk");

const action = process.argv[2];


let tasks = [];

try{
    const data = fs.readFileSync("task.json", "utf8"); // utf8:- make buffer code to readable code
    tasks = data ? JSON.parse(data) : []; // array ban gaya to push command chalegii
}
 catch (err) {
    tasks = [];
}

if(action == "add"){
    const description = process.argv[3];
    const newTask = {
        id: tasks.length + 1,
        description: description,
        status: "todo",
    }

    tasks.push(newTask);

    fs.writeFileSync("task.json", JSON.stringify(tasks,null,2));

    console.log(chalk.bold.green("✓ Task added successfully"));
}
else if(action == "list"){

    const filter = process.argv[3];
    let filteredTask = tasks;

    if(filter){
        filteredTask = tasks.filter(task => { return task.status === filter });
    }
    if(filteredTask.length === 0){
        console.log(chalk.bold.red("✗ Task not found"));
    }
    else {
        filteredTask.forEach(task => {
            console.log(`Id: ${task.id} | ${task.description} | ${task.status}`)
        })
    }
}
else if(action == "update"){
    const id = process.argv[3];
    const description = process.argv[4];

    let taskFound = false;

     tasks = tasks.map(task => {
        if(task.id == id){
            taskFound = true;

            return {
                ...task,
                description: description,
            }
        }
        return task;
     });
     if(taskFound){
        fs.writeFileSync("task.json", JSON.stringify(tasks, null,2));
        console.log(chalk.green("Task updated successfully!"));
     }
     else{
        console.log(chalk.red("Task not found"));
     }
}
else if(action == "delete"){
    const id = Number(process.argv[3]);

    const updatedTask = tasks.filter(task => task.id !== id);
    if(updatedTask.length === tasks.length){
        console.log(chalk.red("Task not found"));
    }
    else{
        fs.writeFileSync("task.json", JSON.stringify(updatedTask, null, 2));
        console.log(chalk.green("Task deleted successfully!"));
    };

    
}
else if(action == "in-progress" || action == "mark-done"){
    const id = Number(process.argv[3]);
    const status = action === "mark-done" ? "done" : "in-progress";
    
    let taskFound = false;

    tasks = tasks.map(task=> {
        if(task.id === id){
            taskFound = true;
            return{
                ...task,
                status: status,
            };
        }
        return task;
    });
    if (taskFound){
        fs.writeFileSync("task.json", JSON.stringify(tasks, null, 2));
        console.log(`task marked as ${status}`);
    }
    else{
        console.log(chalk.red("Task not found"));
    }
}
else{
    console.log(chalk.red("Unknown Command"));
}












