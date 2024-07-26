function myFunction(){
    const myPassword = document.getElementById("myPassword");

    if(myPassword.type === "password"){
        myPassword.type = "text";
    }else{
        myPassword.type = "password"
    }
}

function validate(){
    const myPassword = document.getElementById("myPassword");
    const myUsername = document.getElementById("myUsername");
    const myEmail = document.getElementById("myEmail");

    if(myPassword.value.length >= 8 && myUsername.value.length > 8 && myEmail.value.length > 8){
        // window.location.replace("page.html");
        window.location.href = "page";
        alert("login successful")
    }else{
        alert("Please ensure your inputs are more than 8 characters long")
    }
}





const forms = document.getElementById("forms");
const input = document.getElementById("input");
const email = document.getElementById("email");
const password = document.getElementById("password");

forms.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
    checkEmail();
    checkPassword();
})

function checkInput(){
    if (input.value === ""){
        setErrorFor(input, "please input your name");
    }
    else {
        setSuccessFor(input)
    }
}

function checkEmail(){
    if (email.value === ""){
        setErrorFor(email, "please enter a valid email");
    }
    else {
        setSuccessFor(email)
    }
}

function checkPassword(){
    if (password.value === ""){
        setErrorFor(password, "please input your name");
    }

    else if (password.value.length <= 5){
        setErrorFor(password, "your password must be more than 5 characters long");
    }

    else {
        setSuccessFor(password)
    }
}

function setErrorFor(element, errorMessage) {
    let parentInput = element.parentElement;
    parentInput.classList.add("error");
    let errorDiv = parentInput.querySelector(".errors");
        errorDiv.innerHTML = errorMessage;
    
        parentInput.classList.remove("success");
}

function setSuccessFor(element){
    let parentInput = element.parentElement;

    parentInput.classList.add("success");

    parentInput.classList.remove("error");
}
