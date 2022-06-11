const todoForm1 = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todolist = document.getElementById("todo-list");
let toDos = [];

function saveTodo() {
  localStorage.setItem("Todo", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== Number(li.id));
  saveTodo();
}

function paintTodo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.Text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  list.appendChild(span);
  list.appendChild(button);
  todolist.appendChild(list);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    Text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

todoForm1.addEventListener("submit", handleTodoSubmit);

//function sayHello(item) {
//console.log(item);
//}

const savedTodo = localStorage.getItem("Todo");

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  toDos = parsedTodo;
  parsedTodo.forEach(paintTodo);
}
//(item) => console.log(item)
