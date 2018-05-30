import('./scss/main.scss');
// add task
const addButton = document.querySelector('.main-menu-btn');
addButton.addEventListener('click', function () {
 const newElemOfList = document.createElement('li');
 document.body.appendChild(newElemOfList);

});
