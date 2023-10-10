let inputBox = document.getElementById('addValue');
let addToDo = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoList');

addToDo.addEventListener('click', function(){
  var list = document.createElement('li');
  list.innerText = inputBox.value;
  toDoList.appendChild(list);
  inputBox.value = "";
})