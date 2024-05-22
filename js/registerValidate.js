document.getElementById("registerForm").addEventListener("submit", function (event){
    event.preventDefault();

const firstName = document.getElementById("firstName").value.trim();
const lastName = document.getElementById("lastName").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

let check = true;

if(!validateName(firstName)){
    check = false;
    alert("Please Enter A Valid First Name Using Letters A - Z");
}

if(!validateName(lastName)){
    check = false;
    alert("Please Enter A Valid Last Name Using Letters A - Z");
}
if(!validateEmail(email)){
    check = false;
    alert("Please Enter A Valid Email Address");
}
if(!validatePassword(password)){
    check = false;
    alert("Please Enter A Valid Password (contains at least one lowercase letter, one uppercase letter, one digit, and is at least 8 characters long).");
}
if(check){
    alert("Registration Successful: Welcome New Member!");
    this.submit();
}
});

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

firstName.addEventListener('change', firstNameChanged);
lastName.addEventListener('change', lastNameChanged);
email.addEventListener('change', emailChanged);
password.addEventListener('change', passwordChanged);

function firstNameChanged(){
    firstName.style.backgroundColor = "#a55233";
    firstName.style.color = "white";
}
function lastNameChanged(){
    lastName.style.backgroundColor = "#a55233";
    lastName.style.color = "white";
}
function emailChanged(){
    email.style.backgroundColor = "#a55233";
    email.style.color = "white";
}
function passwordChanged(){
    password.style.backgroundColor = "#a55233";
    password.style.color = "white";
}

function validateName(name){
    const nameRegex = /^[a-zA-Z]+/;
    return nameRegex.test(name);
}
function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
function validatePassword(password){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}