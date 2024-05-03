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

    if(myPassword.value.length >= 8 && myUsername.value.length > 8 && myEmail.value.length > 8 && myEmail.ariaRequired){
        // window.location.replace("page.html");
        window.location.href = "page.html";
        alert("login successful")
    }else{
        alert("Please ensure your inputs are more than 8 characters long")
    }
}