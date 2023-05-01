function login(){
    if (document.getElementById("Email").value.length == 0){
        if (document.getElementById("Pass").value.length == 0){
            if (document.getElementById("username").value.length == 0)
            {
            window.alert("Enter the details")
        }
        else{
            window.alert("Enter the Email and Password")
        }
    }
        else{
            if (document.getElementById("username").value.length == 0){
                window.alert("Enter the Username and Email")
            }
            else{
            window.alert("Enter the Email")
        }
        }
    }
    else if (document.getElementById("Pass").value.length == 0 && document.getElementById("username").value.length == 0){
        window.alert("Enter the Password and Username")
    }
    else if (document.getElementById("Pass").value.length == 0){
        window.alert("Enter the Password")
    }
    else if (document.getElementById("username").value.length == 0){
        window.alert("Enter the Username")
    }
    else{
        if (sessionStorage.getItem("User") == document.getElementById("username").value && sessionStorage.getItem("Pass") == document.getElementById("Pass").value && sessionStorage.getItem("email") == document.getElementById("Email").value){
    window.alert("Login successful")
    document.form.action="./home2.html";
        }
    else{
        window.alert("Incorrect details or You haven't signed up yet?");
    }
    }
}

function signup(){
    if (document.getElementById("Email").value.length == 0){
        if (document.getElementById("Pass").value.length == 0){
            if (document.getElementById("username").value.length == 0)
            {
            window.alert("Enter the details")
        }
        else{
            window.alert("Enter the Email and Password")
        }
    }
        else{
            if (document.getElementById("username").value.length == 0){
                window.alert("Enter the Username and Email")
            }
            else{
            window.alert("Enter the Email")
        }
        }
    }
    else if (document.getElementById("Pass").value.length == 0 && document.getElementById("username").value.length == 0){
        window.alert("Enter the Password and Username")
    }
    else if (document.getElementById("Pass").value.length == 0){
        window.alert("Enter the Password")
    }
    else if (document.getElementById("username").value.length == 0){
        window.alert("Enter the Username")
    }
    else{
        sessionStorage.setItem("email",document.getElementById("Email").value);
        sessionStorage.setItem("User",document.getElementById("username").value);
        sessionStorage.setItem("Pass",document.getElementById("Pass").value);
    window.alert("Signup successful")
    document.form.action="./login.html";
    }
}