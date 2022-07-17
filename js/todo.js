const toDoForm = document.getElementById("todo-form");
const toDoinput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODO_KEY = "toDos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODO_KEY,JSON.stringify(toDos));
    // console.log(typeof toDos);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
     toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
     saveToDos();
}

function painToDo(toDoitem) {
const li = document.createElement("li");
li.id = toDoitem.id;
const span = document.createElement("span");
span.innerText = toDoitem.text;
const button = document.createElement("button");
button.innerText = "X"
button.addEventListener("click", deleteToDo);
li.appendChild (span); 
li.appendChild (button); 
toDoList.appendChild(li);
// console.log(li);
}

function handleToDosubmit(event){
event.preventDefault();
const toDoitem = toDoinput.value;
toDoinput.value="";
const newTodoObj = {
    text : toDoitem,
    id : Date.now()
}
toDos.push(newTodoObj);
painToDo(newTodoObj);
saveToDos();
}

toDoForm.addEventListener("submit",handleToDosubmit);

const saveToDo = localStorage.getItem(TODO_KEY);

if (saveToDo !== null) {
    const parseToDos = JSON.parse(saveToDo);
    toDos = parseToDos;
    parseToDos.forEach(painToDo);
        
    };
