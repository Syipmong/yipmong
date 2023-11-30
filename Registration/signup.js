function toggleForm(formId) {
    document.getElementById('loginForm').style.display = formId === 'loginForm' ? 'block' : 'none';
    document.getElementById('signupForm').style.display = formId === 'signupForm' ? 'block' : 'none';
}

function login() {
    let uName = document.getElementsByName("loginUsername")[0];
    let pwd = document.getElementsByName("loginPassword")[0];

    if(uName.value === "" || pwd.value === ""){
        alert("Enter Your details")
    }else{
        alert(uName.value)
       redirectHomeScreen();
    }

    saveSession(pwd,uName);
}

function signup() {
    validatePassword();
}

function redirectHomeScreen(){
    window.location.href='C:/projects/www_projects/yipmong/index.html';
}

function validatePassword(){
    let passw = document.getElementsByName("signupPassword")[0];
    let confPassw = document.getElementsByName("confirmPassword")[0];
    
    if (passw.value === confPassw.value && emailValidate() === true ){
        
        if(passw.value === "" || confPassw.value === ""){
            alert("Please enter your password");
        }else{
        alert("passwords match!");
        redirectHomeScreen();
        }
    }else{
        alert("passwords do not match!");

    }

}

function emailValidate(){
    let email = document.getElementsByName("signupEmail")[0].value;

    for(let i = 0; i <= length; i++){
        if(!email.includes("@gmail.com")){
            alert("Email is not a valid email");
            return false;
            }else{
        return true;
         }
   
    }
}


    function saveSession(password, username) {
        pwd = password;
        uName = username;
        localStorage.setItem('password', pwd);
        localStorage.setItem('username', uName);
        console.log("Running...")
    }
