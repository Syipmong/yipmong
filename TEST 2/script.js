
    let registerBTN = document.getElementById("register")
    

    function registerButton(){
    let email = document.getElementById("email");
    let  name = document.getElementById("name");
   
    if(name.value === "" || email.value === ""){
        // if(name.value === "" && email.value === ""){
        // }
        name.value === "" ? alert("enter name field"): alert("Enter email field") ;
            }else if(email.value !=="" ){
                emailLenCheck();
            }
            else {
        alert("Thank you for submitting your form");
        
        }
        
    }
    
    registerBTN.addEventListener('click', function(){
        registerButton();
    })

    function checkBoxInfo(){
        
        let isChecked = false;

        isChecked()
        
    }

let checkbox = document.getElementsByName("reading")[0];
let checkbox2 = document.getElementsByName("travelling")[0];

checkbox.addEventListener('change', function(e){
let popTag = document.getElementsByClassName('pop')[0];
    if(e.target.checked){
        popTag.removeAttribute('hidden')
        popTag.textContent = 'That\'s amazing';
}else{
    popTag.setAttribute('hidden', 'hidden')
}
})

checkbox2.addEventListener('change', function(e){
    let popTag = document.getElementsByClassName('pop')[0];
    if(e.target.checked){
        popTag.removeAttribute('hidden')
        popTag.textContent = 'That\'s amazing';
}else{
    popTag.setAttribute('hidden', 'hidden')
}
})


function emailLenCheck(){
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let emailLength = email.length;

    if(emailLength <= 2){
        alert('email length must be more than 2 characters')
        
    }else{
        alert("Thank you for submitting your form");
        alert(concatNameEmail(name,email))
    }
}

function concatNameEmail(name, email){
    // let concatName = name.concat(email);
    let concatName = `Name: ${name} Email: ${email}`
    return concatName;
}
