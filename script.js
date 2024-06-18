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
        window.location.href = "page.html";
        alert("login successful")
    }else{
        alert("Please ensure your inputs are more than 8 characters long")
    }
}



// const usernameInput = document.getElementById("input");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const submitBtn = document.getElementById("btn");
// const errorMessage = document.getElementById("error");


// errorMessage.style.display = "none";


// submitBtn.addEventListener("click", () => {
    
//     if (usernameInput.value === "" && emailInput.value === "" && passwordInput.value === "") {
        
//         errorMessage.style.display = "block";
//     } else {
        
//         errorMessage.style.display = "none";
//     }
// });




const usernameInput = document.getElementById("input");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("btn");
const check = document.getElementById("check");
const errorMessages = document.querySelectorAll("#error");


submitBtn.addEventListener("click", function() {
    let hasError = false;

    
    if (usernameInput.value === "") {
        errorMessages[0].style.display = "block";
        // hasError = true;
    } else {
        errorMessages.style.display = "none";
    }

  
    if (emailInput.value === "") {
        
        errorMessages[1].style.display = "block";
        // hasError = true;
    } else {
       
        errorMessages.style.display = "none";
    }

  
    if (passwordInput.value === "") {
       
        errorMessages[2].style.display = "block";
        // hasError = true;
    } else {
       
        errorMessages.style.display = "none";
    }

    
    // if (!hasError) {
    //     alert("Form submitted successfully!");
        
    // }
});


check.addEventListener("click", () => {
    if (passwordInput.type === "password"){
        passwordInput.type = "text";
    }else{
        passwordInput.type = "password";
    }
})
