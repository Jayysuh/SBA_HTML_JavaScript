document.getElementById("loginForm").addEventListener("submit", function (event){
    event.preventDefault();

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

let check = true;

if(!validateEmail(email)){
    check = false;
    alert("Please Enter A Valid Email Address");
}

if(!validatePassword(password)){
    check = false;
    alert("Please Enter A Valid Password (contains at least one lowercase letter, one uppercase letter, one digit, and is at least 8 characters long).");
}

if(check){
    alert("Login Successful: Welcome Valued Member!");
    this.submit();
}
});

const email = document.getElementById("email");
const password = document.getElementById("password");

email.addEventListener('change', emailChanged);
password.addEventListener('change', passwordChanged);

function emailChanged(){
    email.style.backgroundColor = "#a55233";
    email.style.color = "white";
}

function passwordChanged(){
    password.style.backgroundColor = "#a55233";
    password.style.color = "white";
}

function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}
