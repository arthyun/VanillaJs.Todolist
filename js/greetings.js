/*const age = parseInt(prompt("How many people are there?"));

if (isNaN(age)) {
  console.log("Please write a Number");
} else if (15 <= age && age <= 80) {
  console.log("Right");
} else if (15 > age || 0 < age) {
  console.log("false");
} else if (0 !== age) {
  console.log("Please write a positive number");
}

function handleWindowCopy() {
  alert("copies!");
}
function handleWindowClick() {
  alert("Thanks for Click!");
}
window.addEventListener("copy", handleWindowCopy);

window.addEventListener("click", handleWindowClick);
*/

/*
if (h1.classList.contains(clickedClass)) {
  h1.classList.remove(clickedClass);
} else {
  h1.classList.add(clickedClass);
}
}
const h1 = document.querySelector("div h1");

function handleMouseClick() {
  const clickedClass = "clicked";
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleMouseClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  greeting.innerText = "Hello " + username; // `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const logoutForm = document.querySelector("#logout-form");
const logoutInput = document.querySelector("#logout-form input");

function onLogoutSubmit(event) {
  event.preventDefault();
  logoutForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Thank you! ${savedUsername}`;
}

logoutForm.addEventListener("submit", onLogoutSubmit);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");
const greeting = document.querySelector("#greeting");
const todoForm = document.getElementById("todo-form");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  paintGreeting(username);
  localStorage.setItem("Username", username);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("Username");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
}
