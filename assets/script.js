let form = document.querySelector('#loginForm');
// console.log(form);
form.addEventListener('submit',function(e){
    e.preventDefault();
let name = document.querySelector('#name').value;
let password = document.querySelector('#password').value;
console.log(typeof(name));
let nameField = document.querySelector('#name-field');
let passwordField = document.querySelector('#password-field');
if(name==null || name==undefined  || name==""){
    nameField.style.display = "inline";
}else if(password==null || password==undefined || password==""){
    nameField.style.display = "none";
    passwordField.style.display = "inline";
}else if(password.length<6){
    passwordField.style.display = "none";
    passwordField.style.display = "inline";
    passwordField.innerHTML = 'Password Length must be 6';
}else{
    nameField.style.display = "none"
    passwordField.style.display = "none"
    alert('form submitted');
}


});