import('./scss/main.scss');
// add task

function addTask(e){
 const newElemOfList = document.createElement('li');
 newElemOfList.innerText = e.current.value();
 document.body.appendChild(newElemOfList);
}
