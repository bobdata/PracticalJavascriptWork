// Code goes here

var todoList = {
  todos: ['item1','item2','items3'],
  displayTodos: function() {
    console.log('my Todos', this.todos)
  },
  
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(postion, newvalue) {
    this.todos[postion] = newvalue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};