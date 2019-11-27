//Local Storage, 59
localStorage.setItem('nombre', 'Alberto Paulo');

//Session Storage
sessionStorage.setItem('nombre', 'Alberto Paulo');

//Get Item from local Storage
let name;
name = localStorage.getItem('nombre');
console.log(name);

//Deleted from local storage
//localStorage.removeItem('nombre');

//Clear All in the Local Storage
localStorage.clear();

