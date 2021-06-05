
// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [] ;

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
description: description,
complete: false,

logTaskState: function (){
return `${this.title} has ${this.complete ? " " : " not "}been completed`
},

completeTask: function(){
  this.complete = true;
}
  };
  return task;
  // taskTitles.push(title);
  // taskDescription.push(description);
  // taskComplete.push(false);

  //console.log(taskComplete);
}

//Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   task.complete = true;
// }

// //Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   const title = task.title;
//   const complete = task.complete ;
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out and refill 🗑"); // task 0
const task2 = newTask("Do Laundry", "🧼  the clothes & dry them"); // task 1
const tasks = [task1,task2];

const before = task1.logTaskState();
task1.completeTask();
const after = task1.logTaskState();
console.log(before, after);
// task2.logTaskState();
// task2.complete();
// task2.logTaskState();
