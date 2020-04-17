const Todos = require('../data/todo');


const index = (req, res, next) => {
  res.render('index', { todos: Todos.getAll() });
}

const create = (req, res) => {
    Todos.addToDo(req.body);
    res.render('index', { todos: Todos.getAll()});
}

module.exports = {
  index,
  create
}
