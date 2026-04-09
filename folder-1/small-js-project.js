// Simple Todo List Manager
const todos = [];

function addTodo(task) {
  todos.push({ id: Date.now(), task, done: false });
  console.log(`✓ Added: "${task}"`);
}

function listTodos() {
  if (todos.length === 0) {
    console.log('No todos yet!');
    return;
  }
  console.log('\n📋 Your Todos:');
  todos.forEach((todo, i) => {
    const status = todo.done ? '✓' : '○';
    console.log(`${i + 1}. [${status}] ${todo.task}`);
  });
}

function toggleTodo(index) {
  if (todos[index]) {
    todos[index].done = !todos[index].done;
    console.log(`✓ Toggled: "${todos[index].task}"`);
  }
}

// Demo usage
addTodo('Learn JavaScript');
addTodo('Build a project');
addTodo('Deploy to production');
listTodos();
toggleTodo(0);
listTodos();

// Made
