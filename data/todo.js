const Todos = [
]

function getAll() {
    return Todos;
}
 
function addToDo(todo){
    return Todos.push(todo)
}
  
module.exports = {
    getAll,
    addToDo
};
  