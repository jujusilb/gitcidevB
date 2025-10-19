// Simple in-memory task list
let tasks = [];
let nextId = 1;

function getTasks() {
  return tasks;
}

function reset() {
  tasks = [];
  nextId = 1;
}

let id=0;
function addTask(name){
    let tache={"name":name,"id":id, "done":false}
    tasks.push(tache);
    id++;
    return tasks.length;
}

function countDone(){
    let countTask=0;
    tasks.forEach(tache=>{
        if(tache.done) countTask++;
    });
    return countTask;
}

module.exports = {
  getTasks,
  reset,
  addTask,
  countDone,
}